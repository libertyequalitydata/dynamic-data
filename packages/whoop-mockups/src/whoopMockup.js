import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/whoop-data";
// https://app.swaggerhub.com/apis/DovOps/whoop-unofficial-api/2.0.1#/auth

const UserModel = {
  id: () => {
    return getRandomInt(0,2147483648)-1
  },
  avatarUrl: () => {
    return ""
  },
  createdAt: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    return finalDate.toISOString();
  },
  updatedAt : (createdAt) => {
    let finalDate = new Date(0);
    finalDate.setFullYear(createdAt.split('-')[0]);
    finalDate.setMonth(createdAt.split('-')[1]-1);
    finalDate.setDate(createdAt.split('T')[0].split('-')[2])
    finalDate.setHours(createdAt.split('T')[1].split(':')[0],createdAt.split('T')[1].split(':')[1],createdAt.split('T')[1].split(':')[2].split("Z")[0])
    finalDate.setTime(finalDate.getTime()+getRandomInt(1000,94672800000))
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  firstName: () => {
    let firstName = ""
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(3, 15)
    firstName += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      firstName += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return firstName
  },
  lastName: () => {
    let lastName = ""
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(3, 15)
    lastName += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      lastName += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return lastName
  },
  city: () => {
    return ""
  },
  country: () => {
    let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let string = ""
    string += letters.charAt(Math.floor(Math.random() * letters.length));
    string += letters.charAt(Math.floor(Math.random() * letters.length));
    return string
  },
  adminDivision: () => {
    return ""
  },
  fullName: (firstname, lastname) => {
    return firstname + " " + lastname
  },
  preferences: () => {
    return {}
  },
  email: () => {
    let string = ""
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let ends = [".com", ".co.uk"]
    let length = getRandomInt(3, 10)
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    switch(getRandomInt(0,2)){
      case 1:
        string += "."
        length = getRandomInt(3, 10)
        for (var i = 0; i<length; i++){
          string += letters.charAt(Math.floor(Math.random() * 
          letters.length));
        }
      default:
        string += "@"
        length = getRandomInt(3, 10)
        for (var i = 0; i<length; i++){
          string += letters.charAt(Math.floor(Math.random() * 
          letters.length));
        }
    }
    string+= ends[getRandomInt(0,ends.length)-1]
    return string
  },
  concealed: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  membershipStatus: () => {
    return ""
  },
  privacyProfile: () => {
    return {}
  },
}

const ProfileModel = {
  userID: () => {
    return getRandomInt(0,2147483648)-1
  },
  bioDataId: () => {
    return getRandomInt(0,2147483648)-1
  },
  height: () => {
    return 0.0
  },
  weight: () => { 
    return 0.0
  },
  birthday: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    return finalDate.toISOString();
  },
  gender: () => {
    return ""
  },
  unitSystem: () => {
    let units = ["imperial", "metric"]
    return units[getRandomInt(0,units.length)-1]
  },
  fitnessLevel: () => {
    return ""
  },
  createdAt: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    return finalDate.toISOString();
  },
  updatedAt : (createdAt) => {
    let finalDate = new Date(0);
    finalDate.setFullYear(createdAt.split('-')[0]);
    finalDate.setMonth(createdAt.split('-')[1]-1);
    finalDate.setDate(createdAt.split('T')[0].split('-')[2])
    finalDate.setHours(createdAt.split('T')[1].split(':')[0],createdAt.split('T')[1].split(':')[1],createdAt.split('T')[1].split(':')[2].split("Z")[0])
    finalDate.setTime(finalDate.getTime()+getRandomInt(1000,94672800000))
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  timezoneOffset: () => {
    let offsets = ["-1200","-1100","-1000","-0930","-0900","-0800","-0700","-0600","-0500","-0400","-0330","-0300","-0200","-0100","±0000","+0100","+0200","+0300","+0330","+0400","+0430","+0500","+0530","+0545","+0600","+0630","+0700","+0800","+0845","+0900","+0930","+1000","+1030","+1100","+1200","+1245","+1300","+1400"]
    return offsets[getRandomInt(0,offsets.length)-1]
  },
  id: () => {
    return getRandomInt(0,2147483648)-1
  },
  maxHeartRate: () => {
    return getRandomInt(150,201)-1
  },
  minHeartRate: () => {
    return getRandomInt(60,100)-1
  },
  avgHeartRate: (maxHeartRate,minHeartRate) => {
    let value = ((maxHeartRate + minHeartRate)/2)
    if (Number.isInteger(value)){
      return value.toFixed(1)
    } else {
      return value
    }
    
  },
  kilojoules: () => {
    return 0.0
  },
  canUploadData: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
}

const WorkoutModel = {
    cycle_id: () => {
      return getRandomInt(0,2147483648)-1
    },
    created_at: () => {
      var finalDate = new Date(0);
      var maxMonthDate = new Date(0);
      finalDate.setFullYear(getRandomInt(2020, 2050));
      finalDate.setMonth(getRandomInt(0, 11));
      finalDate.setDate(1);
      maxMonthDate = finalDate;
      maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
      maxMonthDate.setDate(0);
      finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
      finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
      return finalDate.toISOString();
    },
    updated_at : (createdAt) => {
      let finalDate = new Date(0);
      finalDate.setFullYear(createdAt.split('-')[0]);
      finalDate.setMonth(createdAt.split('-')[1]-1);
      finalDate.setDate(createdAt.split('T')[0].split('-')[2])
      finalDate.setHours(createdAt.split('T')[1].split(':')[0],createdAt.split('T')[1].split(':')[1],createdAt.split('T')[1].split(':')[2].split("Z")[0])
      finalDate.setTime(finalDate.getTime()+getRandomInt(1000,94672800000))
      return finalDate.toISOString().split('.')[0]+"Z"
    },
    sport_id: () => {
      return getRandomInt(0,2147483648)-1
    },
    activity_id: () => {
      return getRandomInt(0,2147483648)-1
    },
    gps_enabled: () => {
      switch (getRandomInt(0,2)){
        case 1:
          return true
        case 2:
          return false
      }
    },
    intensity_score: () => {
      return 0.0
    },
    max_heart_rate: () => {
      return getRandomInt(150,201)-1
    },
    average_heart_rate: () => {
      return getRandomInt(120,160)-1
    },
    distance: () => {
      return getRandomInt(0,100)
    },
    performance: () => {
      return {}
    },
    energy: () => {
      return {}
    },
    rpe: () => {
      return {}
    },
    raw_intensity_score: () => {
      return 0.005378655454516813
    },
    altitude_gain: () => {
      return {}
    },
    altitude_change: () => {
      return {}
    },
    cumulative_workout_intensity: () => {
      return 0.00000000
    },
    zone_durations: () => {
      return [
        0,
        0,
        212488,
        1861085,
        410473,
        0
      ]
    },
    projected_score: () => {
      return 0.005378655454516813
    },
    confidence: () => {
      return {}
    },
    wac_prediction: () => {
      return {}
    },
    kilojoules: () => {
      return 0.005378655454516813
    },
    user_id: () => {
      return getRandomInt(0,2147483648)-1
    },
    during: () => {
      var finalDate = new Date(0);
      var maxMonthDate = new Date(0);
      finalDate.setFullYear(getRandomInt(2020, 2050));
      finalDate.setMonth(getRandomInt(0, 11));
      finalDate.setDate(1);
      maxMonthDate = finalDate;
      maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
      maxMonthDate.setDate(0);
      finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
      finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
      var date2 = new Date(finalDate.getTime());
      date2.setTime(date2.getTime() + getRandomInt(5000,7200000))
      return [finalDate.toISOString(),date2.toISOString()]

    },
    timezone_offset: () => {
      let offsets = ["-1200","-1100","-1000","-0930","-0900","-0800","-0700","-0600","-0500","-0400","-0330","-0300","-0200","-0100","±0000","+0100","+0200","+0300","+0330","+0400","+0430","+0500","+0530","+0545","+0600","+0630","+0700","+0800","+0845","+0900","+0930","+1000","+1030","+1100","+1200","+1245","+1300","+1400"]
      return offsets[getRandomInt(0,offsets.length)-1]
    },
    survey_response_id: () => {
      return getRandomInt(0,2147483648)-1
    },
    percent_recorded: () => {
      return getRandomInt(0,101)-1
    },
    auto_detected: () => {
      switch (getRandomInt(0,2)){
        case 1:
          return true
        case 2:
          return false
      }
    },
    state: () => {
      return "complete"
    },
    responded: () => {
      switch (getRandomInt(0,2)){
        case 1:
          return true
        case 2:
          return false
      }
    },
    team_act_id: () => {
      return getRandomInt(0,2147483648)-1
    },
    source: () => {
      return "auto"
    },
}

const ActivityType = {
  id: () => {
    return getRandomInt(0,2147483648)-1
  },
  name: () => {
    return "Jumping Rope"
  },
  created_at: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    return finalDate.toISOString();
  },
  updated_at : (createdAt) => {
    let finalDate = new Date(0);
    finalDate.setFullYear(createdAt.split('-')[0]);
    finalDate.setMonth(createdAt.split('-')[1]-1);
    finalDate.setDate(createdAt.split('T')[0].split('-')[2])
    finalDate.setHours(createdAt.split('T')[1].split(':')[0],createdAt.split('T')[1].split(':')[1],createdAt.split('T')[1].split(':')[2].split("Z")[0])
    finalDate.setTime(finalDate.getTime()+getRandomInt(1000,94672800000))
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  has_gps: () => {
    switch(getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  icon_url: () => {
    return "https://s3-us-west-2.amazonaws.com/icons.whoop.com/mobile/activities/jumping_rope.png"
  },
  is_current: () => {
    switch(getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  has_survey: () => {
    switch(getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  category: () => {
    return "cardiovascular|non-cardiovascular"
  },
}

const AggregateData = {
  total_count: () => {
    return getRandomInt(0,2147483648)-1
  },
  offset: () => {
    return getRandomInt(0,2147483648)-1
  },
  // records: () => {

  // },
}

const CycleRecords = {
  id: () => {
    return getRandomInt(0,2147483648)-1
  },
  created_at: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    return finalDate.toISOString();
  },
  updated_at : (createdAt) => {
    let finalDate = new Date(0);
    finalDate.setFullYear(createdAt.split('-')[0]);
    finalDate.setMonth(createdAt.split('-')[1]-1);
    finalDate.setDate(createdAt.split('T')[0].split('-')[2])
    finalDate.setHours(createdAt.split('T')[1].split(':')[0],createdAt.split('T')[1].split(':')[1],createdAt.split('T')[1].split(':')[2].split("Z")[0])
    finalDate.setTime(finalDate.getTime()+getRandomInt(1000,94672800000))
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  scaled_strain: () => {
    return 0.0
  },
  during: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    var date2 = new Date(finalDate.getTime());
    date2.setTime(date2.getTime() + getRandomInt(5000,7200000))
    return [finalDate.toISOString(),date2.toISOString()]

  },
  user_id: () => {
    return getRandomInt(0,2147483648)-1
  },
  sleep_need: () => {
    return null
  },
  predicted_end: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    return finalDate.toISOString();
  },
  timezone_offset: () => {
    let offsets = ["-1200","-1100","-1000","-0930","-0900","-0800","-0700","-0600","-0500","-0400","-0330","-0300","-0200","-0100","±0000","+0100","+0200","+0300","+0330","+0400","+0430","+0500","+0530","+0545","+0600","+0630","+0700","+0800","+0845","+0900","+0930","+1000","+1030","+1100","+1200","+1245","+1300","+1400"]
    return offsets[getRandomInt(0,offsets.length)-1]
  },
  intensity_score: () => {
    return null
  },
  data_state: () => {
    return ""
  },
  day_strain: () => {
    return 0.0
  },
  day_kilojoules: () => {
    return 0.0
  },
  day_avg_heart_rate: () => {
    return getRandomInt(0,2147483648)-1
  },
  day_max_heart_rate: () => {
    return getRandomInt(0,2147483648)-1
  },
}
const SleepModel = {
  cycle_id: () => {
    return getRandomInt(0,2147483648)-1
  },
  created_at: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    return finalDate.toISOString();
  },
  updated_at : (createdAt) => {
    let finalDate = new Date(0);
    finalDate.setFullYear(createdAt.split('-')[0]);
    finalDate.setMonth(createdAt.split('-')[1]-1);
    finalDate.setDate(createdAt.split('T')[0].split('-')[2])
    finalDate.setHours(createdAt.split('T')[1].split(':')[0],createdAt.split('T')[1].split(':')[1],createdAt.split('T')[1].split(':')[2].split("Z")[0])
    finalDate.setTime(finalDate.getTime()+getRandomInt(1000,94672800000))
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  activity_id: () => {
    return getRandomInt(0,2147483648)-1
  },
  during: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    var date2 = new Date(finalDate.getTime());
    date2.setTime(date2.getTime() + getRandomInt(5000,7200000))
    return [finalDate.toISOString(),date2.toISOString()]

  },
  score: () => {
    return getRandomInt(0,2147483648)-1
  },
  quality_duration: () => {
    return getRandomInt(0,2147483648)-1
  },
  latency: () => {
    return getRandomInt(0,2147483648)-1
  },
  max_heart_rate: () => {
    return getRandomInt(0,2147483648)-1
  },
  average_heart_rate: () => {
    return getRandomInt(0,2147483648)-1
  },
  debt_pre: () => {
    return getRandomInt(0,2147483648)-1
  },
  debt_post: () => {
    return getRandomInt(0,2147483648)-1
  },
  need_from_strain: () => {
    return getRandomInt(0,2147483648)-1
  },
  sleep_need: () => {
    return getRandomInt(0,2147483648)-1
  },
  habitual_sleep_need: () => {
    return getRandomInt(0,2147483648)-1
  },
  disturbances: () => {
    return getRandomInt(0,2147483648)-1
  },
  time_in_bed: () => {
    return getRandomInt(0,2147483648)-1
  },
  light_sleep_duration: () => {
    return getRandomInt(0,2147483648)-1
  },
  slow_wave_sleep_duration: () => {
    return getRandomInt(0,2147483648)-1
  },
  rem_sleep_duration: () => {
    return getRandomInt(0,2147483648)-1
  },
  cycles_count: () => {
    return getRandomInt(0,2147483648)-1
  },
  wake_duration: () => {
    return getRandomInt(0,2147483648)-1
  },
  arousal_time: () => {
    return getRandomInt(0,2147483648)-1
  },
  no_data_duration: () => {
    return getRandomInt(0,2147483648)-1
  },
  in_sleep_efficiency: () => {
    return 0.0
  },
  credit_from_naps: () => {
    return getRandomInt(0,2147483648)-1
  },
  hr_baseline: () => {
    return getRandomInt(0,2147483648)-1
  },
  respiratory_rate: () => {
    return 0.0
  },
  sleep_consistency: () => {
    return getRandomInt(0,2147483648)-1
  },
  algo_version: () => {
    return "4.2.0"
  },
  projected_score: () => {
    return getRandomInt(0,2147483648)-1
  },
  projected_sleep: () => {
    return getRandomInt(0,2147483648)-1
  },
  optimal_sleep_times: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    var date2 = new Date(finalDate.getTime());
    date2.setTime(date2.getTime() + getRandomInt(5000,7200000))
    return [finalDate.toISOString(),date2.toISOString()]

  },
  kilojoules: () => {
    return null
  },
  user_id: () => {
    return getRandomInt(0,2147483648)-1
  },
  timezone_offset: () => {
    let offsets = ["-1200","-1100","-1000","-0930","-0900","-0800","-0700","-0600","-0500","-0400","-0330","-0300","-0200","-0100","±0000","+0100","+0200","+0300","+0330","+0400","+0430","+0500","+0530","+0545","+0600","+0630","+0700","+0800","+0845","+0900","+0930","+1000","+1030","+1100","+1200","+1245","+1300","+1400"]
    return offsets[getRandomInt(0,offsets.length)-1]
  },
  percent_recorded: () => {
    return getRandomInt(0,101)-1
  },
  auto_detected: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  state: () => {
    return "complete"
  },
  responded: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  team_act_id: () => {
    return getRandomInt(0,2147483648)-1
  },
  source: () => {
    return "auto+user"
  },
  is_normal: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  is_significant: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  is_nap: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
}
const RecoveryRecords = {
  during: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    var date2 = new Date(finalDate.getTime());
    date2.setTime(date2.getTime() + getRandomInt(5000,7200000))
    return "["+finalDate.toISOString()+","+date2.toISOString()+"]"
  },
  id: ()=>{
    return getRandomInt(0,2147483648)-1
  },
  date: ()=>{
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    let offsets = ["-12:00","-11:00","-10:00","-09:30","-09:00","-08:00","-07:00","-06:00","-05:00","-04:00","-03:30","-03:00","-02:00","-01:00","±00:00","+01:00","+02:00","+03:00","+03:30","+04:00","+04:30","+05:00","+05:30","+05:45","+06:00","+06:30","+07:00","+08:00","+08:45","+09:00","+09:30","+10:00","+10:30","+11:00","+12:00","+12:45","+13:00","+14:00"]
    return finalDate.toISOString().split("Z")[0] + offsets[getRandomInt(0,offsets.length)-1];

  },
  calibrating: ()=>{
    switch(getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  created_at: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    return finalDate.toISOString();
  },
  updated_at : (createdAt) => {
    let finalDate = new Date(0);
    finalDate.setFullYear(createdAt.split('-')[0]);
    finalDate.setMonth(createdAt.split('-')[1]-1);
    finalDate.setDate(createdAt.split('T')[0].split('-')[2])
    finalDate.setHours(createdAt.split('T')[1].split(':')[0],createdAt.split('T')[1].split(':')[1],createdAt.split('T')[1].split(':')[2].split("Z")[0])
    finalDate.setTime(finalDate.getTime()+getRandomInt(1000,94672800000))
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  user_id: ()=>{
    return getRandomInt(0,2147483648)-1
  },
  sleep_id: ()=>{
    return getRandomInt(0,2147483648)-1
  },
  survey_response_id: ()=>{
    return getRandomInt(0,2147483648)-1
  },
  cycle_id: ()=>{
    return getRandomInt(0,2147483648)-1
  },
  responded: ()=>{
    switch(getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  recovery_score: ()=>{
    return getRandomInt(0,2147483648)-1
  },
  resting_heart_rate: ()=>{
    return getRandomInt(0,2147483648)-1
  },
  hrv_rmssd: ()=>{
    return 0.057343356
  },
  state: ()=>{
    return "complete"
  },
  prob_covid: ()=>{
    return 0.057343356
  },
  hr_baseline: ()=>{
    return getRandomInt(0,2147483648)-1
  },
  skin_temp_celsius: ()=>{
    return 32.4
  },
  spo2: ()=>{
    return 93.25
  },
  algo_version: ()=>{
    return "4.0.0"
  },
  rhr_component: ()=>{
    return 0.5811901
  },
  hrv_component: ()=>{
    return 0.30885226
  },
  history_size: ()=>{
    return getRandomInt(0,2147483648)-1
  },
  from_sws: ()=>{
    switch(getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  recovery_rate: ()=>{
    return 0.0
  },
  is_normal: ()=>{
    switch(getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
}

const MembershipModel = {
  affiliate: () => {
    return {}
  },
    balance:() => {
      return getRandomInt(0,100000)
    },
    canUpgrade: () => {
      switch (getRandomInt(0,2)){
        case 1:
          return true
        case 2:
          return false
      }
    },
    cancelAtPeriodEnd:() => {
      switch (getRandomInt(0,2)){
        case 1:
          return true
        case 2:
          return false
      }
    },
    canceledAt: () => {
      return ""
    },
    cancellationOffer: () => {
      let eligible = false;
      switch (getRandomInt(0,2)){
        case 1:
          eligible =  true
        case 2:
          eligible =  false
      }
      return {
        eligible: eligible,
        coupon50: "CANCEL50",
        coupon100: "FREEMONTH01302020",
        couponOneMonth50: "CANCEL50ONEMONTH"
      }
    },
    cardDigits: () => {
      return 444
    },
    cardType: () => {
      let types = ["MasterCard"]
      return types[getRandomInt(0,types.length)-1]
    },
    checkoutOrigin: () => {
      let origins = ["international"]
      return origins[getRandomInt(0,origins.length)-1]
    },
    commitmentEnd: (commitmentStart) => {
      let finalDate = new Date(0);
      finalDate.setFullYear(commitmentStart.split('-')[0]);
      finalDate.setMonth(commitmentStart.split('-')[1]-1);
      finalDate.setDate(commitmentStart.split('T')[0].split('-')[2])
      finalDate.setHours(commitmentStart.split('T')[1].split(':')[0],commitmentStart.split('T')[1].split(':')[1],commitmentStart.split('T')[1].split(':')[2].split("Z")[0])
      finalDate.setTime(finalDate.getTime()+getRandomInt(1000,94672800000))
      return finalDate.toISOString().split('.')[0]+"Z"
    },
    commitmentStart: () => {
      var finalDate = new Date(0);
      var maxMonthDate = new Date(0);
      finalDate.setFullYear(getRandomInt(2020, 2050));
      finalDate.setMonth(getRandomInt(0, 11));
      finalDate.setDate(1);
      maxMonthDate = finalDate;
      maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
      maxMonthDate.setDate(0);
      finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
      finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
      return finalDate.toISOString();
    },
    coupon: () => {
      return {
        amount_off: 0,
        currency: "string",
        duration: "string",
        duration_in_months: 0,
        id: "string",
        metadata: {},
        name: "string",
        percent_off: 0
      }
    },
    expirationDate: () => {
      var finalDate = new Date(0);
      var maxMonthDate = new Date(0);
      finalDate.setFullYear(getRandomInt(2020, 2050));
      finalDate.setMonth(getRandomInt(0, 11));
      finalDate.setDate(1);
      maxMonthDate = finalDate;
      maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
      maxMonthDate.setDate(0);
      finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
      finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
      return finalDate.toISOString();
    },
    membershipStatus: () => {
      return ""
    },
    nextBillAmount: () => {
      return 0.0
    },
    nextBillDate: () => {
      var finalDate = new Date(0);
      var maxMonthDate = new Date(0);
      finalDate.setFullYear(getRandomInt(2020, 2050));
      finalDate.setMonth(getRandomInt(0, 11));
      finalDate.setDate(1);
      maxMonthDate = finalDate;
      maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
      maxMonthDate.setDate(0);
      finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
      finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
      return finalDate.toISOString();
    },
    promotion: () => {
      return ""
    },
    retentionPromo: () => {
      switch (getRandomInt(0,2)){
        case 1:
          return true
        case 2:
          return false
      }
    },
    scheduledCancelDate: () => {
      var finalDate = new Date(0);
      var maxMonthDate = new Date(0);
      finalDate.setFullYear(getRandomInt(2020, 2050));
      finalDate.setMonth(getRandomInt(0, 11));
      finalDate.setDate(1);
      maxMonthDate = finalDate;
      maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
      maxMonthDate.setDate(0);
      finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
      finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
      return finalDate.toISOString();
    },
    strapSerial: () => {
      return "4X123567"
    },
    userId: () => {
      return 123456
    },
}
const EventModel = {
  activity_id: () => {
    return getRandomInt(0,2147483648)-1
  },
  during: () => {
      var finalDate = new Date(0);
      var maxMonthDate = new Date(0);
      finalDate.setFullYear(getRandomInt(2020, 2050));
      finalDate.setMonth(getRandomInt(0, 11));
      finalDate.setDate(1);
      maxMonthDate = finalDate;
      maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
      maxMonthDate.setDate(0);
      finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
      finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
      var date2 = new Date(finalDate.getTime());
      date2.setTime(date2.getTime() + getRandomInt(5000,7200000))
      return "["+finalDate.toISOString()+","+date2.toISOString()+"]"
      
  },
  type: () => {
    let types = ["rem"]
    return types[getRandomInt(0,types.length)-1]
  },
}
const ReportModel = {
  total_count: () => {
    return 0
  },
  offset: () => {
    return 0
  },
}

const ReportRecordModel = {
  id: () => {
    return getRandomInt(0,2147483648)-1
  },
  user_id: () => {
    return getRandomInt(0,2147483648)-1
  },
  report_type: () => {
    let types = ["WEEK", "MONTH"]
    return types[getRandomInt(0,types.length)-1]
  },
  report_during: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    var date2 = new Date(finalDate.getTime());
    date2.setTime(date2.getTime() + getRandomInt(5000,7200000))
    return "["+finalDate.toISOString()+","+date2.toISOString()+"]"
  },
  view_datetime: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    return finalDate.toISOString()
  },  
  created_at: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    return finalDate.toISOString()
  },
  updated_at: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    return finalDate.toISOString()
  },
}

const SurveryResponseModel = {
  questionId: () => {
    return 0
  },
  answer: () => {
    return 0
  },
  label: () => {
    return ""
  },
}

const VoiceOfWhoopModel = {
  text: () => {
    return ""
  },
  header: () => {
    return ""
  },
  key: () => {
    return ""
  },
}

const MetricModel = {
  name: () => {
    return "heart_rate"
  },
  start: () => {
    return 0
  },
  values: () => {
    return [
      {
        data: 0,
        time: 0
      }
    ]
  },
}

const dataModels = {
  User: {
    data: MOCK.User,
    mockup: UserModel,
  },
  Workout: {
    data: MOCK.Workout,
    mockup: WorkoutModel
  },
  ActivityType: {
    data: MOCK.ActivityType,
    mockup: ActivityType
  },
  AggregateData: {
    data: MOCK.AggregateData,
    mockup: AggregateData
  },
  Membership: {
    data: MOCK.Membership,
    mockup: MembershipModel
  },
  Event: {
    data: MOCK.Event,
    mockup: EventModel
  },
  Report: {
    data: MOCK.Report,
    mockup: ReportModel
  },
  SleepDetails: {
    data: MOCK.SleepDetails,
    mockup: SleepModel
  },
  SurveryResponse: {
    data: MOCK.SurveryResponse,
    mockup: SurveryResponseModel
  },
  VoiceOfWhoop: {
    data: MOCK.VoiceOfWhoop,
    mockup: VoiceOfWhoopModel
  },
  VoiceOfWhoopCycle: {
    data: MOCK.VoiceOfWhoopCycle,
    mockup: VoiceOfWhoopModel
  },
  Metric: {
    data: MOCK.Metric,
    mockup: MetricModel
  },

};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getUserMockupData(dataType, dataModel, dataDate) {
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
    "avatarUrl",
    "createdAt",
    "updatedAt",
    "firstName",
    "lastName",
    "city",
    "country",
    "adminDivision",
    "fullName",
    "preferences",
    "email",
    "concealed",
    "membershipStatus",
    "privacyProfile",
    "profile"
  ].forEach((key, i) => {
    switch (key) {
      case "profile":
        [
          "userID",
          "bioDataId",
          "height",
          "weight",
          "birthday",
          "gender",
          "unitSystem",
          "fitnessLevel",
          "createdAt",
          "updatedAt",
          "timezoneOffset",
          "id",
          "maxHeartRate",
          "minHeartRate",
          "avgHeartRate",
          "kilojoules",
          "canUploadData"
        ].forEach((key2, i) => {
          switch(key2){
            case "avgHeartRate":
              mockupData[key][key2] = ProfileModel[key2](mockupData[key]["maxHeartRate"], mockupData[key]["minHeartRate"]);
              break;
            case "updatedAt":
              mockupData[key][key2] = ProfileModel[key2](mockupData[key]["createdAt"]);
              break;
            default:
              mockupData[key][key2] = ProfileModel[key2]();
              break;
          }
        })
        break;
      case "updatedAt":
        mockupData[key] = mockupModel[key](mockupData["createdAt"]);
        break;
      case "fullName":
        mockupData[key] = mockupModel[key](mockupData["firstName"], mockupData["lastName"]);
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

 

  return mockupData;
}

export function getWorkoutMockupData(dataType, dataModel, dataDate) {
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
  mockupData.forEach((object)=>{
    [
      "cycle_id",
      "created_at",
      "updated_at",
      "sport_id",
      "activity_id",
      "gps_enabled",
      "intensity_score",
      "max_heart_rate",
      "average_heart_rate",
      "distance",
      "performance",
      "energy",
      "rpe",
      "raw_intensity_score",
      "altitude_gain",
      "altitude_change",
      "cumulative_workout_intensity",
      "zone_durations",
      "projected_score",
      "confidence",
      "wac_prediction",
      "kilojoules",
      "user_id",
      "during",
      "timezone_offset",
      "survey_response_id",
      "percent_recorded",
      "auto_detected",
      "state",
      "responded",
      "team_act_id",
      "source"
    ].forEach((key, i) => {
      switch (key) {
        case "updated_at":
          object[key] = mockupModel[key](object["created_at"]);
          break;
        default:
          object[key] = mockupModel[key]();
          break;
      }
    });
  
  })
  
 

  return mockupData;
}

export function getActivityTypeMockupData(dataType, dataModel, dataDate) {
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
  mockupData.forEach((object)=>{
    [
      "id",
      "name",
      "created_at",
      "updated_at",
      "has_gps",
      "icon_url",
      "is_current",
      "has_survey",
      "category",
    ].forEach((key, i) => {
      switch (key) {
        case "updated_at":
          object[key] = mockupModel[key](object["created_at"]);
          break;
        default:
          object[key] = mockupModel[key]();
          break;
      }
    });
  
  })
  
 

  return mockupData;
}

export function getAggregateDataMockupData(dataType, dataModel, dataDate) {
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
      "total_count",
      "offset",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
    mockupData["records"].forEach((object)=>{
      [
        "id",
        "created_at",
        "updated_at",
        "scaled_strain",
        "during",
        "user_id",
        "sleep_need",
        "predicted_end",
        "timezone_offset",
        "intensity_score",
        "data_state",
        "day_strain",
        "day_kilojoules",
        "day_avg_heart_rate",
        "day_max_heart_rate"
      ].forEach((key, i) => {
        switch(key){
          case "updated_at":
            object["cycle"][key] = CycleRecords[key](object["cycle"]["created_at"])
            break
          default:
            object["cycle"][key] = CycleRecords[key]()
        }
      });
      object["sleeps"].forEach((sleep)=>{
        
        [
          "cycle_id",
          "created_at",
          "updated_at",
          "activity_id",
          "during",
          "score",
          "quality_duration",
          "latency",
          "max_heart_rate",
          "average_heart_rate",
          "debt_pre",
          "debt_post",
          "need_from_strain",
          "sleep_need",
          "habitual_sleep_need",
          "disturbances",
          "time_in_bed",
          "light_sleep_duration",
          "slow_wave_sleep_duration",
          "rem_sleep_duration",
          "cycles_count",
          "wake_duration",
          "arousal_time",
          "no_data_duration",
          "in_sleep_efficiency",
          "credit_from_naps",
          "hr_baseline",
          "respiratory_rate",
          "sleep_consistency",
          "algo_version",
          "projected_score",
          "projected_sleep",
          "optimal_sleep_times",
          "kilojoules",
          "user_id",
          "timezone_offset",
          "percent_recorded",
          "auto_detected",
          "state",
          "responded",
          "team_act_id",
          "source",
          "is_normal",
          "is_significant",
          "is_nap"
        ].forEach((key, i) => {
          switch(key){
            case "updated_at":
              sleep[key] =  SleepModel[key](sleep["created_at"])
              break;
            default:
              sleep[key] =  SleepModel[key]()
              break;
          }
        })
      });
      [
        "during",
        "id",
        "date",
        "calibrating",
        "created_at",
        "updated_at",
        "user_id",
        "sleep_id",
        "survey_response_id",
        "cycle_id",
        "responded",
        "recovery_score",
        "resting_heart_rate",
        "hrv_rmssd",
        "state",
        "prob_covid",
        "hr_baseline",
        "skin_temp_celsius",
        "spo2",
        "algo_version",
        "rhr_component",
        "hrv_component",
        "history_size",
        "from_sws",
        "recovery_rate",
        "is_normal"
      ].forEach((key, i) => {
        switch(key){
          case "updated_at":
              object["recovery"][key] =  RecoveryRecords[key](object["recovery"]["created_at"])
              break;
          default:
            object["recovery"][key] = RecoveryRecords[key]()
        }
      })
      object["workouts"].forEach((workout)=>{
        [
          "cycle_id",
          "created_at",
          "updated_at",
          "sport_id",
          "activity_id",
          "gps_enabled",
          "intensity_score",
          "max_heart_rate",
          "average_heart_rate",
          "distance",
          "performance",
          "energy",
          "rpe",
          "raw_intensity_score",
          "altitude_gain",
          "altitude_change",
          "cumulative_workout_intensity",
          "zone_durations",
          "projected_score",
          "confidence",
          "wac_prediction",
          "kilojoules",
          "user_id",
          "during",
          "timezone_offset",
          "survey_response_id",
          "percent_recorded",
          "auto_detected",
          "state",
          "responded",
          "team_act_id",
          "source"
        ].forEach((key, i) => {
          switch(key){
            case "updated_at":
              workout[key] =  WorkoutModel[key](workout["created_at"])
              break;
            default:
              workout[key] =  WorkoutModel[key]()
              break;
          }
        })
      })
      
    })
  
  
 

  return mockupData;
}

export function getMembershipMockupData(dataType, dataModel, dataDate) {
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
      "affiliate",
      "balance",
      "canUpgrade",
      "cancelAtPeriodEnd",
      "canceledAt",
      "cancellationOffer",
      "cardDigits",
      "cardType",
      "checkoutOrigin",
      "commitmentStart",
      "commitmentEnd",
      "coupon",
      "expirationDate",
      "membershipStatus",
      "nextBillAmount",
      "nextBillDate",
      "promotion",
      "retentionPromo",
      "scheduledCancelDate",
      "strapSerial",
      "userId"
    ].forEach((key, i) => {
      switch (key) {
        case "commitmentEnd":
          mockupData[key] = mockupModel[key](mockupData["commitmentStart"]);
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
    
      
  
  
 

  return mockupData;
}

export function getEventMockupData(dataType, dataModel, dataDate) {
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
  mockupData.forEach((object)=>{
    [
      "activity_id",
      "during",
      "type",
    ].forEach((key, i) => {
      switch (key) {
        default:
          object[key] = mockupModel[key]();
          break;
      }
    });
  })
    

  return mockupData;
}

export function getReportMockupData(dataType, dataModel, dataDate) {
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
      "total_count",
      "offset",
    ].forEach((key, i) => {
      switch (key) {
        case "records":
          mockupData[key].forEach((object)=>{
            [
              "id",
              "user_id",
              "report_type",
              "report_during",
              "view_datetime",
              "created_at",
              "updated_at"
            ].forEach((key2, i) => {
              object[key2] = ReportRecordModel[key2]()
            })
          })
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getSleepDetailsMockupData(dataType, dataModel, dataDate) {
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
      "cycle_id",
      "created_at",
      "updated_at",
      "activity_id",
      "during",
      "score",
      "quality_duration",
      "latency",
      "max_heart_rate",
      "average_heart_rate",
      "debt_pre",
      "debt_post",
      "need_from_strain",
      "sleep_need",
      "habitual_sleep_need",
      "disturbances",
      "time_in_bed",
      "light_sleep_duration",
      "slow_wave_sleep_duration",
      "rem_sleep_duration",
      "cycles_count",
      "wake_duration",
      "arousal_time",
      "no_data_duration",
      "in_sleep_efficiency",
      "credit_from_naps",
      "hr_baseline",
      "respiratory_rate",
      "sleep_consistency",
      "algo_version",
      "projected_score",
      "projected_sleep",
      "optimal_sleep_times",
      "kilojoules",
      "user_id",
      "timezone_offset",
      "percent_recorded",
      "auto_detected",
      "state",
      "responded",
      "team_act_id",
      "source",
      "is_normal",
      "is_significant",
      "is_nap",
    ].forEach((key, i) => {
      switch (key) {
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

export function getSurveryResponseMockupData(dataType, dataModel, dataDate) {
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
    mockupData.forEach((object)=>{
      [
        "questionId",
        "answer",
        "label",
      ].forEach((key, i) => {
        switch (key) {
          default:
            object[key] = mockupModel[key]();
            break;
        }
      });
    })
    

    

  return mockupData;
}

export function getVoiceOfWhoopMockupData(dataType, dataModel, dataDate) {
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
        "text",
        "header",
        "key",
      ].forEach((key, i) => {
        switch (key) {
          default:
            mockupData[key] = mockupModel[key]();
            break;
        }
      });

    

    

  return mockupData;
}

export function getVoiceOfWhoopCycleMockupData(dataType, dataModel, dataDate) {
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
        "flags",
        "baseline",
        "hoursOfSleep",
        "naps",
        "recentStrain",
        "sleepDebt",
        "sleepDisturbances",
        "sleepLatency",
        "sleepNeed",
        "sleepPerformanceScore",
        "timeInBed",
      ].forEach((key, i) => {
        switch (key) {
          case "flags":
            break;
          default:
            [
              "text",
              "header",
              "key",
            ].forEach((key2)=>{
              mockupData[key][key2] = mockupModel[key2]();
            })
            break;
        }
      });

    

    

  return mockupData;
}

export function getMetricMockupData(dataType, dataModel, dataDate) {
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
        "name",
        "start",
        "values",
      ].forEach((key, i) => {
        switch (key) {
          default:
            mockupData[key] = mockupModel[key]();
            break;
        }
      });

    

    

  return mockupData;
}


