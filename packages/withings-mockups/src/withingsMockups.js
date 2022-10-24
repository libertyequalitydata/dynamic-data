import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/withings-data";

const randomTimezone = () => {
  var aryIannaTimeZones = [
    'Europe/Andorra',
    'Asia/Dubai',
    'Asia/Kabul',
    'Europe/Tirane',
    'Asia/Yerevan',
    'Antarctica/Casey',
    'Antarctica/Davis',
    'Antarctica/DumontDUrville', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
    'Antarctica/Mawson',
    'Antarctica/Palmer',
    'Antarctica/Rothera',
    'Antarctica/Syowa',
    'Antarctica/Troll',
    'Antarctica/Vostok',
    'America/Argentina/Buenos_Aires',
    'America/Argentina/Cordoba',
    'America/Argentina/Salta',
    'America/Argentina/Jujuy',
    'America/Argentina/Tucuman',
    'America/Argentina/Catamarca',
    'America/Argentina/La_Rioja',
    'America/Argentina/San_Juan',
    'America/Argentina/Mendoza',
    'America/Argentina/San_Luis',
    'America/Argentina/Rio_Gallegos',
    'America/Argentina/Ushuaia',
    'Pacific/Pago_Pago',
    'Europe/Vienna',
    'Australia/Lord_Howe',
    'Antarctica/Macquarie',
    'Australia/Hobart',
    'Australia/Currie',
    'Australia/Melbourne',
    'Australia/Sydney',
    'Australia/Broken_Hill',
    'Australia/Brisbane',
    'Australia/Lindeman',
    'Australia/Adelaide',
    'Australia/Darwin',
    'Australia/Perth',
    'Australia/Eucla',
    'Asia/Baku',
    'America/Barbados',
    'Asia/Dhaka',
    'Europe/Brussels',
    'Europe/Sofia',
    'Atlantic/Bermuda',
    'Asia/Brunei',
    'America/La_Paz',
    'America/Noronha',
    'America/Belem',
    'America/Fortaleza',
    'America/Recife',
    'America/Araguaina',
    'America/Maceio',
    'America/Bahia',
    'America/Sao_Paulo',
    'America/Campo_Grande',
    'America/Cuiaba',
    'America/Santarem',
    'America/Porto_Velho',
    'America/Boa_Vista',
    'America/Manaus',
    'America/Eirunepe',
    'America/Rio_Branco',
    'America/Nassau',
    'Asia/Thimphu',
    'Europe/Minsk',
    'America/Belize',
    'America/St_Johns',
    'America/Halifax',
    'America/Glace_Bay',
    'America/Moncton',
    'America/Goose_Bay',
    'America/Blanc-Sablon',
    'America/Toronto',
    'America/Nipigon',
    'America/Thunder_Bay',
    'America/Iqaluit',
    'America/Pangnirtung',
    'America/Atikokan',
    'America/Winnipeg',
    'America/Rainy_River',
    'America/Resolute',
    'America/Rankin_Inlet',
    'America/Regina',
    'America/Swift_Current',
    'America/Edmonton',
    'America/Cambridge_Bay',
    'America/Yellowknife',
    'America/Inuvik',
    'America/Creston',
    'America/Dawson_Creek',
    'America/Fort_Nelson',
    'America/Vancouver',
    'America/Whitehorse',
    'America/Dawson',
    'Indian/Cocos',
    'Europe/Zurich',
    'Africa/Abidjan',
    'Pacific/Rarotonga',
    'America/Santiago',
    'America/Punta_Arenas',
    'Pacific/Easter',
    'Asia/Shanghai',
    'Asia/Urumqi',
    'America/Bogota',
    'America/Costa_Rica',
    'America/Havana',
    'Atlantic/Cape_Verde',
    'America/Curacao',
    'Indian/Christmas',
    'Asia/Nicosia',
    'Asia/Famagusta',
    'Europe/Prague',
    'Europe/Berlin',
    'Europe/Copenhagen',
    'America/Santo_Domingo',
    'Africa/Algiers',
    'America/Guayaquil',
    'Pacific/Galapagos',
    'Europe/Tallinn',
    'Africa/Cairo',
    'Africa/El_Aaiun',
    'Europe/Madrid',
    'Africa/Ceuta',
    'Atlantic/Canary',
    'Europe/Helsinki',
    'Pacific/Fiji',
    'Atlantic/Stanley',
    'Pacific/Chuuk',
    'Pacific/Pohnpei',
    'Pacific/Kosrae',
    'Atlantic/Faroe',
    'Europe/Paris',
    'Europe/London',
    'Asia/Tbilisi',
    'America/Cayenne',
    'Africa/Accra',
    'Europe/Gibraltar',
    'America/Godthab',
    'America/Danmarkshavn',
    'America/Scoresbysund',
    'America/Thule',
    'Europe/Athens',
    'Atlantic/South_Georgia',
    'America/Guatemala',
    'Pacific/Guam',
    'Africa/Bissau',
    'America/Guyana',
    'Asia/Hong_Kong',
    'America/Tegucigalpa',
    'America/Port-au-Prince',
    'Europe/Budapest',
    'Asia/Jakarta',
    'Asia/Pontianak',
    'Asia/Makassar',
    'Asia/Jayapura',
    'Europe/Dublin',
    'Asia/Jerusalem',
    'Asia/Kolkata',
    'Indian/Chagos',
    'Asia/Baghdad',
    'Asia/Tehran',
    'Atlantic/Reykjavik',
    'Europe/Rome',
    'America/Jamaica',
    'Asia/Amman',
    'Asia/Tokyo',
    'Africa/Nairobi',
    'Asia/Bishkek',
    'Pacific/Tarawa',
    'Pacific/Enderbury',
    'Pacific/Kiritimati',
    'Asia/Pyongyang',
    'Asia/Seoul',
    'Asia/Almaty',
    'Asia/Qyzylorda',
    'Asia/Qostanay', // https://bugs.chromium.org/p/chromium/issues/detail?id=928068
    'Asia/Aqtobe',
    'Asia/Aqtau',
    'Asia/Atyrau',
    'Asia/Oral',
    'Asia/Beirut',
    'Asia/Colombo',
    'Africa/Monrovia',
    'Europe/Vilnius',
    'Europe/Luxembourg',
    'Europe/Riga',
    'Africa/Tripoli',
    'Africa/Casablanca',
    'Europe/Monaco',
    'Europe/Chisinau',
    'Pacific/Majuro',
    'Pacific/Kwajalein',
    'Asia/Yangon',
    'Asia/Ulaanbaatar',
    'Asia/Hovd',
    'Asia/Choibalsan',
    'Asia/Macau',
    'America/Martinique',
    'Europe/Malta',
    'Indian/Mauritius',
    'Indian/Maldives',
    'America/Mexico_City',
    'America/Cancun',
    'America/Merida',
    'America/Monterrey',
    'America/Matamoros',
    'America/Mazatlan',
    'America/Chihuahua',
    'America/Ojinaga',
    'America/Hermosillo',
    'America/Tijuana',
    'America/Bahia_Banderas',
    'Asia/Kuala_Lumpur',
    'Asia/Kuching',
    'Africa/Maputo',
    'Africa/Windhoek',
    'Pacific/Noumea',
    'Pacific/Norfolk',
    'Africa/Lagos',
    'America/Managua',
    'Europe/Amsterdam',
    'Europe/Oslo',
    'Asia/Kathmandu',
    'Pacific/Nauru',
    'Pacific/Niue',
    'Pacific/Auckland',
    'Pacific/Chatham',
    'America/Panama',
    'America/Lima',
    'Pacific/Tahiti',
    'Pacific/Marquesas',
    'Pacific/Gambier',
    'Pacific/Port_Moresby',
    'Pacific/Bougainville',
    'Asia/Manila',
    'Asia/Karachi',
    'Europe/Warsaw',
    'America/Miquelon',
    'Pacific/Pitcairn',
    'America/Puerto_Rico',
    'Asia/Gaza',
    'Asia/Hebron',
    'Europe/Lisbon',
    'Atlantic/Madeira',
    'Atlantic/Azores',
    'Pacific/Palau',
    'America/Asuncion',
    'Asia/Qatar',
    'Indian/Reunion',
    'Europe/Bucharest',
    'Europe/Belgrade',
    'Europe/Kaliningrad',
    'Europe/Moscow',
    'Europe/Simferopol',
    'Europe/Kirov',
    'Europe/Astrakhan',
    'Europe/Volgograd',
    'Europe/Saratov',
    'Europe/Ulyanovsk',
    'Europe/Samara',
    'Asia/Yekaterinburg',
    'Asia/Omsk',
    'Asia/Novosibirsk',
    'Asia/Barnaul',
    'Asia/Tomsk',
    'Asia/Novokuznetsk',
    'Asia/Krasnoyarsk',
    'Asia/Irkutsk',
    'Asia/Chita',
    'Asia/Yakutsk',
    'Asia/Khandyga',
    'Asia/Vladivostok',
    'Asia/Ust-Nera',
    'Asia/Magadan',
    'Asia/Sakhalin',
    'Asia/Srednekolymsk',
    'Asia/Kamchatka',
    'Asia/Anadyr',
    'Asia/Riyadh',
    'Pacific/Guadalcanal',
    'Indian/Mahe',
    'Africa/Khartoum',
    'Europe/Stockholm',
    'Asia/Singapore',
    'America/Paramaribo',
    'Africa/Juba',
    'Africa/Sao_Tome',
    'America/El_Salvador',
    'Asia/Damascus',
    'America/Grand_Turk',
    'Africa/Ndjamena',
    'Indian/Kerguelen',
    'Asia/Bangkok',
    'Asia/Dushanbe',
    'Pacific/Fakaofo',
    'Asia/Dili',
    'Asia/Ashgabat',
    'Africa/Tunis',
    'Pacific/Tongatapu',
    'Europe/Istanbul',
    'America/Port_of_Spain',
    'Pacific/Funafuti',
    'Asia/Taipei',
    'Europe/Kiev',
    'Europe/Uzhgorod',
    'Europe/Zaporozhye',
    'Pacific/Wake',
    'America/New_York',
    'America/Detroit',
    'America/Kentucky/Louisville',
    'America/Kentucky/Monticello',
    'America/Indiana/Indianapolis',
    'America/Indiana/Vincennes',
    'America/Indiana/Winamac',
    'America/Indiana/Marengo',
    'America/Indiana/Petersburg',
    'America/Indiana/Vevay',
    'America/Chicago',
    'America/Indiana/Tell_City',
    'America/Indiana/Knox',
    'America/Menominee',
    'America/North_Dakota/Center',
    'America/North_Dakota/New_Salem',
    'America/North_Dakota/Beulah',
    'America/Denver',
    'America/Boise',
    'America/Phoenix',
    'America/Los_Angeles',
    'America/Anchorage',
    'America/Juneau',
    'America/Sitka',
    'America/Metlakatla',
    'America/Yakutat',
    'America/Nome',
    'America/Adak',
    'Pacific/Honolulu',
    'America/Montevideo',
    'Asia/Samarkand',
    'Asia/Tashkent',
    'America/Caracas',
    'Asia/Ho_Chi_Minh',
    'Pacific/Efate',
    'Pacific/Wallis',
    'Pacific/Apia',
    'Africa/Johannesburg'
  ];
  return aryIannaTimeZones[getRandomInt(0, aryIannaTimeZones.length-1)]
}

const SleepSummaryModel = {
  //Needs some sort of intergration with TZ database
  timezone: () => {
    return randomTimezone()
  },
  model: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return 16
      case 2:
        return 32
    }
  },
  model_id: () => {
    let models = [60,61,63,51,52,53,54,55,59,58,90,91,92,93]
    return models[getRandomInt(0,models.length-1)]
  },
  startdate: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate())-1);
    finalDate.setHours(getRandomInt(21,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.getTime()/1000
  },
  enddate: (startdate) => {
    let finalDate = new Date(startdate*1000);
    finalDate.setHours(0,0,0,0)
    finalDate.setDate(finalDate.getDate()+1)
    return Math.round(finalDate.getTime()/1000) + getRandomInt(1800,36000)
  },
  date: (enddate) => {

    let finalDate = new Date(enddate*1000);
    let finalDateStr = finalDate.toISOString();
    return finalDateStr.split("T")[0]
    // return "2020-07-09"
  },
  created: (enddate) => {
    return enddate
  },
  modified: (enddate) => {
    return enddate
  },
  apnea_hypopnea_index: () => {
    return 0
  },
  asleepduration: () => {
    return 0
  },
  breathing_disturbances_intensity: () => {
    return 0
  },
  deepsleepduration: () => {
    return 0
  },
  durationtosleep: () => {
    return 0
  },
  durationtowakeup: () => {
    return 0
  },
  hr_average: () => {
    return 0
  },
  hr_max: () => {
    return 0
  },
  hr_min: () => {
    return 0
  },
  lightsleepduration: () => {
    return 0
  },
  nb_rem_episodes: () => {
    return 0
  },
  night_events: () => {
    return 0
  },
  out_of_bed_count: () => {
    return 0
  },
  remsleepduration: () => {
    return 0
  },
  rr_average: () => {
    return 0
  },
  rr_max: () => {
    return 0
  },
  rr_min: () => {
    return 0
  },
  sleep_efficiency: () => {
    return 0
  },
  sleep_latency: () => {
    return 0
  },
  sleep_score: () => {
    return 0
  },
  snoring: () => {
    return 0
  },
  snoringepisodecount: () => {
    return 0
  },
  total_sleep_time: () => {
    return 0
  },
  total_timeinbed: () => {
    return 0
  },
  wakeup_latency: () => {
    return 0
  },
  wakeupcount: () => {
    return 0
  },
  wakeupduration: () => {
    return 0
  },
  waso: () => {
    return 0
  },
}

const SleepGetModel = {
  startdate: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate())-1);
    finalDate.setHours(getRandomInt(21,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.getTime()/1000
  },
  enddate: (startdate) => {
    let finalDate = new Date(startdate*1000);
    finalDate.setHours(0,0,0,0)
    finalDate.setDate(finalDate.getDate()+1)
    return Math.round(finalDate.getTime()/1000) + getRandomInt(1800,36000)
  },
  model: (id) => {
    switch(id){
      case 60:
        return "Aura Dock"
      case 61:
        return "Aura Sensor"
      case 63:
        return "Aura Sensor V2"
      case 51:
        return "Pulse"
      case 52:
        return "Activite"
      case 53:
        return "Activite (Pop, Steel)"
      case 54:
        return "Withings Go"
      case 55:
        return "Activite Steel HR"
      case 59:
        return "Activite Steel HR Sport Edition"
      case 58:
        return "Pulse HR"
      case 90:
        return "Move"
      case 91:
        return "Move ECG"
      case 92:
        return "Move ECG"
      case 93:
        return "ScanWatch"

    }
    return "Aura Sensor V2"
  },
  state: () => {
    return getRandomInt(0,6)-1
  },
  model_id: () => {
    let ids = [60,61,63,51,52,53,54,55,59,58,90,91,92,93]
    return ids[getRandomInt(0,ids.length-1)]
  },
  hr: () => {
    return {
      $timestamp: 0,
    }
  },
  rr: () => {
    return {
      $timestamp: 0,
    }
  },
  snoring: () => {
    return {
      $timestamp: 0,
    }
  },
  sdnn_1: () => {
    return {
      $timestamp: 0,
    }
  },
  rmssd: () => {
    return {
      $timestamp: 0,
    }
  },
}

const HeartListModel = {
  deviceid: () => {
    var result           = '';
    var characters       = 'abcdef0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 40; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
    return result
  },
  model: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return 44
      case 2:
        return 91
    }
  },
  ecg: () => {
    return {
      signalid: 48,
      afib: getRandomInt(0,3)-1,
    }
  },
  bloodpressure: () => {
    return {
      diastole: 100,
      systole: 101,
    }
  },
  heart_rate: () => {
    return 82
  },
  timestamp: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate())-1);
    finalDate.setHours(getRandomInt(21,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.getTime()/1000
  },
  timezone: () => {
    return randomTimezone()
  },
};

const HeartGetModel = {
  signal: () => {
    return "[1,2,3,4,5,6,7,8,9]"
  },
  sampling_frequency: () => {
    return 500
  },
  wearposition: () => {
    return getRandomInt(0,13)-1
  },
}

const WorkoutModel = {
  category: () => {
    let categories = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,128,187,188,191,192,193,194,195,196,272,306,307,308]
    return categories[getRandomInt(0,categories.length-1)]
  },
  timezone: () => {
    return randomTimezone()
  },
  model: () => {
    let models = [1,2,3,4,5,6,13,21,22,41,42,43,44,45,51,52,53,54,55,58,59,60,61,62,63,70,91,92,1051,1052,1053,1054,1055,1056,1057,1058,1059]
    return models[getRandomInt(0,models.length-1)]
  },
  attrib: () => {
    return getRandomInt(0,9)-1
  },
  startdate: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate())-1);
    finalDate.setHours(getRandomInt(8,18)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.getTime()/1000
  },
  enddate : (startdate) => {
    return startdate + getRandomInt(600,10800)
  },
  date: (date) => {
    let finalDate = new Date(date*1000);
    let finalDateStr = finalDate.toISOString();
    return finalDateStr.split("T")[0]
  },
  modified: (enddate) => {
    return enddate
  },
  deviceid: () => {
    var result           = '';
    var characters       = 'abcdef0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 40; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
    return result
  },
  algo_pause_duration: () => {
    return 0
  },
  calories: () => {
    return 0
  },
  distance: () => {
    return 0
  },
  elevation: () => {
    return 0
  },
  hr_average: () => {
    return 0
  },
  hr_max: () => {
    return 0
  },
  hr_min: () => {
    return 0
  },
  hr_zone_0: () => {
    return 0
  },
  hr_zone_1: () => {
    return 0
  },
  hr_zone_2: () => {
    return 0
  },
  hr_zone_3: () => {
    return 0
  },
  intensity: () => {
    return 0
  },
  manual_calories: () => {
    return 0
  },
  manual_distance: () => {
    return 0
  },
  pause_duration: () => {
    return 0
  },
  pool_laps: () => {
    return 0
  },
  pool_length: () => {
    return 0
  },
  spo2_average: () => {
    return 0
  },
  steps: () => {
    return 0
  },
  strokes: () => {
    return 0
  },
}

const IntradayActivityModel = {
  deviceid: () => {
    var result           = '';
    var characters       = 'abcdef0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 40; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
    return result
  },
  model: () => {
    let models = ["Withings WBS01","WS30","Kid Scale","Smart Body Analyzer","Body+","Body Cardio","Body","WBS08","Body Pro","WBS10","WBS11","Smart Baby Monitor","Withings Home","Withings Blood Pressure Monitor V1","Withings Blood Pressure Monitor V2","Withings Blood Pressure Monitor V3","BPM Core","BPM Connect","BPM Connect Pro","Pulse","Activite","Activite (Pop, Steel)","Withings Go","Activite Steel HR","Activite Steel HR Sport Edition","Pulse HR","Move","Move ECG","ScanWatch","Aura Dock","Aura Sensor","Aura Sensor V2","Thermo","WUP01"]
    return models[getRandomInt(0,models.length-1)]
  },
  model_id: () => {
    let ids = [1,2,3,4,5,6,7,10,9,11,12,21,22,41,42,43,44,45,46,51,52,53,54,55,59,58,90,91,92,93,60,61,63,70,100]
    return ids[getRandomInt(0,ids.length-1)]
  },
  steps: () => {
    return 0
  },
  elevation: () => {
    return 0
  },
  calories: () => {
    return 0
  },
  distance: () => {
    return 0
  },
  stroke: () => {
    return 0
  },
  pool_lap: () => {
    return 0
  },
  duration: () => {
    return 0
  },
  heart_rate: () => {
    return 0
  },
  spo2_auto: () => {
    return 0
  },
}

const ActivityModel = {
  date: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate())-1);
    let finalDateStr = finalDate.toISOString();
    return finalDateStr.split("T")[0]
  },
  timezone: () => {
    return randomTimezone()
  },
  deviceid: () => {
    var result           = '';
    var characters       = 'abcdef0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 40; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
    return result
  },
  hash_deviceid: () => {
    var result           = '';
    var characters       = 'abcdef0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 40; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
    return result
  },
  brand: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return 1
      case 2: 
        return 18
    }
  },
  is_tracker: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2: 
        return false
    }
  },
  steps: () => {
    return 6200
  },
  distance: () => {
    return 3000
  },
  elevation: () => {
    return 100
  },
  soft: () => {
    return 800
  },
  moderate: () => {
    return 1000
  },
  intense: () => {
    return 700
  },
  active: () => {
    return 2300
  },
  calories: () => {
    return 1200
  },
  totalcalories: () => {
    return 3500
  },
  hr_average: () => {
    return 80
  },
  hr_min: () => {
    return 70
  },
  hr_max: () => {
    return 80
  },
  hr_zone_0: () => {
    return 100
  },
  hr_zone_1: () => {
    return 200
  },
  hr_zone_2: () => {
    return 300
  },
  hr_zone_3: () => {
    return 400
  },
}

const MeasurementModel = {
  grpid: () => {
    return 12
  },
  attrib: () => {
    return getRandomInt(0,9)-1
  },
  date: (created) => {

    let finalDate = new Date(created*1000);
    let finalDateStr = finalDate.toISOString();
    return finalDateStr.split("T")[0]
    // return "2020-07-09"
  },
  created: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate())-1);
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1 )
    return finalDate.getTime()/1000
  },
  category: () => {
    return getRandomInt(0,2)
  },
  deviceid: () => {
    var result           = '';
    var characters       = 'abcdef0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 40; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
      charactersLength));
    }
    return result
  },
  measures: () => {
    let types = [1,4,5,6,8,9,10,11,12,54,71,73,76,77,88,91,123,135,136,137,138,139]

    return [{
      value: 65750,
      type: types[getRandomInt(0,types.length-1)],
      unit: getRandomInt(-5,5),
      algo: 3425,
      fm: 1,
      fw: 1000,
    }]
  },
  comment: () => {
    return ""
  },
  timezone: () => {
    return randomTimezone()
  },
}

const dataModels = {
  Activity: {
    data: MOCK.Getactivity,
    mockup: ActivityModel,
  },
  Heart: {
    data: MOCK.Heart,
    mockup: HeartGetModel,
  },
  HeartList: {
    data: MOCK.HeartList,
    mockup: HeartListModel,
  },
  Sleep: {
    data: MOCK.Sleep,
    mockup: SleepGetModel,
  },
  SleepSummary: {
    data: MOCK.SleepSummary,
    mockup: SleepSummaryModel,
  },
  Workout: {
    data: MOCK.getWorkout,
    mockup: WorkoutModel,
  },
  IntradayActivity: {
    data: MOCK.Getintradayactivity,
    mockup: IntradayActivityModel
  },
  Measurement: {
    data: MOCK.Getmeas,
    mockup: MeasurementModel
  }
};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getSleepSummaryMockupData(dataType, dataModel, dataDate) {
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
    "timezone",
    "model",
    "model_id",
    "startdate",
    "enddate",
    "date",
    "created",
    "modified",
    "data"
  ].forEach((key, i) => {
    switch (key) {
      case "enddate":
        mockupData[key] = mockupModel[key](mockupData["startdate"]);
        break;
      case "date":
      case "created":
      case "modified":
        mockupData[key] = mockupModel[key](mockupData["enddate"]);
        break;
      case "data":
        [
          "apnea_hypopnea_index",
          "asleepduration",
          "breathing_disturbances_intensity",
          "deepsleepduration",
          "durationtosleep",
          "durationtowakeup",
          "hr_average",
          "hr_max",
          "hr_min",
          "lightsleepduration",
          "nb_rem_episodes",
          "night_events",
          "out_of_bed_count",
          "remsleepduration",
          "rr_average",
          "rr_max",
          "rr_min",
          "sleep_efficiency",
          "sleep_latency",
          "sleep_score",
          "snoring",
          "snoringepisodecount",
          "total_sleep_time",
          "total_timeinbed",
          "wakeup_latency",
          "wakeupcount",
          "wakeupduration",
          "waso"
        ].forEach((key2)=>{
          switch(key2){
            default:
              mockupData[key][key2] = mockupModel[key2]();
              break;
          }
        })
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

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
    "startdate",
    "enddate",
    "state",
    "model_id",
    "model",
    "hr",
    "rr",
    "snoring",
    "sdnn_1",
    "rmssd"
  ].forEach((key, i) => {
    switch (key) {
      case "enddate":
        mockupData[key] = mockupModel[key](mockupData["startdate"]);
        break;
      case "model":
        mockupData[key] = mockupModel[key](mockupData["model_id"]);
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

export function getHeartListMockupData(dataType, dataModel, dataDate) {
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
    "deviceid",
    "model",
    "ecg",
    "bloodpressure",
    "heart_rate",
    "timestamp",
    "timezone",
  ].forEach((key, i) => {
    switch (key) {
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

export function getHeartMockupData(dataType, dataModel, dataDate) {
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
    "signal",
    "sampling_frequency",
    "wearposition",
  ].forEach((key, i) => {
    switch (key) {
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

  [
    "category",
    "timezone",
    "model",
    "attrib",
    "startdate",
    "enddate",
    "date",
    "modified",
    "deviceid",
    "data"
  ].forEach((key, i) => {
    switch (key) {
      case "enddate":
        mockupData[key] = mockupModel[key](mockupData["startdate"]);
        break;
      case "date":
      case "modified":
        mockupData[key] = mockupModel[key](mockupData["enddate"]);
        break;
      case "data":
        [
          "algo_pause_duration",
          "calories",
          "distance",
          "elevation",
          "hr_average",
          "hr_max",
          "hr_min",
          "hr_zone_0",
          "hr_zone_1",
          "hr_zone_2",
          "hr_zone_3",
          "intensity",
          "manual_calories",
          "manual_distance",
          "pause_duration",
          "pool_laps",
          "pool_length",
          "spo2_average",
          "steps",
          "strokes",
        ].forEach((key2)=>{
          switch (key2){
            default:
              mockupData[key][key2] = mockupModel[key2]()
              break;
          }
        })
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

export function getIntradayActivityMockupData(dataType, dataModel, dataDate) {
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
    "deviceid",
    "model",
    "model_id",
    "steps",
    "elevation",
    "calories",
    "distance",
    "stroke",
    "pool_lap",
    "duration",
    "heart_rate",
    "spo2_auto"
  ].forEach((key, i) => {
    switch (key) {
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

export function getActivityMockupData(dataType, dataModel, dataDate) {
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
    "date",
    "timezone",
    "deviceid",
    "hash_deviceid",
    "brand",
    "is_tracker",
    "steps",
    "distance",
    "elevation",
    "soft",
    "moderate",
    "intense",
    "active",
    "calories",
    "totalcalories",
    "hr_average",
    "hr_min",
    "hr_max",
    "hr_zone_0",
    "hr_zone_1",
    "hr_zone_2",
    "hr_zone_3"
  ].forEach((key, i) => {
    switch (key) {
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

export function getMeasurementMockupData(dataType, dataModel, dataDate) {
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
    "grpid",
    "attrib",
    "created",
    "date",
    "category",
    "deviceid",
    "measures",
    "comment",
    "timezone",
  ].forEach((key, i) => {
    switch (key) {
      case "date":
        mockupData[key] = mockupModel[key](mockupData["created"]);
        break;
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}