'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function getRandomInt(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

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

const ActivitiesDataAsync = ["activeduration\tactivezoneminutes\tactivitylevel\tactivityname\tactivitytypeid\taverageheartrate\tcalories\tcalorieslink\tduration\televationgain\thasactivezoneminutes\theartratelink\theartratezones\tlastmodified\tlogid\tlogtype\tmanualvaluesspecified\toriginalduration\toriginalstarttime\tstarttime\ttcxlink\tdistance\tdistanceunit\tpace\tsource\tspeed\tsteps", "1332000\t{minutesinheartratezones=[{minutemultiplier=1, minutes=0, order=1, type=FAT_BURN, zonename=Fat Burn}, {minutemultiplier=2, minutes=0, order=3, type=PEAK, zonename=Peak}, {minutemultiplier=0, minutes=0, order=0, type=OUT_OF_ZONE, zonename=Out of Range}, {minutemultiplier=2, minutes=0, order=2, type=CARDIO, zonename=Cardio}], totalminutes=0},[{minutes=0, name=sedentary}, {minutes=6, name=lightly}, {minutes=6, name=fairly}, {minutes=11, name=very}]\tWalk\t90013\t83\t160\thttps://api.fitbit.com/1/user/-/activities/calories/date/2021-12-29/2021-12-29/1min/time/17:11/17:34.json\t1332000\t6.096\ttrue\thttps://api.fitbit.com/1/user/-/activities/heart/date/2021-12-29/2021-12-29/1sec/time/17:11:50/17:34:02.json\t[{caloriesout=160.4715, max=96, min=30, minutes=22, name=Out of Range}, {caloriesout=0.0, max=118, min=96, minutes=0, name=Fat Burn}, {caloriesout=0.0, max=146, min=118, minutes=0, name=Cardio}, {caloriesout=0.0, max=220, min=146, minutes=0, name=Peak}]\t2021-12-29T15:57:42.000Z\t45050781089\tauto_detected\t{calories=false, distance=false, steps=false}\t1332000\t2021-12-29T17:11:50.000+02:00\t2021-12-29T17:11:50.000+02:00\thttps://api.fitbit.com/1/user/-/activities/45050781089.tcx\t\t\t\t\t\t1789"];

const ActivitiesSummary = {
  activeScore: -1,
  activityCalories: 1101,
  caloriesBMR: 1099,
  caloriesOut: 2030,
  distances: [{
    activity: "total",
    distance: 4.63
  }, {
    activity: "tracker",
    distance: 4.63
  }, {
    activity: "loggedActivities",
    distance: 0
  }, {
    activity: "veryActive",
    distance: 1.1
  }, {
    activity: "moderatelyActive",
    distance: 0.63
  }, {
    activity: "lightlyActive",
    distance: 2.88
  }, {
    activity: "sedentaryActive",
    distance: 0
  }],
  elevation: 0,
  fairlyActiveMinutes: 23,
  floors: 0,
  heartRateZones: [{
    caloriesOut: 1430.686,
    max: 97,
    min: 30,
    minutes: 787,
    name: "Out of Range"
  }, {
    caloriesOut: 578.16575,
    max: 119,
    min: 97,
    minutes: 100,
    name: "Fat Burn"
  }, {
    caloriesOut: 11.0925,
    max: 146,
    min: 119,
    minutes: 1,
    name: "Cardio"
  }, {
    caloriesOut: 0,
    max: 220,
    min: 146,
    minutes: 0,
    name: "Peak"
  }],
  lightlyActiveMinutes: 178,
  marginalCalories: 654,
  restingHeartRate: 53,
  sedentaryMinutes: 212,
  steps: 6536,
  veryActiveMinutes: 19
};

const ActivitiesSummaryAsync = ["activityscore\tactivitycalories\tcaloriesbmr\tcaloriesout\tdistances\televation\tfairlyactiveminutes\tfloors\theartratezones\tlightlyactiveminutes\tmarginalcalories\trestingheartrate\tsedentaryminutes\tsteps\tveryactiveminutes", "-1\t277\t1014\t1254\t{total=1460, tracker=1460, loggedactivities=0, veryactive=490, moderatelyactive=400, lightlyactive=570, sedentaryactive=0}\t6\t7\t2\t{out_of_range={caloriesout=1216, max=96, min=30, minutes=813}, fat_burn={caloriesout=30, max=118, min=96, minutes=4}, cardio={caloriesout=0, max=146, min=118, minutes=0}, peak={caloriesout=0, max=220, min=146, minutes=0}}\t48\t146\t52\t185\t2111\t8"];

const HeartRateData = {
  p_date: "2021-12-30",
  p_time: "00:00:00",
  p_value: 47
};

const HeartRateDataAsync = ["p_date\tp_time\tp_value", "2021-12-30\t00:00:00\t47"];

const HeartRateSummary = {
  OUT_OF_ZONE: {
    cals: 1960,
    mins: 1420
  },
  FAT_BURN: {
    cals: 156,
    mins: 20
  },
  CARDIO: {
    cals: 0,
    mins: 0
  },
  PEAK: {
    cals: 0,
    mins: 0
  }
};

const HeartRateSummaryAsync = ["out_of_zone\tfat_burn\tcardio\tpeak", "{cals=707, mins=1440}\t{cals=0, mins=0}\t{cals=0, mins=0}\t{cals=0, mins=0}"];

const SleepData = {
  p_timestamp: 1640803620000,
  p_datetime: "2021-12-29T18:47:00.000Z",
  p_level: "wake",
  p_seconds: 270
};

const SleepDataAsync = ["p_timestamp\tp_datetime\tp_level\tp_seconds", "1640803620000\t2021-12-29T18:47:00.000Z\twake\t270"];

const SleepSummary = {
  deep: {
    count: 4,
    minutes: 27,
    thirtyDayAvgMinutes: 67
  },
  light: {
    count: 20,
    minutes: 277,
    thirtyDayAvgMinutes: 228
  },
  rem: {
    count: 5,
    minutes: 78,
    thirtyDayAvgMinutes: 109
  },
  wake: {
    count: 17,
    minutes: 78,
    thirtyDayAvgMinutes: 77
  },
  startTimeTS: 1633817040000,
  endTimeTS: 1633844670000,
  startTime: "2021-10-09T22:04:00.000Z",
  endTime: "2021-10-10T05:44:30.000Z",
  minutesAfterWakeup: 0,
  minutesAsleep: 382,
  minutesAwake: 78,
  minutesToFallAsleep: 0,
  timeInBed: 460
};

const SleepSummaryAsync = ["deep\tlight\trem\twake\tstarttimets\tendtimets\tstarttime\tendtime\tminutesafterwakeup\tminutesasleep\tminutesawake\tminutestofallasleep\ttimeinbed", "{count=3, minutes=75, thirtydayavgminutes=74}\t{count=40, minutes=329, thirtydayavgminutes=260}\t{count=6, minutes=64, thirtydayavgminutes=106}\t{count=34, minutes=101, thirtydayavgminutes=67}\t1640803620000\t1640837790000\t2021-12-29T18:47:00.000Z\t2021-12-30T04:16:30.000Z\t0\t468\t101\t0\t569"];

const SleepQuality = {
  p_timestamp: 1640542920000,
  p_datetime: "2021-12-26T18:22:00.000Z",
  p_value: 47,
  p_level: "wake"
};

const SleepQualityAsync = ["p_timestamp\tp_datetime\tp_value\tp_level", "1640542920000\t2021-12-26T18:22:00.000Z\t60\twake"];

//
const Data = {
  ActivitiesData,
  ActivitiesDataAsync,
  ActivitiesSummary,
  ActivitiesSummaryAsync,
  HeartRateData,
  HeartRateDataAsync,
  HeartRateSummary,
  HeartRateSummaryAsync,
  SleepData,
  SleepDataAsync,
  SleepSummary,
  SleepSummaryAsync,
  SleepQuality,
  SleepQualityAsync
};

var _ActivitiesDataModel;

var ActivitiesDataModel = (_ActivitiesDataModel = {
  activeDuration: function activeDuration() {
    return getRandomInt(30000, 3600000); // return 0;
  },
  //https://math.stackexchange.com/questions/1276206/method-of-generating-random-numbers-that-sum-to-100-is-this-truly-random
  activityLevel: function activityLevel(max) {
    var n1 = null;
    var n2 = null;
    var n3 = null;
    n1 = getRandomInt(1, 103);

    while (n2 === null || n2 === n1) {
      n2 = getRandomInt(1, 103);
    }

    while (n3 === null || n3 === n1 || n3 === n2) {
      n3 = getRandomInt(1, 103);
    }

    var ordered = [Math.max(n1, n2, n3), Math.min(n1, n2, n3)];

    if (!ordered.includes(n1)) {
      ordered.push(n1);
    } else if (!ordered.includes(n2)) {
      ordered.push(n2);
    } else {
      ordered.push(n3);
    }

    var a = (ordered[1] - 1) / 100;
    var b = (ordered[2] - ordered[1] - 1) / 100;
    var c = (ordered[0] - ordered[2] - 1) / 100;
    var d = (103 - ordered[0]) / 100;
    return [{
      minutes: Math.round(a * max / 60000),
      name: "sedentary"
    }, {
      minutes: Math.round(b * max / 60000),
      name: "lightly"
    }, {
      minutes: Math.round(c * max / 60000),
      name: "fairly"
    }, {
      minutes: Math.round(d * max / 60000),
      name: "very"
    }];
  },
  activityName: function activityName() {
    var example = ["Walk", "Run", "Swimming", "Cycling"];
    return example[getRandomInt(0, example.length) - 1];
  },
  activityTypeId: function activityTypeId() {
    return getRandomInt(8000, 9999);
  },
  averageHeartRate: function averageHeartRate() {
    function randomG(v) {
      var r = 0;

      for (var i = v; i > 0; i--) {
        r += getRandomInt(80, 180);
      }

      return r / v;
    }

    return Math.round(randomG(6));
  },
  calories: function calories() {
    return getRandomInt(0, 2000);
  },
  caloriesLink: function caloriesLink(time, duration) {
    var date = time.split("T")[0]; // let timeEdit = time.split("T")[1].split(":")[0] + ":" + time.split("T")[1].split(":")[1]

    var timeEdit = new Date(0);
    timeEdit.setHours(time.split("T")[1].split(":")[0]);
    timeEdit.setMinutes(time.split("T")[1].split(":")[1]);
    timeEdit.setSeconds(parseInt(time.split("T")[1].split(":")[2].split(".")[0]) + duration / 1000);
    return "https://api.fitbit.com/1/user/-/activities/calories/date/" + date + "/" + date + "/1min/time/" + time.split("T")[1].split(":")[0] + ":" + time.split("T")[1].split(":")[1] + "/" + timeEdit.getHours() + ":" + timeEdit.getMinutes() + ".json";
  },
  heartRateLink: function heartRateLink(time, duration) {
    var date = time.split("T")[0]; // let timeEdit = time.split("T")[1].split(":")[0] + ":" + time.split("T")[1].split(":")[1]

    var timeEdit = new Date(0);
    timeEdit.setHours(time.split("T")[1].split(":")[0]);
    timeEdit.setMinutes(time.split("T")[1].split(":")[1]);
    timeEdit.setSeconds(parseInt(time.split("T")[1].split(":")[2].split(".")[0]) + duration / 1000);
    return "https://api.fitbit.com/1/user/-/activities/heart/date/" + date + "/" + date + "/1sec/time/" + time.split("T")[1].split(":")[0] + ":" + time.split("T")[1].split(":")[1] + ":" + time.split("T")[1].split(":")[2].split(".")[0] + "/" + timeEdit.getHours() + ":" + timeEdit.getMinutes() + ":" + timeEdit.getSeconds() + ".json";
  },
  activeZoneMinutes: function activeZoneMinutes(hasActiveZoneMinutes) {
    if (hasActiveZoneMinutes) {
      var cardio = getRandomInt(0, 20);
      var fatBurn = getRandomInt(0, 20);
      var outOfZone = getRandomInt(0, 20);
      var peak = getRandomInt(0, 20);
      return {
        minutesInHeartRateZones: [{
          minuteMultiplier: 2,
          minutes: cardio,
          order: 2,
          type: 'CARDIO',
          zoneName: 'Cardio'
        }, {
          minuteMultiplier: 1,
          minutes: fatBurn,
          order: 1,
          type: 'FAT_BURN',
          zoneName: 'Fat Burn'
        }, {
          minuteMultiplier: 0,
          minutes: outOfZone,
          order: 0,
          type: 'OUT_OF_ZONE',
          zoneName: 'Out of Range'
        }, {
          minuteMultiplier: 2,
          minutes: peak,
          order: 3,
          type: 'PEAK',
          zoneName: 'Peak'
        }],
        totalMinutes: peak + outOfZone + fatBurn + cardio
      };
    } else {
      return undefined;
    }
  },
  hasActiveZoneMinutes: function hasActiveZoneMinutes() {
    var x = getRandomInt(0, 2);

    switch (x) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  duration: function duration(activeDuration) {
    return activeDuration + getRandomInt(0, 3600000); // return 0;
  },
  elevationGain: function elevationGain(type) {
    if (["Swimming"].includes(type)) {
      return 0.0000;
    } else {
      return getRandomInt(0, 100000) / 1000;
    } // return 0;

  },
  originalStartTime: function originalStartTime() {
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
    var timezones = ["-12:00", "-11:00", "-10:00", "-9:30", "-9:00", "-08:00", "-07:00", "-06:00", "-05:00", "-04:00", "-03:30", "-03:00", "-02:00", "-01:00", "+00:00", "+01:00", "+02:00", "+03:00", "+03:30", "+04:00", "+04:30", "+05:00", "+05:30", "+05:45", "+06:00", "+06:30", "+07:00", "+08:00", "+08:45", "+09:00", "+09:30", "+10:00", "+10:30", "+11:00", "+12:00", "+12:45", "+13:00", "+14:00"];
    var finalDateStr = finalDate.toISOString();
    return finalDateStr.split("Z")[0] + timezones[getRandomInt(0, timezones.length) - 1]; // return 0;
  },
  lastModified: function lastModified(originalStartTime) {
    var x;

    if (originalStartTime.includes("+")) {
      x = originalStartTime.split("+")[0];
      "+" + originalStartTime.split("+")[1];
    } else {
      x = originalStartTime.split("-")[0];
      "-" + originalStartTime.split("-")[3];
    }

    var date = new Date(x); //7 days

    date.setTime(date.getTime() + getRandomInt(1, 604800000));
    return date.toISOString();
  },
  logType: function logType() {
    var values = ["auto_detected", "manual", "tracker", "mobile_run"];
    return values[getRandomInt(0, values.length) - 1];
  },
  steps: function steps(type, duration) {
    // const example = ["Walk", "Run", "Swimming", "Cycling"]
    //https://www.verywellfit.com/pedometer-step-equivalents-for-exercises-and-activities-3435742
    switch (type) {
      case "Walk":
        // 2200 every 20 minutes
        return Math.floor(2200 * (duration / 1200000));

      case "Run":
        // 1600 every 10 minutes
        return Math.floor(1600 * (duration / 600000));

      case "Swimming":
        // 138 every minute
        return Math.floor(138 * (duration / 60000));

      case "Cycling":
        // 147 every minute
        return Math.floor(147 * (duration / 60000));

      default:
        return getRandomInt(0, 9999);
    }
  },
  tcxLink: function tcxLink(logID) {
    return "https://api.fitbit.com/1/user/-/activities/" + logID + ".tcx";
  }
}, _defineProperty(_ActivitiesDataModel, "logType", function logType() {
  var values = ["mobile_run", "example_2", "example_3"];
  return values[getRandomInt(0, values.length) - 1];
}), _defineProperty(_ActivitiesDataModel, "logId", function logId() {
  return getRandomInt(10000000000, 99999999999);
}), _defineProperty(_ActivitiesDataModel, "manualValuesSpecified", function manualValuesSpecified() {
  function trueOrFalse() {
    var x = getRandomInt(0, 1);

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
  };
}), _ActivitiesDataModel); //https://dev.fitbit.com/build/reference/web-api/activity/get-daily-activity-summary/

var ActivitiesSummaryModel = {
  //Inspiration for data ranges:
  //https://community.fitbit.com/t5/Web-API-Development/Cannot-get-activities-from-Get-Daily-Activity-Summary/m-p/1548614#M6260
  activeScore: function activeScore() {
    return getRandomInt(-1, 10);
  },
  activityCalories: function activityCalories() {
    return getRandomInt(1000, 2000);
  },
  caloriesBMR: function caloriesBMR() {
    var sex = getRandomInt(0, 1);

    switch (sex) {
      case 0:
        //Male
        return getRandomInt(1200, 2440);

      case 1:
        //Female
        return getRandomInt(1120, 1685);
    }
  },
  caloriesOut: function caloriesOut(heartRates) {
    var calories = 0;
    heartRates.forEach(function (heartRate) {
      calories += heartRate.caloriesOut;
    });
    return Math.round(calories + getRandomInt(0, 100));
  },
  distances: function distances() {
    return [{
      activity: "total",
      distance: getRandomInt(0, 1000) / 100
    }, {
      activity: "tracker",
      distance: getRandomInt(0, 1000) / 100
    }, {
      activity: "loggedActivities",
      distance: getRandomInt(0, 1000) / 100
    }, {
      activity: "veryActive",
      distance: getRandomInt(0, 1000) / 100
    }, {
      activity: "moderatelyActive",
      distance: getRandomInt(0, 1000) / 100
    }, {
      activity: "lightlyActive",
      distance: getRandomInt(0, 1000) / 100
    }, {
      activity: "sedentaryActive",
      distance: getRandomInt(0, 1000) / 100
    }];
  },
  elevation: function elevation() {
    return getRandomInt(0, 1000) / 100;
  },
  fairlyActiveMinutes: function fairlyActiveMinutes() {
    return getRandomInt(0, 1000);
  },
  floors: function floors() {
    return getRandomInt(0, 20);
  },
  heartRateZones: function heartRateZones() {
    var heartRate1 = getRandomInt(85, 100);
    var heartRate2 = getRandomInt(115, 125);
    var heartRate3 = getRandomInt(145, 155);
    var heartRate4 = getRandomInt(215, 225);
    var minutes1 = getRandomInt(800, 1000);
    var minutes2 = getRandomInt(400, 799);
    var minutes3 = getRandomInt(0, 399);
    var minutes4;

    if (minutes3 > 1) {
      minutes4 = getRandomInt(0, minutes3 - 1);
    } else {
      minutes4 = 0;
    }

    return [{
      caloriesOut: minutes1 * (1200.33336 / 812),
      max: heartRate1,
      min: 30,
      minutes: minutes1,
      name: "Out of Range"
    }, {
      caloriesOut: minutes2 * (1409.4564 / 619),
      max: heartRate2,
      min: heartRate1,
      minutes: minutes2,
      name: "Fat Burn"
    }, {
      caloriesOut: minutes3 * 6.98904,
      max: heartRate3,
      min: heartRate2,
      minutes: minutes3,
      name: "Cardio"
    }, {
      caloriesOut: minutes3 * 10,
      max: heartRate4,
      min: heartRate3,
      minutes: minutes4,
      name: "Peak"
    }];
  },
  lightlyActiveMinutes: function lightlyActiveMinutes() {
    return getRandomInt(0, 250);
  },
  marginalCalories: function marginalCalories() {
    return getRandomInt(0, 2000);
  },
  restingHeartRate: function restingHeartRate() {
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
  sedentaryMinutes: function sedentaryMinutes() {
    return getRandomInt(0, 1000);
  },
  steps: function steps() {
    return getRandomInt(100, 30000);
  },
  veryActiveMinutes: function veryActiveMinutes() {
    return getRandomInt(0, 200);
  }
};
var SleepSummaryModel = {
  deep: function deep(sleepTime, lightTime, remTime) {
    //Prevents issue where there is a difference of 1 from sleepTime and summation of minutes in each sleep type (deep, light, rem) when rounding
    var avg;
    var deepTime = sleepTime - lightTime - remTime;

    if (deepTime >= 10) {
      avg = deepTime + getRandomInt(-10, 10);
    } else {
      avg = deepTime + getRandomInt(-deepTime, 10);
    }

    return {
      count: getRandomInt(1, 20),
      minutes: deepTime,
      thirtyDayAvgMinutes: avg
    };
  },
  light: function light(timeSlept, percentage) {
    var avg;
    var lightTime = Math.round(timeSlept * percentage);

    if (lightTime >= 10) {
      avg = lightTime + getRandomInt(-10, 10);
    } else {
      avg = lightTime + getRandomInt(-lightTime, 10);
    }

    return {
      count: getRandomInt(1, 20),
      minutes: lightTime,
      thirtyDayAvgMinutes: avg
    };
  },
  rem: function rem(timeSlept, percentage) {
    var avg;
    var remTime = Math.round(timeSlept * percentage);

    if (remTime >= 10) {
      avg = remTime + getRandomInt(-10, 10);
    } else {
      avg = remTime + getRandomInt(-remTime, 10);
    }

    return {
      count: getRandomInt(1, 20),
      minutes: remTime,
      thirtyDayAvgMinutes: avg
    };
  },
  wake: function wake(minutesAwake) {
    var avg;

    if (minutesAwake >= 10) {
      avg = minutesAwake + getRandomInt(-10, 10);
    } else {
      avg = minutesAwake + getRandomInt(-minutesAwake, 10);
    }

    return {
      count: getRandomInt(1, 20),
      minutes: minutesAwake,
      thirtyDayAvgMinutes: avg
    };
  },
  startTimeTS: function startTimeTS() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));

    if (getRandomInt(1, 2) === 1) {
      finalDate.setHours(getRandomInt(20, 23), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    } else {
      finalDate.setHours(getRandomInt(0, 2), getRandomInt(1, 59), getRandomInt(1, 59), getRandomInt(1, 999));
    }

    return finalDate.getTime();
  },
  endTimeTS: function endTimeTS(timestamp, timeInBed) {
    var x = new Date(timestamp);
    x.setMinutes(x.getMinutes() + timeInBed);
    return x.getTime();
  },
  startTime: function startTime(timestamp) {
    var x = new Date(timestamp);
    return x.toISOString();
  },
  endTime: function endTime(timestamp) {
    var x = new Date(timestamp);
    return x.toISOString();
  },
  minutesAfterWakeup: function minutesAfterWakeup() {
    return getRandomInt(0, 30);
  },
  minutesAsleep: function minutesAsleep() {
    return getRandomInt(240, 600);
  },
  minutesAwake: function minutesAwake() {
    return getRandomInt(1, 100);
  },
  minutesToFallAsleep: function minutesToFallAsleep() {
    return getRandomInt(0, 30);
  }
};
var HeartRateSummaryModel = {
  OUT_OF_ZONE: function OUT_OF_ZONE() {
    var calPerMin = 1960 / 1420;
    var minutes = getRandomInt(0, 2000);
    return {
      cals: Math.round(calPerMin * minutes),
      mins: minutes
    };
  },
  FAT_BURN: function FAT_BURN() {
    var calPerMin = 156 / 20;
    var minutes = getRandomInt(0, 2000);
    return {
      cals: Math.round(calPerMin * minutes),
      mins: minutes
    };
  },
  CARDIO: function CARDIO() {
    var calPerMin = 10;
    var minutes = getRandomInt(0, 2000);
    return {
      cals: Math.round(calPerMin * minutes),
      mins: minutes
    };
  },
  PEAK: function PEAK() {
    var calPerMin = 15;
    var minutes = getRandomInt(0, 2000);
    return {
      cals: Math.round(calPerMin * minutes),
      mins: minutes
    };
  }
};
var SleepQualityModel = {
  p_timestamp: function p_timestamp(date) {
    var x = new Date(date);
    return x.getTime();
  },
  p_datetime: function p_datetime() {
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
  p_value: function p_value() {
    return getRandomInt(0, 100);
  },
  p_level: function p_level() {
    var values = ['wake', 'example2', 'example3'];
    return values[getRandomInt(0, values.length) - 1];
  }
};
var SleepDataModel = {
  p_timestamp: function p_timestamp(date) {
    var x = new Date(date);
    return x.getTime();
  },
  p_datetime: function p_datetime() {
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
  p_level: function p_level() {
    var values = ['wake', 'example2', 'example3'];
    return values[getRandomInt(0, values.length) - 1];
  },
  p_seconds: function p_seconds() {
    return getRandomInt(0, 600);
  }
};
var HeartRateDataModel = {
  p_date: function p_date() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    return finalDate.getFullYear() + "-" + finalDate.getMonth() + "-" + finalDate.getDate();
  },
  p_time: function p_time() {
    var hour = getRandomInt(0, 23);
    var minute = getRandomInt(0, 59);
    var second = getRandomInt(0, 59);
    var string = "";

    if (hour < 10) {
      string += "0";
    }

    string += hour + ":";

    if (minute < 10) {
      string += "0";
    }

    string += minute + ":";

    if (second < 10) {
      string += "0";
    }

    string += second;
    return string;
  },
  p_value: function p_value() {
    return getRandomInt(30, 80);
  }
};
var dataModels = {
  ActivitiesData: {
    data: Data.ActivitiesData,
    mockup: ActivitiesDataModel
  },
  ActivitiesDataAsync: {
    data: Data.ActivitiesDataAsync,
    mockup: ActivitiesDataModel
  },
  ActivitiesSummary: {
    data: Data.ActivitiesSummary,
    mockup: ActivitiesSummaryModel
  },
  ActivitiesSummaryAsync: {
    data: Data.ActivitiesSummaryAsync,
    mockup: ActivitiesSummaryModel
  },
  HeartRateData: {
    data: Data.HeartRateData,
    mockup: HeartRateDataModel
  },
  HeartRateDataAsync: {
    data: Data.HeartRateDataAsync,
    mockup: HeartRateDataModel
  },
  HeartRateSummary: {
    data: Data.HeartRateSummary,
    mockup: HeartRateSummaryModel
  },
  HeartRateSummaryAsync: {
    data: Data.HeartRateSummaryAsync,
    mockup: HeartRateSummaryModel
  },
  SleepData: {
    data: Data.SleepData,
    mockup: SleepDataModel
  },
  SleepDataAsync: {
    data: Data.SleepDataAsync,
    mockup: SleepDataModel
  },
  SleepSummary: {
    data: Data.SleepSummary,
    mockup: SleepSummaryModel
  },
  SleepSummaryAsync: {
    data: Data.SleepSummary,
    mockup: SleepSummaryModel
  },
  SleepQuality: {
    data: Data.SleepQuality,
    mockup: SleepQualityModel
  },
  SleepQualityAsync: {
    data: Data.SleepQualityAsync,
    mockup: SleepQualityModel
  }
};
function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}
function getActivitiesMockupData(dataType, dataModel, dataDate) {
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var mockupDataRow = dataModels[dataModel].data[1].split("\t");
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach(function (k, i) {
      mockupData[k] = mockupDataRow[i];
    });
  }

  ["hasActiveZoneMinutes", "activeDuration", "activityLevel", "activityName", "averageHeartRate", "elevationGain", "duration", "originalDuration", "originalStartTime", "startTime", "lastModified", "logType", "steps", "caloriesLink", "heartRateLink", "calories", "activeZoneMinutes", "manualValuesSpecified", "logType", "logId", "tcxLink"].forEach(function (key, i) {
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
      case "originalStartTime":
      case "logType":
      case "calories":
      case "hasActiveZoneMinutes":
      case "manualValuesSpecified":
      case "logType":
      case "logId":
        mockupData[key] = mockupModel[key]();
        break;
      // case "summary_date":
      //   mockupData[key] = dataDate;
      //   break;
      // case "daily_movement":
      //   mockupData[key] = mockupModel[key]();
      //   break;
      // case "cal_total":
      //   mockupData[key] = mockupModel[key]();
      //   break;
      // case "day_start":
      //   const dayStartTime = mockupData[key].split("T")[1];
      //   mockupData[key] = mockupData["summary_date"] + "T" + dayStartTime;
      //   break;
      // case "day_end":
      //   const dayEndTime = mockupData[key].split("T")[1];
      //   const dayEndDate = mockupModel[key](mockupData["summary_date"], 1);
      //   mockupData[key] = dayEndDate + "T" + dayEndTime;
      //   break;
      // case "steps":
      //   mockupData[key] = mockupModel[key](mockupData["daily_movement"]);
      //   break;
      // case "cal_active":
      //   mockupData[key] = mockupModel[key](mockupData["cal_total"]);
      //   break;
    }
  });
  return mockupData;
}
function getActivitiesSummaryData(dataType, dataModel, dataDate) {
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var mockupDataRow = dataModels[dataModel].data[1].split("\t");
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach(function (k, i) {
      mockupData[k] = mockupDataRow[i];
    });
  }

  ["activeScore", "activityCalories", "caloriesBMR", "heartRateZones", "caloriesOut", "distances", "elevation", "fairlyActiveMinutes", "floors", "lightlyActiveMinutes", "marginalCalories", "restingHeartRate", "sedentaryMinutes", "steps", "veryActiveMinutes"].forEach(function (key, i) {
    switch (key) {
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
      // case "summary_date":
      //   mockupData[key] = dataDate;
      //   break;
      // case "daily_movement":
      //   mockupData[key] = mockupModel[key]();
      //   break;
      // case "cal_total":
      //   mockupData[key] = mockupModel[key]();
      //   break;
      // case "day_start":
      //   const dayStartTime = mockupData[key].split("T")[1];
      //   mockupData[key] = mockupData["summary_date"] + "T" + dayStartTime;
      //   break;
      // case "day_end":
      //   const dayEndTime = mockupData[key].split("T")[1];
      //   const dayEndDate = mockupModel[key](mockupData["summary_date"], 1);
      //   mockupData[key] = dayEndDate + "T" + dayEndTime;
      //   break;
      // case "steps":
      //   mockupData[key] = mockupModel[key](mockupData["daily_movement"]);
      //   break;
      // case "cal_active":
      //   mockupData[key] = mockupModel[key](mockupData["cal_total"]);
      //   break;
    }
  });
  return mockupData;
}
function getReadinessMockupData(dataType, dataModel, dataDate) {
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var mockupDataRow = dataModels[dataModel].data[1].split("\t");
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach(function (k, i) {
      mockupData[k] = mockupDataRow[i];
    });
  }

  ["summary_date", "score"].forEach(function (key, i) {
    switch (key) {
      case "summary_date":
        mockupData[key] = dataDate;
        break;

      case "score":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getSleepSummaryData(dataType, dataModel, dataDate) {
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var mockupDataRow = dataModels[dataModel].data[1].split("\t");
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach(function (k, i) {
      mockupData[k] = mockupDataRow[i];
    });
  }

  var n1 = null;
  var n2 = null;
  n1 = getRandomInt(1, 102);

  while (n2 === null || n2 === n1) {
    n2 = getRandomInt(1, 102);
  }

  var ordered = [Math.max(n1, n2), Math.min(n1, n2)];
  var highest, lowest, middle;
  var percent1 = (ordered[1] - 1) / 100;
  var percent2 = (ordered[0] - ordered[1] - 1) / 100;
  var percent3 = (102 - ordered[0]) / 100;
  highest = Math.max(percent1, percent2, percent3);
  lowest = Math.min(percent1, percent2, percent3);

  if (percent1 !== highest && percent1 !== lowest) {
    middle = percent1;
  } else if (percent2 !== highest && percent2 !== lowest) {
    middle = percent2;
  } else {
    middle = percent3;
  }

  ["minutesAfterWakeup", "minutesAsleep", "minutesAwake", "minutesToFallAsleep", "timeInBed", "startTimeTS", "endTimeTS", "startTime", "endTime", "light", "wake", "rem", "deep"].forEach(function (key, i) {
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
      case "startTimeTS":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getHeartRateSummary(dataType, dataModel, dataDate) {
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var mockupDataRow = dataModels[dataModel].data[1].split("\t");
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach(function (k, i) {
      mockupData[k] = mockupDataRow[i];
    });
  }

  ["OUT_OF_ZONE", "FAT_BURN", "CARDIO", "PEAK"].forEach(function (key, i) {
    switch (key) {
      case "OUT_OF_ZONE":
      case "FAT_BURN":
      case "CARDIO":
      case "PEAK":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getSleepQualityData(dataType, dataModel, dataDate) {
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var mockupDataRow = dataModels[dataModel].data[1].split("\t");
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach(function (k, i) {
      mockupData[k] = mockupDataRow[i];
    });
  }

  ["p_datetime", "p_value", "p_level", "p_timestamp"].forEach(function (key, i) {
    switch (key) {
      case "p_timestamp":
        mockupData[key] = mockupModel[key](mockupData["p_datetime"]);
        break;

      case "p_level":
      case "p_value":
      case "p_datetime":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getSleepDataData(dataType, dataModel, dataDate) {
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var mockupDataRow = dataModels[dataModel].data[1].split("\t");
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach(function (k, i) {
      mockupData[k] = mockupDataRow[i];
    });
  }

  ["p_datetime", "p_level", "p_seconds", "p_timestamp"].forEach(function (key, i) {
    switch (key) {
      case "p_timestamp":
        mockupData[key] = mockupModel[key](mockupData["p_datetime"]);
        break;

      case "p_level":
      case "p_seconds":
      case "p_datetime":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getHeartRateDataData(dataType, dataModel, dataDate) {
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var mockupDataRow = dataModels[dataModel].data[1].split("\t");
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach(function (k, i) {
      mockupData[k] = mockupDataRow[i];
    });
  }

  ["p_date", "p_time", "p_value"].forEach(function (key, i) {
    switch (key) {
      case "p_date":
      case "p_time":
      case "p_value":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}

exports.getActivitiesMockupData = getActivitiesMockupData;
exports.getActivitiesSummaryData = getActivitiesSummaryData;
exports.getHeartRateDataData = getHeartRateDataData;
exports.getHeartRateSummary = getHeartRateSummary;
exports.getModelCSVHeader = getModelCSVHeader;
exports.getReadinessMockupData = getReadinessMockupData;
exports.getSleepDataData = getSleepDataData;
exports.getSleepQualityData = getSleepQualityData;
exports.getSleepSummaryData = getSleepSummaryData;
