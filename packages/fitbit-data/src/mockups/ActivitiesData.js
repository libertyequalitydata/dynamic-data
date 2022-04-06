export const ActivitiesData = [
  {
    activeDuration: 1332000,
    activeZoneMinutes: {
      minutesInHeartRateZones: [
        {
          minuteMultiplier: 2,
          minutes: 0,
          order: 2,
          type: "CARDIO",
          zoneName: "Cardio",
        },
        {
          minuteMultiplier: 1,
          minutes: 0,
          order: 1,
          type: "FAT_BURN",
          zoneName: "Fat Burn",
        },
        {
          minuteMultiplier: 0,
          minutes: 0,
          order: 0,
          type: "OUT_OF_ZONE",
          zoneName: "Out of Range",
        },
        {
          minuteMultiplier: 2,
          minutes: 0,
          order: 3,
          type: "PEAK",
          zoneName: "Peak",
        },
      ],
      totalMinutes: 0,
    },
    activityLevel: [
      {
        minutes: 0,
        name: "sedentary",
      },
      {
        minutes: 6,
        name: "lightly",
      },
      {
        minutes: 6,
        name: "fairly",
      },
      {
        minutes: 11,
        name: "very",
      },
    ],
    activityName: "Walk",
    activityTypeId: 90013,
    averageHeartRate: 83,
    calories: 160,
    caloriesLink:
      "https://api.fitbit.com/1/user/-/activities/calories/date/2021-12-29/2021-12-29/1min/time/17:11/17:34.json",
    duration: 1332000,
    elevationGain: 6.096,
    hasActiveZoneMinutes: true,
    heartRateLink:
      "https://api.fitbit.com/1/user/-/activities/heart/date/2021-12-29/2021-12-29/1sec/time/17:11:50/17:34:02.json",
    heartRateZones: [
      {
        caloriesOut: 160.4715,
        max: 96,
        min: 30,
        minutes: 22,
        name: "Out of Range",
      },
      {
        caloriesOut: 0,
        max: 118,
        min: 96,
        minutes: 0,
        name: "Fat Burn",
      },
      {
        caloriesOut: 0,
        max: 146,
        min: 118,
        minutes: 0,
        name: "Cardio",
      },
      {
        caloriesOut: 0,
        max: 220,
        min: 146,
        minutes: 0,
        name: "Peak",
      },
    ],
    lastModified: "2021-12-29T15:57:42.080Z",
    logId: 45050781089,
    logType: "auto_detected",
    manualValuesSpecified: {
      calories: false,
      distance: false,
      steps: false,
    },
    originalDuration: 1332000,
    originalStartTime: "2021-12-29T17:11:50.000+02:00",
    startTime: "2021-12-29T17:11:50.000+02:00",
    steps: 1789,
    tcxLink: "https://api.fitbit.com/1/user/-/activities/45050781089.tcx",
  },
];

export const ActivitiesDataAsync = [
  "activeduration,activezoneminutes,activitylevel,activityname,activitytypeid,averageheartrate,calories,calorieslink,duration,elevationgain,hasactivezoneminutes,heartratelink,heartratezones,lastmodified,logid,logtype,manualvaluesspecified,originalduration,originalstarttime,starttime,tcxlink,distance,distanceunit,pace,source,speed,steps,user,day,period",
  "1332000,{minutesinheartratezones=[{minutemultiplier=1, minutes=0, order=1, type=FAT_BURN, zonename=Fat Burn}, {minutemultiplier=2, minutes=0, order=3, type=PEAK, zonename=Peak}, {minutemultiplier=0, minutes=0, order=0, type=OUT_OF_ZONE, zonename=Out of Range}, {minutemultiplier=2, minutes=0, order=2, type=CARDIO, zonename=Cardio}], totalminutes=0},[{minutes=0, name=sedentary}, {minutes=6, name=lightly}, {minutes=6, name=fairly}, {minutes=11, name=very}],Walk,90013,83,160,https://api.fitbit.com/1/user/-/activities/calories/date/2021-12-29/2021-12-29/1min/time/17:11/17:34.json,1332000,6.096,true,https://api.fitbit.com/1/user/-/activities/heart/date/2021-12-29/2021-12-29/1sec/time/17:11:50/17:34:02.json,[{caloriesout=160.4715, max=96, min=30, minutes=22, name=Out of Range}, {caloriesout=0.0, max=118, min=96, minutes=0, name=Fat Burn}, {caloriesout=0.0, max=146, min=118, minutes=0, name=Cardio}, {caloriesout=0.0, max=220, min=146, minutes=0, name=Peak}],2021-12-29T15:57:42.000Z,45050781089,auto_detected,{calories=false, distance=false, steps=false},1332000,2021-12-29T17:11:50.000+02:00,2021-12-29T17:11:50.000+02:00,https://api.fitbit.com/1/user/-/activities/45050781089.tcx,,,,,,1789,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-29,0",
  "1894000,{minutesinheartratezones=[{minutemultiplier=1, minutes=8, order=1, type=FAT_BURN, zonename=Fat Burn}, {minutemultiplier=0, minutes=0, order=0, type=OUT_OF_ZONE, zonename=Out of Range}, {minutemultiplier=2, minutes=0, order=2, type=CARDIO, zonename=Cardio}, {minutemultiplier=2, minutes=0, order=3, type=PEAK, zonename=Peak}], totalminutes=8},[{minutes=0, name=sedentary}, {minutes=2, name=lightly}, {minutes=7, name=fairly}, {minutes=22, name=very}],Walk,90013,89,239,https://api.fitbit.com/1/user/-/activities/calories/date/2021-12-28/2021-12-28/1min/time/17:40/18:11.json,1894000,6.096,true,https://api.fitbit.com/1/user/-/activities/heart/date/2021-12-28/2021-12-28/1sec/time/17:40:20/18:11:54.json,[{caloriesout=167.86649999999997, max=96, min=30, minutes=23, name=Out of Range}, {caloriesout=71.48500000000001, max=118, min=96, minutes=8, name=Fat Burn}, {caloriesout=0.0, max=146, min=118, minutes=0, name=Cardio}, {caloriesout=0.0, max=220, min=146, minutes=0, name=Peak}],2021-12-28T16:51:39.000Z,45035107222,auto_detected,{calories=false, distance=false, steps=false},1894000,2021-12-28T17:40:20.000+02:00,2021-12-28T17:40:20.000+02:00,https://api.fitbit.com/1/user/-/activities/45035107222.tcx,,,,,,2535,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-28,0",
  "1075000,{minutesinheartratezones=[{minutemultiplier=0, minutes=0, order=0, type=OUT_OF_ZONE, zonename=Out of Range}, {minutemultiplier=1, minutes=1, order=1, type=FAT_BURN, zonename=Fat Burn}, {minutemultiplier=2, minutes=0, order=2, type=CARDIO, zonename=Cardio}, {minutemultiplier=2, minutes=0, order=3, type=PEAK, zonename=Peak}], totalminutes=1},[{minutes=0, name=sedentary}, {minutes=5, name=lightly}, {minutes=7, name=fairly}, {minutes=6, name=very}],Walk,90013,74,114,https://api.fitbit.com/1/user/-/activities/calories/date/2021-12-27/2021-12-27/1min/time/9:16/9:34.json,1075000,0.0,true,https://api.fitbit.com/1/user/-/activities/heart/date/2021-12-27/2021-12-27/1sec/time/09:16:25/09:34:20.json,[{caloriesout=105.7485, max=96, min=30, minutes=16, name=Out of Range}, {caloriesout=8.6275, max=118, min=96, minutes=1, name=Fat Burn}, {caloriesout=0.0, max=146, min=118, minutes=0, name=Cardio}, {caloriesout=0.0, max=220, min=146, minutes=0, name=Peak}],2021-12-27T07:53:53.000Z,45010449449,auto_detected,{calories=false, distance=false, steps=false},1075000,2021-12-27T09:16:25.000+02:00,2021-12-27T09:16:25.000+02:00,https://api.fitbit.com/1/user/-/activities/45010449449.tcx,,,,,,1325,id_6145b3af07fa22f66456e20eca49e98bfe35,2021-12-27,0",
];
