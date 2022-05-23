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

const Activity = {
  id: 12345678987654321,
  resource_state: 3,
  external_id: "garmin_push_12345678987654321",
  upload_id: 98765432123456789,
  athlete: {
    id: 134815,
    resource_state: 1
  },
  name: "Happy Friday",
  distance: 28099,
  moving_time: 4207,
  elapsed_time: 4410,
  total_elevation_gain: 516,
  type: "Ride",
  start_date: " 2018-02-16T14:52:54Z",
  start_date_local: "2018-02-16T06:52:54Z",
  timezone: "(GMT-08:00) America/Los_Angeles",
  utc_offset: -28800,
  start_latlng: [37.83, -122.26],
  end_latlng: [37.83, -122.26],
  achievement_count: 0,
  kudos_count: 19,
  comment_count: 0,
  athlete_count: 1,
  photo_count: 0,
  map: {
    id: "a1410355832",
    polyline: "ki{eFvqfiVqAWQIGEEKAYJgBVqDJ{BHa@jAkNJw@Pw@V{APs@^aABQAOEQGKoJ_FuJkFqAo@{A}@sH{DiAs@Q]?WVy@`@oBt@_CB]KYMMkB{AQEI@WT{BlE{@zAQPI@ICsCqA_BcAeCmAaFmCqIoEcLeG}KcG}A}@cDaBiDsByAkAuBqBi@y@_@o@o@kB}BgIoA_EUkAMcACa@BeBBq@LaAJe@b@uA`@_AdBcD`@iAPq@RgALqAB{@EqAyAoOCy@AmCBmANqBLqAZkB\\iCPiBJwCCsASiCq@iD]eA]y@[i@w@mAa@i@k@g@kAw@i@Ya@Q]EWFMLa@~BYpAFNpA`Aj@n@X`@V`AHh@JfB@xAMvAGZGHIDIAWOEQNcC@sACYK[MSOMe@QKKKYOs@UYQISCQ?Q@WNo@r@OHGAGCKOQ_BU}@MQGG]Io@@c@FYNg@d@s@d@ODQAMOMaASs@_@a@SESAQDqBn@a@RO?KK?UBU\\kA@Y?WMo@Iy@GWQ_@WSSGg@AkABQB_Ap@_A^o@b@Q@o@IS@OHi@n@OFS?OI}@iAQMQGQC}@DOIIUK{@IUOMyBo@kASOKIQCa@L[|AgATWN[He@?QKw@FOPCh@Fx@l@TDLELKl@aAHIJEX@r@ZTDV@LENQVg@RkA@c@MeA?WFOPMf@Ej@Fj@@LGHKDM?_@_@iC?a@HKRIl@NT?FCHMFW?YEYGWQa@GYBiAIq@Gq@L_BHSHK|@WJETSLQZs@z@_A~@uA^U`@G\\CRB\\Tl@p@Th@JZ^bB`@lAHLXVLDP?LGFSKiDBo@d@wBVi@R]VYVE\\@`@Lh@Fh@CzAk@RSDQA]GYe@eAGWSiBAWBWBIJORK`@KPOPSTg@h@}Ad@o@F[E_@EGMKUGmAEYGMIMYKs@?a@J}@@_BD_@HQJMx@e@LKHKHWAo@UoAAWFmAH}@?w@C[YwAAc@HSNM|Ao@rA}@zAq@`@a@j@eAxAuBXQj@MXSR[b@gAFg@?YISOGaAHi@Xw@v@_@d@WRSFqARUHQJc@d@m@`A[VSFUBcAEU@WFULUPa@v@Y~@UrBc@dBI~@?l@P~ABt@N`HEjA]zAEp@@p@TrBCl@CTQb@k@dAg@jAU^KJYLK@k@A[Js@d@a@b@]RgBl@[FMAw@[]G]?m@D_@F]P[Vu@t@[TMF_@Do@E_@@q@P]PWZUZw@vAkAlAGJOj@IlAMd@OR{@p@a@d@sBpD]v@a@`Aa@n@]TODgBVk@Pe@^cBfBc@Rs@La@RSPm@|@wCpDS^Wp@QZML{@l@qBbCYd@k@lAIVCZBZNTr@`@RRHZANIZQPKDW@e@CaASU?I@YTKRQx@@\\VmALYRQLCL?v@P|@D\\GJEFKDM@OCa@COOYIGm@YMUCM@]JYr@uAx@kAt@}@jAeAPWbAkBj@s@bAiAz@oAj@m@VQlAc@VQ~@aA`Au@p@Q`AIv@MZORUV_@p@iB|AoCh@q@dAaANUNWH[N{AJ[^m@t@_Av@wA\\a@`@W`@In@Al@B^E`@Wl@u@\\[VQ\\K`@Eb@?R@dAZP@d@CRExAs@\\Yt@{@LG\\MjAATINOXo@d@kAl@_AHYBOCe@QiBCm@Fq@\\wADo@AyGEeBWuB@YHu@Tu@Lk@VcCTo@d@aA\\WJE`@G~@FP?VI\\U~@sANO`@SfAMj@U\\WjAsAXS`@UNENALBHFFL?^Ml@Uj@]b@q@RUJSPkChEc@XcAb@sA|@]PaA\\OJKNER?TDTNj@Jn@?p@OfC@ZR`B@VCV_@n@{@l@WbACv@OlABnAPl@LNNHbBBNBLFFJ@^GLg@x@i@|AMP[X}@XOJKPET?l@LhAFXp@fBDRCd@S\\_@Ps@PQ@}A]S?QDe@V]b@MR[fAKt@ErAF~CANILYDKGIKe@{@Yy@e@sB[gA[c@e@YUCU?WBUHUNQPq@`AiArAMV[^e@Zc@JQJKNMz@?r@Bb@PfAAfA@VVbADn@E`@KHSEe@SMAKDKFM\\^dDCh@m@LoAQ_@@MFOZLfBEl@QbASd@KLQBOAaAc@QAQ@QHc@v@ONMJOBOCg@c@]O[EMBKFGL?RHv@ARERGNe@h@{@h@WVGNDt@JLNFPFz@LdBf@f@PJNHPF`ADPJJJDl@I`@B^Tp@bALJNDNALIf@i@PGPCt@DNE`@Uv@[dAw@RITGRCtAARBPJLPJRZxB?VEX_@vAAR?RDNHJJBh@UnBm@h@IRDRJNNJPNbBFRJLLBLCzAmAd@Uf@Gf@?P@PFJNHPFTH`BDTHNJJJ@LG`@m@^YPER@RDPHNNJRLn@HRLN^VNPHTFX@\\UlDFb@FHh@NP@HKPsB?}ASkCQ{@[y@q@}@cA{@KOCQDa@t@{CFGJCf@Nl@ZtA~@r@p@`@h@rAxBd@rA\\fARdAPjANrB?f@AtBCd@QfBkAjJOlBChA?rBFrBNlBdAfKFzAC~@Iz@Mz@Sv@s@jBmAxBi@hAWt@Sv@Qx@O`BA`@?dAPfBVpAd@`BfBlFf@fBdA~Cr@pAz@fApBhBjAt@H?IL?FBFJLx@^lHvDvh@~XnElCbAd@pGhDbAb@nAr@`Ad@`GhDnBbAxCbBrWhNJJDPARGP_@t@Qh@]pAUtAoA`Ny@jJApBBNFLJFJBv@Hb@HBF?\\",
    resource_state: 3,
    summary_polyline: "ki{eFvqfiVsBmA`Feh@qg@iX`B}JeCcCqGjIq~@kf@cM{KeHeX`@_GdGkSeBiXtB}YuEkPwFyDeAzAe@pC~DfGc@bIOsGmCcEiD~@oBuEkFhBcBmDiEfAVuDiAuD}NnDaNiIlCyDD_CtJKv@wGhD]YyEzBo@g@uKxGmHpCGtEtI~AuLrHkAcAaIvEgH_EaDR_FpBuBg@sNxHqEtHgLoTpIiCzKNr[sB|Es\\`JyObYeMbGsMnPsAfDxAnD}DBu@bCx@{BbEEyAoD`AmChNoQzMoGhOwX|[yIzBeFKg[zAkIdU_LiHxK}HzEh@vM_BtBg@xGzDbCcF~GhArHaIfByAhLsDiJuC?_HbHd@nL_Cz@ZnEkDDy@hHwJLiCbIrNrIvN_EfAjDWlEnEiAfBxDlFkBfBtEfDaAzBvDKdFx@|@XgJmDsHhAgD`GfElEzOwBnYdBxXgGlSc@bGdHpW|HdJztBnhAgFxc@HnCvBdA"
  },
  trainer: false,
  commute: false,
  manual: false,
  private: false,
  flagged: false,
  gear_id: "b12345678987654321",
  from_accepted_tag: false,
  average_speed: 6.679,
  max_speed: 18.5,
  average_cadence: 78.5,
  average_temp: 4,
  average_watts: 185.5,
  weighted_average_watts: 230,
  kilojoules: 780.5,
  device_watts: true,
  has_heartrate: false,
  max_watts: 743,
  elev_high: 446.6,
  elev_low: 17.2,
  pr_count: 0,
  total_photo_count: 2,
  has_kudoed: false,
  workout_type: 10,
  suffer_score: null,
  description: "",
  calories: 870.2,
  segment_efforts: [{
    id: 12345678987654321,
    resource_state: 2,
    name: "Tunnel Rd.",
    activity: {
      id: 12345678987654321,
      resource_state: 1
    },
    athlete: {
      id: 134815,
      resource_state: 1
    },
    elapsed_time: 2038,
    moving_time: 2038,
    start_date: "2018-02-16T14:56:25Z",
    start_date_local: "2018-02-16T06:56:25Z",
    distance: 9434.8,
    start_index: 211,
    end_index: 2246,
    average_cadence: 78.6,
    device_watts: true,
    average_watts: 237.6,
    segment: {
      id: 673683,
      resource_state: 2,
      name: "Tunnel Rd.",
      activity_type: "Ride",
      distance: 9220.7,
      average_grade: 4.2,
      maximum_grade: 25.8,
      elevation_high: 426.5,
      elevation_low: 43.4,
      start_latlng: [37.8346153, -122.2520872],
      end_latlng: [37.8476261, -122.2008944],
      climb_category: 3,
      city: "Oakland",
      state: "CA",
      country: "United States",
      private: false,
      hazardous: false,
      starred: false
    },
    kom_rank: null,
    pr_rank: null,
    achievements: [],
    hidden: false
  }],
  splits_metric: [{
    distance: 1001.5,
    elapsed_time: 141,
    elevation_difference: 4.4,
    moving_time: 141,
    split: 1,
    average_speed: 7.1,
    pace_zone: 0
  }],
  laps: [{
    id: 4479306946,
    resource_state: 2,
    name: "Lap 1",
    activity: {
      id: 1410355832,
      resource_state: 1
    },
    athlete: {
      id: 134815,
      resource_state: 1
    },
    elapsed_time: 1573,
    moving_time: 1569,
    start_date: "2018-02-16T14:52:54Z",
    start_date_local: "2018-02-16T06:52:54Z",
    distance: 8046.72,
    start_index: 0,
    end_index: 1570,
    total_elevation_gain: 276,
    average_speed: 5.12,
    max_speed: 9.5,
    average_cadence: 78.6,
    device_watts: true,
    average_watts: 233.1,
    lap_index: 1,
    split: 1
  }],
  gear: {
    id: "b12345678987654321",
    primary: true,
    name: "Tarmac",
    resource_state: 2,
    distance: 32547610
  },
  partner_brand_tag: null,
  photos: {
    primary: {
      id: null,
      unique_id: "3FDGKL3-204E-4867-9E8D-89FC79EAAE17",
      urls: {
        100: "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-128x96.jpg",
        600: "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-768x576.jpg"
      },
      source: 1
    },
    use_primary_photo: true,
    count: 2
  },
  highlighted_kudosers: [{
    destination_url: "strava://athletes/12345678987654321",
    display_name: "Marianne V.",
    avatar_url: "https://dgalywyr863hv.cloudfront.net/pictures/athletes/12345678987654321/12345678987654321/3/medium.jpg",
    show_name: true
  }],
  hide_from_home: false,
  device_name: "Garmin Edge 1030",
  embed_token: "18e4615989b47dd4ff3dc711b0aa4502e4b311a9",
  segment_leaderboard_opt_out: false,
  leaderboard_opt_out: false
};

const ActivityComments = [{
  id: 12345678987654321,
  activity_id: 12345678987654321,
  post_id: null,
  resource_state: 2,
  text: "Good job and keep the cat pictures coming!",
  mentions_metadata: null,
  created_at: "2018-02-08T19:25:39Z",
  athlete: {
    firstname: "Peter",
    lastname: "S"
  }
}];

const ActivityKudoers = [{
  firstname: "Peter",
  lastname: "S"
}];

const ActivityLaps = [{
  id: 12345678987654321,
  resource_state: 2,
  name: "Lap 1",
  activity: {
    id: 12345678987654321,
    resource_state: 1
  },
  athlete: {
    id: 12345678987654321,
    resource_state: 1
  },
  elapsed_time: 1691,
  moving_time: 1587,
  start_date: "2018-02-08T14:13:37Z",
  start_date_local: "2018-02-08T06:13:37Z",
  distance: 8046.72,
  start_index: 0,
  end_index: 1590,
  total_elevation_gain: 270,
  average_speed: 4.76,
  max_speed: 9.4,
  average_cadence: 79,
  device_watts: true,
  average_watts: 228.2,
  lap_index: 1,
  split: 1
}];

const ActivityStream = [{
  type: "distance",
  data: [2.9, 5.8, 8.5, 11.7, 15, 19, 23.2, 28, 32.8, 38.1, 43.8, 49.5],
  series_type: "distance",
  original_size: 12,
  resolution: "high"
}];

const ActivityZone = [{
  score: 0,
  sensor_based: true,
  custom_zones: true,
  max: 1,
  distribution_buckets: "",
  type: "heartrate",
  points: 6
}];

const AthleteActivities = [{
  resource_state: 2,
  athlete: {
    id: 134815,
    resource_state: 1
  },
  name: "Happy Friday",
  distance: 24931.4,
  moving_time: 4500,
  elapsed_time: 4500,
  total_elevation_gain: 0,
  type: "Ride",
  workout_type: null,
  id: 154504250376823,
  external_id: "garmin_push_12345678987654321",
  upload_id: 987654321234567891234,
  start_date: "2018-05-02T12:15:09Z",
  start_date_local: "2018-05-02T05:15:09Z",
  timezone: "(GMT-08:00) America/Los_Angeles",
  utc_offset: -25200,
  start_latlng: null,
  end_latlng: null,
  location_city: null,
  location_state: null,
  location_country: "United States",
  achievement_count: 0,
  kudos_count: 3,
  comment_count: 1,
  athlete_count: 1,
  photo_count: 0,
  map: {
    id: "a12345678987654321",
    summary_polyline: null,
    resource_state: 2
  },
  trainer: true,
  commute: false,
  manual: false,
  private: false,
  flagged: false,
  gear_id: "b12345678987654321",
  from_accepted_tag: false,
  average_speed: 5.54,
  max_speed: 11,
  average_cadence: 67.1,
  average_watts: 175.3,
  weighted_average_watts: 210,
  kilojoules: 788.7,
  device_watts: true,
  has_heartrate: true,
  average_heartrate: 140.3,
  max_heartrate: 178,
  max_watts: 406,
  pr_count: 0,
  total_photo_count: 1,
  has_kudoed: false,
  suffer_score: 82
}, {
  resource_state: 2,
  athlete: {
    id: 167560,
    resource_state: 1
  },
  name: "Bondcliff",
  distance: 23676.5,
  moving_time: 5400,
  elapsed_time: 5400,
  total_elevation_gain: 0,
  type: "Ride",
  workout_type: null,
  id: 1234567809,
  external_id: "garmin_push_12345678987654321",
  upload_id: 1234567819,
  start_date: "2018-04-30T12:35:51Z",
  start_date_local: "2018-04-30T05:35:51Z",
  timezone: "(GMT-08:00) America/Los_Angeles",
  utc_offset: -25200,
  start_latlng: null,
  end_latlng: null,
  location_city: null,
  location_state: null,
  location_country: "United States",
  achievement_count: 0,
  kudos_count: 4,
  comment_count: 0,
  athlete_count: 1,
  photo_count: 0,
  map: {
    id: "a12345689",
    summary_polyline: null,
    resource_state: 2
  },
  trainer: true,
  commute: false,
  manual: false,
  private: false,
  flagged: false,
  gear_id: "b12345678912343",
  from_accepted_tag: false,
  average_speed: 4.385,
  max_speed: 8.8,
  average_cadence: 69.8,
  average_watts: 200,
  weighted_average_watts: 214,
  kilojoules: 1080,
  device_watts: true,
  has_heartrate: true,
  average_heartrate: 152.4,
  max_heartrate: 183,
  max_watts: 403,
  pr_count: 0,
  total_photo_count: 1,
  has_kudoed: false,
  suffer_score: 162
}];

const AthleteClubs = [{
  id: 231407,
  resource_state: 2,
  name: "The Strava Club",
  profile_medium: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/medium.jpg",
  profile: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/large.jpg",
  cover_photo: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/large.jpg",
  cover_photo_small: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/small.jpg",
  sport_type: "other",
  city: "San Francisco",
  state: "California",
  country: "United States",
  private: false,
  member_count: 93151,
  featured: false,
  verified: true,
  url: "strava"
}];

const AthleteRoute = [{
  private: true,
  distance: 0.8008282,
  athlete: "",
  description: "aeiou",
  created_at: "2000-01-23T04:56:07.000+00:00",
  elevation_gain: 6.0274563,
  type: 5,
  estimated_moving_time: 7,
  segments: [{
    country: "aeiou",
    private: true,
    distance: 3.6160767,
    average_grade: 2.027123,
    maximum_grade: 4.145608,
    climb_category: 1,
    city: "aeiou",
    elevation_high: 7.386282,
    athlete_pr_effort: {
      distance: 1.1730742,
      start_date_local: "2000-01-23T04:56:07.000+00:00",
      activity_id: 6,
      elapsed_time: 7,
      is_kom: true,
      id: 1,
      start_date: "2000-01-23T04:56:07.000+00:00"
    },
    athlete_segment_stats: {
      pr_elapsed_time: 5,
      pr_date: "2000-01-23T04:56:07.000+00:00",
      effort_count: 9,
      pr_activity_id: 4
    },
    start_latlng: "",
    elevation_low: 1.2315135,
    end_latlng: "",
    activity_type: "Ride",
    name: "aeiou",
    id: 9,
    state: "aeiou"
  }],
  starred: true,
  updated_at: "2000-01-23T04:56:07.000+00:00",
  sub_type: 2,
  id_str: "aeiou",
  name: "aeiou",
  id: 1,
  map: {
    summary_polyline: "aeiou",
    id: "aeiou",
    polyline: "aeiou"
  },
  timestamp: 5
}];

const AthleteStats = {
  recent_run_totals: "",
  all_run_totals: "",
  recent_swim_totals: "",
  biggest_ride_distance: 0.8008281904610115,
  ytd_swim_totals: "",
  all_swim_totals: "",
  recent_ride_totals: {
    distance: 5.962134,
    achievement_count: 9,
    count: 1,
    elapsed_time: 2,
    elevation_gain: 7.0614014,
    moving_time: 5
  },
  biggest_climb_elevation_gain: 6.027456183070403,
  ytd_ride_totals: "",
  all_ride_totals: "",
  ytd_run_totals: ""
};

const AuthenticatedAthlete = {
  id: 1234567890987654321,
  username: "marianne_t",
  resource_state: 3,
  firstname: "Marianne",
  lastname: "Teutenberg",
  city: "San Francisco",
  state: "CA",
  country: "US",
  sex: "F",
  premium: true,
  created_at: "2017-11-14T02:30:05Z",
  updated_at: "2018-02-06T19:32:20Z",
  badge_type_id: 4,
  profile_medium: "https://xxxxxx.cloudfront.net/pictures/athletes/123456789/123456789/2/medium.jpg",
  profile: "https://xxxxx.cloudfront.net/pictures/athletes/123456789/123456789/2/large.jpg",
  friend: null,
  follower: null,
  follower_count: 5,
  friend_count: 5,
  mutual_friend_count: 0,
  athlete_type: 1,
  date_preference: "%m/%d/%Y",
  measurement_preference: "feet",
  clubs: [{
    id: 231407,
    resource_state: 2,
    name: "The Strava Club",
    profile_medium: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/medium.jpg",
    profile: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5319085/1/large.jpg",
    cover_photo: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/large.jpg",
    cover_photo_small: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/231407/5098428/4/small.jpg",
    sport_type: "other",
    city: "San Francisco",
    state: "California",
    country: "United States",
    private: false,
    member_count: 93151,
    featured: false,
    verified: true,
    url: "strava"
  }],
  ftp: null,
  weight: 0,
  bikes: [{
    id: "b12345678987655",
    primary: true,
    name: "EMC",
    resource_state: 2,
    distance: 0
  }],
  shoes: [{
    id: "g12345678987655",
    primary: true,
    name: "adidas",
    resource_state: 2,
    distance: 4904
  }]
};

const Club = {
  id: 1,
  resource_state: 3,
  name: "Team Strava Cycling",
  profile_medium: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/medium.jpg",
  profile: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/large.jpg",
  cover_photo: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/large.jpg",
  cover_photo_small: "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/small.jpg",
  sport_type: "cycling",
  activity_types: ["Ride", "VirtualRide", "EBikeRide", "Velomobile", "Handcycle"],
  city: "San Francisco",
  state: "California",
  country: "United States",
  private: true,
  member_count: 116,
  featured: false,
  verified: false,
  url: "team-strava-bike",
  membership: "member",
  admin: false,
  owner: false,
  description: "Private club for Cyclists who work at Strava.",
  club_type: "company",
  post_count: 29,
  owner_id: 759,
  following_count: 107
};

const ClubActivities = [{
  resource_state: 2,
  athlete: {
    resource_state: 2,
    firstname: "Peter",
    lastname: "S."
  },
  name: "World Championship",
  distance: 2641.7,
  moving_time: 577,
  elapsed_time: 635,
  total_elevation_gain: 8.8,
  type: "Ride",
  workout_type: null
}];

const ClubAdministrators = [{
  resource_state: 2,
  firstname: "Peter",
  lastname: "S."
}];

const ClubMembers = [{
  resource_state: 2,
  firstname: "Peter",
  lastname: "S.",
  membership: "member",
  admin: false,
  owner: false
}];

const Equipment = {
  id: "b1231",
  primary: false,
  resource_state: 3,
  distance: 388206,
  brand_name: "BMC",
  model_name: "Teammachine",
  frame_type: 3,
  description: "My Bike."
};

const Route = {
  private: true,
  distance: 0.8008282,
  athlete: {
    id: 1,
    resource_state: 2,
    firstname: "Marianne",
    lastname: "Teutenberg",
    profile_medium: "https://xxxxxx.cloudfront.net/pictures/athletes/123456789/123456789/2/medium.jpg",
    profile: "https://xxxxx.cloudfront.net/pictures/athletes/123456789/123456789/2/large.jpg",
    city: "San Francisco",
    state: "CA",
    country: "US",
    sex: "M",
    premium: false,
    summit: false,
    created_at: "2017-11-14T02:30:05Z",
    updated_at: "2017-11-14T02:30:05Z"
  },
  description: "aeiou",
  created_at: "2000-01-23T04:56:07.000+00:00",
  elevation_gain: 6.0274563,
  type: 5,
  estimated_moving_time: 7,
  segments: [{
    country: "aeiou",
    private: true,
    distance: 3.6160767,
    average_grade: 2.027123,
    maximum_grade: 4.145608,
    climb_category: 1,
    city: "aeiou",
    elevation_high: 7.386282,
    athlete_pr_effort: {
      distance: 1.1730742,
      start_date_local: "2000-01-23T04:56:07.000+00:00",
      activity_id: 6,
      elapsed_time: 7,
      is_kom: true,
      id: 1,
      start_date: "2000-01-23T04:56:07.000+00:00"
    },
    athlete_segment_stats: {
      pr_elapsed_time: 5,
      pr_date: "2000-01-23T04:56:07.000+00:00",
      effort_count: 9,
      pr_activity_id: 4
    },
    start_latlng: "",
    elevation_low: 1.2315135,
    end_latlng: "",
    activity_type: "Ride",
    name: "aeiou",
    id: 9,
    state: "aeiou"
  }],
  starred: true,
  updated_at: "2000-01-23T04:56:07.000+00:00",
  sub_type: 2,
  id_str: "aeiou",
  name: "aeiou",
  id: 1,
  map: {
    summary_polyline: "aeiou",
    id: "aeiou",
    polyline: "aeiou"
  },
  timestamp: 5
};

const RouteStream = [{
  type: "latlng",
  data: [[37.833112, -122.483436], [37.832964, -122.483406]]
}, {
  type: "distance",
  data: [0, 16.8]
}, {
  type: "altitude",
  data: [92.4, 93.4]
}];

const SegmentEfforts = {
  id: 1234556789,
  resource_state: 3,
  name: "Alpe d'Huez",
  activity: {
    id: 3454504,
    resource_state: 1
  },
  athlete: {
    id: 54321,
    resource_state: 1
  },
  elapsed_time: 381,
  moving_time: 340,
  start_date: "2018-02-12T16:12:41Z",
  start_date_local: "2018-02-12T08:12:41Z",
  distance: 83,
  start_index: 65,
  end_index: 83,
  segment: {
    id: 63450,
    resource_state: 2,
    name: "Alpe d'Huez",
    activity_type: "Run",
    distance: 780.35,
    average_grade: -0.5,
    maximum_grade: 0,
    elevation_high: 21,
    elevation_low: 17.2,
    start_latlng: [37.808407654682, -122.426682919323],
    end_latlng: [37.808297909724, -122.421324329674],
    climb_category: 0,
    city: "San Francisco",
    state: "CA",
    country: "United States",
    private: false,
    hazardous: false,
    starred: false
  },
  kom_rank: null,
  pr_rank: null,
  achievements: [],
  athlete_segment_stats: {
    pr_elapsed_time: 212,
    pr_date: "2015-02-12",
    effort_count: 149
  }
};

const SegmentEffortsStream = [{
  type: "distance",
  data: [904.5, 957.8, 963.1, 989.1, 1011.9, 1049.7, 1082.4, 1098.1, 1113.2, 1124.7, 1139.2, 1142.1, 1170.4, 1173],
  series_type: "distance",
  original_size: 14,
  resolution: "high"
}];

const Segments = {
  segments: [{
    id: 229781,
    resource_state: 2,
    name: "Hawk Hill",
    climb_category: 1,
    climb_category_desc: "4",
    avg_grade: 5.7,
    start_latlng: [37.8331119, -122.4834356],
    end_latlng: [37.8280722, -122.4981393],
    elev_difference: 152.8,
    distance: 2684.8,
    points: "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    starred: false
  }]
};

const SegmentsStreams = [{
  type: "latlng",
  data: [[37.833112, -122.483436], [37.832964, -122.483406]],
  series_type: "distance",
  original_size: 2,
  resolution: "high"
}, {
  type: "distance",
  data: [0, 16.8],
  series_type: "distance",
  original_size: 2,
  resolution: "high"
}, {
  type: "altitude",
  data: [92.4, 93.4],
  series_type: "distance",
  original_size: 2,
  resolution: "high"
}];

const StarredSegments = {
  id: 229781,
  resource_state: 3,
  name: "Hawk Hill",
  activity_type: "Ride",
  distance: 2684.82,
  average_grade: 5.7,
  maximum_grade: 14.2,
  elevation_high: 245.3,
  elevation_low: 92.4,
  start_latlng: [37.8331119, -122.4834356],
  end_latlng: [37.8280722, -122.4981393],
  climb_category: 1,
  city: "San Francisco",
  state: "CA",
  country: "United States",
  private: false,
  hazardous: false,
  starred: false,
  created_at: "2009-09-21T20:29:41Z",
  updated_at: "2018-02-15T09:04:18Z",
  total_elevation_gain: 155.733,
  map: {
    id: "s229781",
    polyline: "}g|eFnpqjVl@En@Md@HbAd@d@^h@Xx@VbARjBDh@OPQf@w@d@k@XKXDFPH\\EbGT`AV`@v@|@NTNb@?XOb@cAxAWLuE@eAFMBoAv@eBt@q@b@}@tAeAt@i@dAC`AFZj@dB?~@[h@MbAVn@b@b@\\d@Eh@Qb@_@d@eB|@c@h@WfBK|AMpA?VF\\\\t@f@t@h@j@|@b@hCb@b@XTd@Bl@GtA?jAL`ALp@Tr@RXd@Rx@Pn@^Zh@Tx@Zf@`@FTCzDy@f@Yx@m@n@Op@VJr@",
    resource_state: 3
  },
  effort_count: 309974,
  athlete_count: 30623,
  star_count: 2428,
  athlete_segment_stats: {
    pr_elapsed_time: 553,
    pr_date: "1993-04-03",
    effort_count: 2
  }
};

const Upload = {
  id_str: "aeiou",
  activity_id: 6,
  external_id: "aeiou",
  id: 0,
  error: "aeiou",
  status: "aeiou"
};

const Zones = [{
  distribution_buckets: [{
    max: 0,
    min: 0,
    time: 1498
  }, {
    max: 50,
    min: 0,
    time: 62
  }, {
    max: 100,
    min: 50,
    time: 169
  }, {
    max: 150,
    min: 100,
    time: 536
  }, {
    max: 200,
    min: 150,
    time: 672
  }, {
    max: 250,
    min: 200,
    time: 821
  }, {
    max: 300,
    min: 250,
    time: 529
  }, {
    max: 350,
    min: 300,
    time: 251
  }, {
    max: 400,
    min: 350,
    time: 80
  }, {
    max: 450,
    min: 400,
    time: 81
  }, {
    max: -1,
    min: 450,
    time: 343
  }],
  type: "power",
  resource_state: 3,
  sensor_based: true
}];

//
const Data = {
  Activity,
  ActivityComments,
  ActivityKudoers,
  ActivityLaps,
  ActivityStream,
  ActivityZone,
  AthleteActivities,
  AthleteClubs,
  AthleteRoute,
  AthleteStats,
  AuthenticatedAthlete,
  Club,
  ClubActivities,
  ClubAdministrators,
  ClubMembers,
  Equipment,
  Route,
  RouteStream,
  SegmentEfforts,
  SegmentEffortsStream,
  Segments,
  SegmentsStreams,
  StarredSegments,
  Upload,
  Zones
};

var ActivityModel = {
  id: function id() {
    return getRandomInt(0, 99999999999999999);
  },
  resource_state: function resource_state() {
    return 3;
  },
  external_id: function external_id(id) {
    return "garmin_push_" + id;
  },
  upload_id: function upload_id() {
    return getRandomInt(0, 99999999999999999);
  },
  athlete: function athlete() {
    return {
      id: getRandomInt(0, 999999),
      resource_state: 1
    };
  },
  name: function name() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  distance: function distance() {
    return getRandomInt(0, 99999);
  },
  moving_time: function moving_time() {
    return getRandomInt(0, 99999);
  },
  elapsed_time: function elapsed_time() {
    return getRandomInt(0, 99999);
  },
  total_elevation_gain: function total_elevation_gain() {
    return getRandomInt(0, 99999);
  },
  type: function type() {
    var types = ["AlpineSki", "BackcountrySki", "Canoeing", "Crossfit", "EBikeRide", "Elliptical", "Golf", "Handcycle", "Hike", "IceSkate", "InlineSkate", "Kayaking", "Kitesurf", "NordicSki", "Ride", "RockClimbing", "RollerSki", "Rowing", "Run", "Sail", "Skateboard", "Snowboard", "Snowshoe", "Soccer", "StairStepper", "StandUpPaddling", "Surfing", "Swim", "Velomobile", "VirtualRide", "VirtualRun", "Walk", "WeightTraining", "Wheelchair", "Windsurf", "Workout", "Yoga"];
    return types[getRandomInt(0, types.length) - 1];
  },
  start_date: function start_date() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  start_date_local: function start_date_local() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  timezone: function timezone(offset) {
    var timezones = [{
      zones: "(GMT-12:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-11:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-10:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-09:30)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-09:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-08:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-07:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-06:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-05:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-04:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-03:30)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-03:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-02:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT-01:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT±00:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+01:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+02:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+03:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+03:30)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+04:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+04:30)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+05:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+05:30)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+05:45)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+06:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+06:30)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+07:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+08:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+08:45)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+09:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+09:30)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+10:00)",
      areas: ["America/Los_Angeles"]
    }, {
      zones: "(GMT+10:30)",
      areas: ["Australia/Lord Howe Island"]
    }, {
      zones: "(GMT+11:00)",
      areas: ["Norfolk Island", "Vanuatu", "Solomon Islands", "Tuvalu", "Russia/Magadan", "Russia/Sakha (east)", "Russia/Sakhalin", "Papua New Guinea/Bougainville", "New Caledonia", "Micronesia/Kosrae", "Micronesia/Pohnpei"]
    }, {
      zones: "(GMT+12:00)",
      areas: ["New Zealand", "Fiji", "Kiribati/Gilbert Islands", "Marshall Islands", "Nauru", "Russia/Chukotka", "Russia/Kamchatka", "Tuvalu", "Wake Island", "Wallis and Futuna"]
    }, {
      zones: "(GMT+12:45)",
      areas: ["New Zealand/Chatham Islands"]
    }, {
      zones: "(GMT+13:00)",
      areas: [" Kiribati/Phoenix Islands", " Samoa", " Tokelau", " Tonga"]
    }, {
      zones: "(GMT+14:00)",
      areas: ["Kiribati/Line Islands"]
    }];
    var offsets = [-12, -11, -10, -9.5, -9, -8, -7, -6, -5, -4, -3.5, -3, -3, -2, -1, 0, 1, 2, 3, 3.5, 4, 5, 5.5, 5.75, 6, 6.5, 7, 8, 8.75, 9, 9.5, 10, 10.5, 11, 12, 12.75];
    var check = offset / 60 / 60;
    var index = offsets.findIndex(function (a) {
      return a === check;
    });
    var string = timezones[index].zones;
    string += " ";
    string += timezones[index].areas[getRandomInt(0, timezones[index].areas.length) - 1];
    return string;
  },
  utc_offset: function utc_offset() {
    var offsets = [-12, -11, -10, -9.5, -9, -8, -7, -6, -5, -4, -3.5, -3, -3, -2, -1, 0, 1, 2, 3, 3.5, 4, 5, 5.5, 5.75, 6, 6.5, 7, 8, 8.75, 9, 9.5, 10, 10.5, 11, 12, 12.75];
    return offsets[getRandomInt(0, offsets.length) - 1] * 60 * 60;
  },
  start_latlng: function start_latlng() {
    return [getRandomInt(-90000000000000, 90000000000000) / 1000000000000, getRandomInt(-180000000000000, 180000000000000) / 1000000000000];
  },
  end_latlng: function end_latlng() {
    return [getRandomInt(-90000000000000, 90000000000000) / 1000000000000, getRandomInt(-180000000000000, 180000000000000) / 1000000000000];
  },
  achievement_count: function achievement_count() {
    return getRandomInt(0, 10);
  },
  kudos_count: function kudos_count() {
    return getRandomInt(0, 10);
  },
  comment_count: function comment_count() {
    return getRandomInt(0, 10);
  },
  athlete_count: function athlete_count() {
    return getRandomInt(0, 10);
  },
  photo_count: function photo_count() {
    return getRandomInt(0, 10);
  },
  map: function map() {
    var id = "";
    var polyline = "";
    var summary_polyline = "";
    var digits = "0123456789";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"£$%^&*()_+¬`|\?/.,><#';~:@][}{";
    id += letters.charAt(Math.floor(Math.random() * letters.length));

    for (var i = 0; i < 4; i++) {
      id += digits.charAt(Math.floor(Math.random() * digits.length));
    }

    for (var i = 0; i < 2601; i++) {
      polyline += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    for (var i = 0; i < 486; i++) {
      summary_polyline += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return {
      id: id,
      polyline: polyline,
      resource_state: 3,
      summary_polyline: summary_polyline
    };
  },
  trainer: function trainer() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  commute: function commute() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  manual: function manual() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  private: function _private() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  flagged: function flagged() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  gear_id: function gear_id() {
    var id = "";
    var digits = "0123456789";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    id += letters.charAt(Math.floor(Math.random() * letters.length));

    for (var i = 0; i < 4; i++) {
      id += digits.charAt(Math.floor(Math.random() * digits.length));
    }

    return id;
  },
  from_accepted_tag: function from_accepted_tag() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  average_speed: function average_speed() {
    return getRandomInt(0, 9999) / 1000;
  },
  max_speed: function max_speed() {
    return getRandomInt(0, 999) / 10;
  },
  max_heartrate: function max_heartrate() {
    return getRandomInt(1100, 1500) / 10;
  },
  average_heartrate: function average_heartrate() {
    return getRandomInt(160, 190);
  },
  average_cadence: function average_cadence() {
    return getRandomInt(0, 999) / 10;
  },
  average_temp: function average_temp() {
    return getRandomInt(0, 9);
  },
  average_watts: function average_watts() {
    return getRandomInt(0, 9999) / 10;
  },
  weighted_average_watts: function weighted_average_watts() {
    return getRandomInt(0, 999);
  },
  kilojoules: function kilojoules() {
    return getRandomInt(0, 9999) / 10;
  },
  device_watts: function device_watts() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  has_heartrate: function has_heartrate() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  max_watts: function max_watts() {
    return getRandomInt(0, 999);
  },
  elev_high: function elev_high() {
    return getRandomInt(0, 9999) / 10;
  },
  elev_low: function elev_low() {
    return getRandomInt(0, 999) / 10;
  },
  pr_count: function pr_count() {
    return getRandomInt(0, 999);
  },
  total_photo_count: function total_photo_count() {
    return getRandomInt(0, 999);
  },
  has_kudoed: function has_kudoed() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  workout_type: function workout_type() {
    return getRandomInt(0, 999);
  },
  suffer_score: function suffer_score() {
    return getRandomInt(0, 999);
  },
  description: function description() {
    var description = "";
    var digits = "0123456789";

    for (var i = 0; i < 50; i++) {
      description += digits.charAt(Math.floor(Math.random() * digits.length));
    }

    return description;
  },
  calories: function calories() {
    return getRandomInt(0, 9999) / 10;
  },
  splits_metric: function splits_metric() {
    return [{
      distance: getRandomInt(0, 10000) / 10,
      elapsed_time: getRandomInt(0, 500),
      elevation_difference: getRandomInt(0, 100) / 10,
      moving_time: getRandomInt(0, 500),
      split: getRandomInt(0, 10),
      average_speed: getRandomInt(0, 100) / 10,
      pace_zone: getRandomInt(0, 100)
    }];
  },
  partner_brand_tag: function partner_brand_tag() {
    return null;
  },
  photos: function photos() {
    var unique_id = "";
    var characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 31; i++) {
      unique_id += characters.charAt(Math.floor(Math.random() * characters.length));

      if (i === 6 || i === 10 || i === 14 || i === 18) {
        unique_id += "-";
      }
    }

    return {
      primary: {
        id: getRandomInt(0, 999999999),
        unique_id: unique_id,
        urls: {
          100: "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-128x96.jpg",
          600: "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-768x576.jpg"
        },
        source: getRandomInt(0, 10)
      },
      use_primary_photo: true,
      count: getRandomInt(0, 10)
    };
  },
  highlighted_kudosers: function highlighted_kudosers() {
    var id = getRandomInt(0, 99999999999999999);
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 10);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    string += " ";
    length = getRandomInt(3, 10);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    var bool = false;

    switch (getRandomInt(0, 2)) {
      case 1:
        bool = true;
        break;

      case 2:
        bool = false;
        break;
    }

    return {
      destination_url: "strava://athletes/" + id,
      display_name: string,
      avatar_url: "https://dgalywyr863hv.cloudfront.net/pictures/athletes/" + id + "/" + id + "/3/medium.jpg",
      show_name: bool
    };
  },
  hide_from_home: function hide_from_home() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  device_name: function device_name() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 10);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    string += " ";
    length = getRandomInt(3, 10);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  embed_token: function embed_token() {
    var characters = "0123456789abcdef";
    var embed_token = "";

    for (var i = 0; i < 40; i++) {
      embed_token += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return embed_token;
  },
  segment_leaderboard_opt_out: function segment_leaderboard_opt_out() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  leaderboard_opt_out: function leaderboard_opt_out() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  location_city: function location_city() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  location_state: function location_state() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  location_country: function location_country() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  }
};
var ActivityLapsModel = {
  id: function id() {
    return getRandomInt(0, 99999999999999999);
  },
  resource_state: function resource_state() {
    return 2;
  },
  name: function name() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  activity: function activity() {
    return {
      id: getRandomInt(0, 99999999999999999),
      resource_state: 1
    };
  },
  athlete: function athlete() {
    return {
      id: getRandomInt(0, 99999999999999999),
      resource_state: 1
    };
  },
  elapsed_time: function elapsed_time() {
    return getRandomInt(0, 99999);
  },
  moving_time: function moving_time() {
    return getRandomInt(0, 99999);
  },
  start_date: function start_date() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  start_date_local: function start_date_local() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  distance: function distance() {
    return getRandomInt(0, 999999) / 100;
  },
  start_index: function start_index() {
    return getRandomInt(0, 500);
  },
  end_index: function end_index(start_index) {
    return getRandomInt(start_index, 999);
  },
  total_elevation_gain: function total_elevation_gain() {
    return getRandomInt(0, 999);
  },
  average_speed: function average_speed() {
    return getRandomInt(0, 999) / 100;
  },
  max_speed: function max_speed() {
    return getRandomInt(0, 99) / 10;
  },
  average_cadence: function average_cadence() {
    return getRandomInt(0, 100);
  },
  device_watts: function device_watts() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  average_watts: function average_watts() {
    return getRandomInt(0, 9999) / 10;
  },
  lap_index: function lap_index() {
    return getRandomInt(0, 10);
  },
  split: function split() {
    return getRandomInt(0, 10);
  }
};

var AthleteModel = _defineProperty({
  id: function id() {
    return getRandomInt(0, 99999999999999999);
  },
  username: function username(firstname, lastname) {
    var string = "";
    string += firstname.charAt(0).toLowerCase();
    string += firstname.substring(1);
    string += "_";
    string += lastname.charAt(0).toLowerCase();
    return string;
  },
  resource_state: function resource_state() {
    return 3;
  },
  firstname: function firstname() {
    var firstName = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var length = getRandomInt(3, 15);
    firstName += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      firstName += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return firstName;
  },
  lastname: function lastname() {
    var lastName = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var length = getRandomInt(3, 15);
    lastName += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      lastName += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return lastName;
  },
  city: function city() {
    var city = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var length = getRandomInt(3, 15);
    city += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      city += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return city;
  },
  state: function state() {
    var state = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var length = getRandomInt(3, 15);
    state += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      state += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return state;
  },
  country: function country() {
    var country = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var length = getRandomInt(3, 15);
    country += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      country += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return country;
  },
  sex: function sex() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return "M";

      case 2:
        return "F";
    }
  },
  premium: function premium() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  created_at: function created_at() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  updated_at: function updated_at(created_at) {
    var finalDate = new Date(0);
    console.log("created_at", created_at);
    finalDate.setFullYear(created_at.split('-')[0]);
    finalDate.setMonth(created_at.split('-')[1] - 1);
    finalDate.setDate(created_at.split('T')[0].split('-')[2]);
    console.log("time", created_at.split('T')[1]);
    console.log("hours", created_at.split('T')[1].split(':')[0]);
    console.log("minutes", created_at.split('T')[1].split(':')[1]);
    console.log("seconds", created_at.split('T')[1].split(':')[2].split("Z")[0]);
    finalDate.setHours(created_at.split('T')[1].split(':')[0], created_at.split('T')[1].split(':')[1], created_at.split('T')[1].split(':')[2].split("Z")[0]);
    console.log("before", finalDate.getTime());
    finalDate.setTime(finalDate.getTime() + getRandomInt(1000, 94672800000));
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  badge_type_id: function badge_type_id() {
    return 4;
  },
  profile_medium: function profile_medium(id) {
    return "https://xxxxx.cloudfront.net/pictures/athletes/" + id + "/" + id + "/2/large.jpg";
  },
  profile: function profile(id) {
    return "https://xxxxx.cloudfront.net/pictures/athletes/" + id + "/" + id + "/2/large.jpg";
  },
  friend: function friend() {
    return null;
  },
  follower: function follower() {
    return null;
  },
  follower_count: function follower_count() {
    return getRandomInt(0, 30);
  },
  friend_count: function friend_count() {
    return getRandomInt(0, 30);
  },
  mutual_friend_count: function mutual_friend_count() {
    return getRandomInt(0, 30);
  },
  athlete_type: function athlete_type() {
    return getRandomInt(0, 30);
  },
  date_preference: function date_preference() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return "%m/%d/%Y";

      case 2:
        return "%d/%m/%Y";
    }
  },
  measurement_preference: function measurement_preference() {
    var measurements = ["feet", "meters"];
    return measurements[getRandomInt(0, measurements.length) - 1];
  },
  clubs: function clubs() {
    return getRandomInt(0, 3) - 1;
  },
  ftp: function ftp() {
    return getRandomInt(0, 10);
  },
  weight: function weight() {
    return getRandomInt(0, 100) / 10;
  },
  bikes: function bikes() {
    return getRandomInt(0, 3) - 1;
  },
  shoes: function shoes() {
    return getRandomInt(0, 3) - 1;
  },
  summit: function summit(premium) {
    return premium;
  }
}, "premium", function premium() {
  switch (getRandomInt(0, 2)) {
    case 1:
      return true;

    case 2:
      return false;
  }
});

var ClubModel = {
  id: function id() {
    return getRandomInt(0, 99);
  },
  resource_state: function resource_state() {
    return getRandomInt(0, 3);
  },
  name: function name() {
    var start = ["Team", "Club", "Group"];
    var place = ["Strava", "B", "C"];
    var sport = ["Cycling", "Walking", "Running", "Swmming", "Hiking"];
    return start[getRandomInt(0, start.length) - 1] + " " + place[getRandomInt(0, place.length) - 1] + " " + sport[getRandomInt(0, sport.length) - 1];
  },
  profile_medium: function profile_medium() {
    return "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/medium.jpg";
  },
  profile: function profile() {
    return "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/large.jpg";
  },
  cover_photo: function cover_photo() {
    return "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/large.jpg";
  },
  cover_photo_small: function cover_photo_small() {
    return "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/small.jpg";
  },
  sport_type: function sport_type() {
    var types = ["cycling", "running", "triathlon", "other"];
    return types[getRandomInt(0, types.length) - 1];
  },
  activity_types: function activity_types(sport_type) {
    var types = {
      cycling: ["Ride", "VirtualRide", "EBikeRide", "Velomobile", "Handcycle"],
      triathlon: ["triathlon1", "triathlon2", "triathlon3", "triathlon4", "triathlon5", "triathlon6"],
      running: ["running1", "running2", "running3", "running4", "running5", "running6"],
      swimming: ["swimming1", "swimming2", "swimming3", "swimming4", "swimming5", "swimming6"],
      hiking: ["hiking1", "hiking2", "hiking3", "hiking4", "hiking5", "hiking6"]
    };

    switch (sport_type) {
      case "cycling":
        return types.cycling;

      case "running":
        return types.running;

      case "triathlon":
        return types.triathlon;

      case "other":
        switch (getRandomInt(0, types.length) - 1) {
          case 0:
            return types.swimming;

          case 1:
            return types.hiking;

          default:
            return types.hiking;
        }

    }
  },
  city: function city() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  state: function state() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  country: function country() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  private: function _private() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  member_count: function member_count() {
    return getRandomInt(0, 300);
  },
  featured: function featured() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  verified: function verified() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  url: function url(name) {
    var editedName = name.split(" ");

    for (var i = 0; i < editedName.length; i++) {
      editedName[i] = editedName[i][0].toLowerCase() + editedName[i].toString().substring(1);
    }

    editedName = editedName.join("-");
    return editedName;
  },
  membership: function membership() {
    var membership = ['member', 'pending'];
    return membership[getRandomInt(0, membership.length) - 1];
  },
  admin: function admin() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  owner: function owner() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  description: function description() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  club_type: function club_type() {
    var club_type = ['company', 'club type 2', 'club type 3'];
    return club_type[getRandomInt(0, club_type.length) - 1];
  },
  post_count: function post_count() {
    return getRandomInt(0, 500);
  },
  owner_id: function owner_id() {
    return getRandomInt(0, 1000);
  },
  following_count: function following_count() {
    return getRandomInt(0, 500);
  }
};
var EquipmentModel = {
  id: function id() {
    var string = "";
    var digits = "0123456789";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    string += letters.charAt(Math.floor(Math.random() * letters.length));

    for (var i = 0; i < 4; i++) {
      string += digits.charAt(Math.floor(Math.random() * digits.length));
    }

    return string;
  },
  primary: function primary() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  resource_state: function resource_state() {
    return getRandomInt(1, 3);
  },
  distance: function distance() {
    return getRandomInt(0, 999999);
  },
  brand_name: function brand_name() {
    var brands = ["BMX", "BMC"];
    return brands[getRandomInt(0, brands.length) - 1];
  },
  name: function name() {
    var brands = ["BMX", "BMC"];
    return brands[getRandomInt(0, brands.length) - 1];
  },
  model_name: function model_name() {
    var brands = ["Teammachine", "Bike2"];
    return brands[getRandomInt(0, brands.length) - 1];
  },
  frame_type: function frame_type() {
    return getRandomInt(0, 10);
  },
  description: function description() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";

    for (var i = 0; i < 12; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  }
};
var SegmentEffortsModel = {
  id: function id() {
    return getRandomInt(0, 1234556789);
  },
  resource_state: function resource_state() {
    return 2;
  },
  name: function name() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  activity: function activity() {
    return {
      id: getRandomInt(0, 9999999),
      resource_state: 1
    };
  },
  athlete: function athlete() {
    return {
      id: getRandomInt(0, 9999999),
      resource_state: 1
    };
  },
  elapsed_time: function elapsed_time() {
    return getRandomInt(0, 500);
  },
  moving_time: function moving_time() {
    return getRandomInt(0, 999);
  },
  start_date: function start_date() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  start_date_local: function start_date_local() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  distance: function distance() {
    return getRandomInt(0, 300);
  },
  start_index: function start_index() {
    return getRandomInt(0, 100);
  },
  end_index: function end_index(start_index) {
    return start_index + getRandomInt(0, 100);
  },
  average_cadence: function average_cadence() {
    return getRandomInt(0, 99) / 10;
  },
  device_watts: function device_watts() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  average_watts: function average_watts() {
    return getRandomInt(0, 9999) / 10;
  },
  kom_rank: function kom_rank() {
    var x = getRandomInt(0, 11) - 1;

    switch (x) {
      case 0:
        return null;

      default:
        return x;
    }
  },
  pr_rank: function pr_rank() {
    var x = getRandomInt(0, 4) - 1;

    switch (x) {
      case 0:
        return null;

      default:
        return x;
    }
  },
  hidden: function hidden() {
    var x = getRandomInt(0, 4) - 1;

    switch (x) {
      case 0:
        return null;

      default:
        return x;
    }
  },
  achievements: function achievements() {
    return [];
  },
  athlete_segment_stats: function athlete_segment_stats() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    var dateStr = finalDate.getFullYear() + "-" + finalDate.getMonth() + "-" + finalDate.getDate();
    return {
      pr_elapsed_time: getRandomInt(0, 500),
      pr_date: dateStr,
      effort_count: getRandomInt(0, 500)
    };
  }
};
var SegmentModel = {
  id: function id() {
    return getRandomInt(0, 999999);
  },
  name: function name() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  activity_type: function activity_type() {
    var types = ["AlpineSki", "BackcountrySki", "Canoeing", "Crossfit", "EBikeRide", "Elliptical", "Golf", "Handcycle", "Hike", "IceSkate", "InlineSkate", "Kayaking", "Kitesurf", "NordicSki", "Ride", "RockClimbing", "RollerSki", "Rowing", "Run", "Sail", "Skateboard", "Snowboard", "Snowshoe", "Soccer", "StairStepper", "StandUpPaddling", "Surfing", "Swim", "Velomobile", "VirtualRide", "VirtualRun", "Walk", "WeightTraining", "Wheelchair", "Windsurf", "Workout", "Yoga"];
    return types[getRandomInt(0, types.length) - 1];
  },
  distance: function distance() {
    return getRandomInt(0, 99999) / 100;
  },
  average_grade: function average_grade() {
    return (getRandomInt(0, 150) - 100) / 100;
  },
  maximum_grade: function maximum_grade(average_grade) {
    return (getRandomInt(parseFloat(average_grade) * 100, 200) - 100) / 100;
  },
  elevation_high: function elevation_high() {
    return getRandomInt(0, 100);
  },
  elevation_low: function elevation_low() {
    return getRandomInt(0, 100);
  },
  start_latlng: function start_latlng() {
    return [getRandomInt(-90000000000000, 90000000000000) / 1000000000000, getRandomInt(-180000000000000, 180000000000000) / 1000000000000];
  },
  end_latlng: function end_latlng() {
    return [getRandomInt(-90000000000000, 90000000000000) / 1000000000000, getRandomInt(-180000000000000, 180000000000000) / 1000000000000];
  },
  climb_category: function climb_category() {
    return getRandomInt(0, 6) - 1;
  },
  city: function city() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  state: function state() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  country: function country() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  private: function _private() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  hazardous: function hazardous() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  starred: function starred() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  }
};
var UploadModel = {
  id_str: function id_str() {
    var string = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 4; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  activity_id: function activity_id() {
    return getRandomInt(0, 100);
  },
  external_id: function external_id() {
    var string = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 4; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  id: function id() {
    return getRandomInt(0, 100);
  },
  error: function error() {
    var string = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 4; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  status: function status() {
    var string = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";

    for (var i = 0; i < 4; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  }
};
var AthleteStatsModel = {
  recent_run_totals: function recent_run_totals() {
    switch (getRandomInt(0, 10)) {
      case 1:
        return "";

      default:
        return {
          distance: getRandomInt(0, 9999999) / 1000000,
          achievement_count: getRandomInt(0, 10),
          count: getRandomInt(0, 10),
          elapsed_time: getRandomInt(0, 10),
          elevation_gain: getRandomInt(0, 99999999) / 10000000,
          moving_time: getRandomInt(0, 10)
        };
    }
  },
  all_run_totals: function all_run_totals() {
    switch (getRandomInt(0, 10)) {
      case 1:
        return "";

      default:
        return {
          distance: getRandomInt(0, 9999999) / 1000000,
          achievement_count: getRandomInt(0, 10),
          count: getRandomInt(0, 10),
          elapsed_time: getRandomInt(0, 10),
          elevation_gain: getRandomInt(0, 99999999) / 10000000,
          moving_time: getRandomInt(0, 10)
        };
    }
  },
  recent_swim_totals: function recent_swim_totals() {
    switch (getRandomInt(0, 10)) {
      case 1:
        return "";

      default:
        return {
          distance: getRandomInt(0, 9999999) / 1000000,
          achievement_count: getRandomInt(0, 10),
          count: getRandomInt(0, 10),
          elapsed_time: getRandomInt(0, 10),
          elevation_gain: getRandomInt(0, 99999999) / 10000000,
          moving_time: getRandomInt(0, 10)
        };
    }
  },
  biggest_ride_distance: function biggest_ride_distance() {
    return getRandomInt(0, 9999999999999999) / 1000000000000000;
  },
  ytd_swim_totals: function ytd_swim_totals() {
    switch (getRandomInt(0, 10)) {
      case 1:
        return "";

      default:
        return {
          distance: getRandomInt(0, 9999999) / 1000000,
          achievement_count: getRandomInt(0, 10),
          count: getRandomInt(0, 10),
          elapsed_time: getRandomInt(0, 10),
          elevation_gain: getRandomInt(0, 99999999) / 10000000,
          moving_time: getRandomInt(0, 10)
        };
    }
  },
  all_swim_totals: function all_swim_totals() {
    switch (getRandomInt(0, 10)) {
      case 1:
        return "";

      default:
        return {
          distance: getRandomInt(0, 9999999) / 1000000,
          achievement_count: getRandomInt(0, 10),
          count: getRandomInt(0, 10),
          elapsed_time: getRandomInt(0, 10),
          elevation_gain: getRandomInt(0, 99999999) / 10000000,
          moving_time: getRandomInt(0, 10)
        };
    }
  },
  recent_ride_totals: function recent_ride_totals() {
    return {
      distance: 5.962134,
      achievement_count: 9,
      count: 1,
      elapsed_time: 2,
      elevation_gain: 7.0614014,
      moving_time: 5
    };
  },
  biggest_climb_elevation_gain: function biggest_climb_elevation_gain() {
    return getRandomInt(0, 9999999999999999) / 1000000000000000;
  },
  ytd_ride_totals: function ytd_ride_totals() {
    switch (getRandomInt(0, 10)) {
      case 1:
        return "";

      default:
        return {
          distance: getRandomInt(0, 9999999) / 1000000,
          achievement_count: getRandomInt(0, 10),
          count: getRandomInt(0, 10),
          elapsed_time: getRandomInt(0, 10),
          elevation_gain: getRandomInt(0, 99999999) / 10000000,
          moving_time: getRandomInt(0, 10)
        };
    }
  },
  all_ride_totals: function all_ride_totals() {
    switch (getRandomInt(0, 10)) {
      case 1:
        return "";

      default:
        return {
          distance: getRandomInt(0, 9999999) / 1000000,
          achievement_count: getRandomInt(0, 10),
          count: getRandomInt(0, 10),
          elapsed_time: getRandomInt(0, 10),
          elevation_gain: getRandomInt(0, 99999999) / 10000000,
          moving_time: getRandomInt(0, 10)
        };
    }
  },
  ytd_run_totals: function ytd_run_totals() {
    switch (getRandomInt(0, 10)) {
      case 1:
        return "";

      default:
        return {
          distance: getRandomInt(0, 9999999) / 1000000,
          achievement_count: getRandomInt(0, 10),
          count: getRandomInt(0, 10),
          elapsed_time: getRandomInt(0, 10),
          elevation_gain: getRandomInt(0, 99999999) / 10000000,
          moving_time: getRandomInt(0, 10)
        };
    }
  }
};
var ActivityZoneModel = {
  score: function score() {
    return getRandomInt(0, 100) - 1;
  },
  sensor_based: function sensor_based() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return false;

      default:
        return true;
    }
  },
  custom_zones: function custom_zones() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return false;

      default:
        return true;
    }
  },
  max: function max() {
    return getRandomInt(0, 100);
  },
  distribution_buckets: function distribution_buckets() {
    var ranges = [];

    for (var i = 0; i < 5; i++) {
      if (i === 0) {
        ranges.push(getRandomInt(70, 90));
      } else {
        ranges.push(ranges[i - 1] + getRandomInt(5, 30));
      }
    }

    switch (getRandomInt(0, 10)) {
      case 1:
        return "";

      default:
        return [{
          min: ranges[0],
          max: ranges[1],
          time: getRandomInt(0, 10)
        }, {
          min: ranges[1],
          max: ranges[2],
          time: getRandomInt(0, 10)
        }, {
          min: ranges[2],
          max: ranges[3],
          time: getRandomInt(0, 10)
        }, {
          min: ranges[3],
          max: ranges[4],
          time: getRandomInt(0, 10)
        }];
    }
  },
  type: function type() {
    var types = ["heartrate"];
    return types[getRandomInt(0, types.length) - 1];
  },
  points: function points() {
    return getRandomInt(0, 100);
  }
};
var ActivityCommentsModel = {
  id: function id() {
    return getRandomInt(0, 99999999999999999);
  },
  activity_id: function activity_id() {
    return getRandomInt(0, 99999999999999999);
  },
  post_id: function post_id() {
    return null;
  },
  resource_state: function resource_state() {
    return 2;
  },
  text: function text() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var end = ".?!";
    var string = "";
    var length = getRandomInt(3, 60);
    var spaceGap = getRandomInt(3, 10);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      if (spaceGap === 0) {
        string += " ";
        spaceGap = getRandomInt(3, 10);
      }

      string += letters.charAt(Math.floor(Math.random() * letters.length));
      spaceGap -= 1;
    }

    string += end.charAt(Math.floor(Math.random() * end.length));
    return string;
  },
  mentions_metadata: function mentions_metadata() {
    return null;
  },
  created_at: function created_at() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  athlete: function athlete() {
    var firstName = "";
    var lastName = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var length = getRandomInt(3, 15);
    firstName += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();
    lastName += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      firstName += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return {
      firstname: firstName,
      lastname: lastName
    };
  }
};
var ExplorerReponseModel = {
  id: function id() {
    return getRandomInt(0, 9999999);
  },
  resource_state: function resource_state() {
    return 2;
  },
  name: function name() {
    var string = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var spaces = getRandomInt(0, 4);
    var length = 0;

    for (var y = 0; y < spaces; y++) {
      length = getRandomInt(3, 10);
      string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

      for (var i = 0; i < length; i++) {
        string += letters.charAt(Math.floor(Math.random() * letters.length));
      }

      if (y + 1 !== spaces) {
        string += " ";
      }
    }

    return string;
  },
  climb_category: function climb_category() {
    return getRandomInt(0, 6) - 1;
  },
  climb_category_desc: function climb_category_desc(index) {
    var descs = ["NC", "4", "3", "2", "1", "HC"];
    return descs[index];
  },
  avg_grade: function avg_grade() {
    return getRandomInt(0, 100) / 10;
  },
  start_latlng: function start_latlng() {
    return [getRandomInt(-90000000000000, 90000000000000) / 1000000000000, getRandomInt(-180000000000000, 180000000000000) / 1000000000000];
  },
  end_latlng: function end_latlng() {
    return [getRandomInt(-90000000000000, 90000000000000) / 1000000000000, getRandomInt(-180000000000000, 180000000000000) / 1000000000000];
  },
  elev_difference: function elev_difference() {
    return getRandomInt(0, 2000) / 10;
  },
  distance: function distance() {
    return getRandomInt(0, 50000) / 10;
  },
  points: function points() {
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"£$%^&*()_+¬`|\?/.,><#';~:@][}{";
    var string = "";

    for (var i = 0; i < 271; i++) {
      string += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return string;
  },
  starred: function starred() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return false;

      default:
        return true;
    }
  }
};
var StreamModel = {
  type: function type() {
    var types = ["distance", "latlng", "altitude", "velocity_smooth", "heartrate", "cadence", "watts", "temp", "moving", "grade_smooth"];
    return types[getRandomInt(0, types.length) - 1];
  },
  data: function data(type, size) {
    var array = [];
    var x = 0;

    switch (type) {
      case "distance":
        for (var i = 0; i < size; i++) {
          x += getRandomInt(0, 100) / 10;
          array.push(x);
        }

        break;

      case "latlng":
        for (var i = 0; i < size; i++) {
          array.push([getRandomInt(-90000000000000, 90000000000000) / 1000000000000, getRandomInt(-180000000000000, 180000000000000) / 1000000000000]);
        }

        break;

      case "altitude":
        x = getRandomInt(80, 120);

        for (var i = 0; i < size; i++) {
          array.push(x + getRandomInt(-20, 20));
        }

        break;

      case "velocity_smooth":
        for (var i = 0; i < size; i++) {
          array.push(x + getRandomInt(-20, 20));
        }

        break;

      case "heartrate":
        for (var i = 0; i < size; i++) {
          array.push(5);
        }

        break;

      case "cadence":
        for (var i = 0; i < size; i++) {
          array.push(4);
        }

        break;

      case "watts":
        for (var i = 0; i < size; i++) {
          array.push(1);
        }

        break;

      case "temp":
        for (var i = 0; i < size; i++) {
          array.push(3);
        }

        break;

      case "moving":
        for (var i = 0; i < size; i++) {
          array.push(2);
        }

        break;

      case "grade_smooth":
        for (var i = 0; i < size; i++) {
          x = x + getRandomInt(0, 100) / 100;

          if (x > 1) {
            array.push(1.0);
          } else {
            array.push(x);
          }
        }

        break;
    }

    return array;
  },
  series_type: function series_type() {
    var types = ["distance", "time"];
    return types[getRandomInt(0, types.length) - 1];
  },
  original_size: function original_size() {
    return getRandomInt(0, 15);
  },
  resolution: function resolution() {
    var resolution = ["low", "medium", "high"];
    return resolution[getRandomInt(0, resolution.length) - 1];
  }
};
var RouteModel = {
  private: function _private() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  distance: function distance() {
    return getRandomInt(0, 99999999) / 10000000;
  },
  description: function description() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  created_at: function created_at() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  elevation_gain: function elevation_gain() {
    return getRandomInt(0, 999999999) / 100000000;
  },
  type: function type() {
    return getRandomInt(0, 2);
  },
  estimated_moving_time: function estimated_moving_time() {
    return getRandomInt(0, 999);
  },
  starred: function starred() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  },
  updated_at: function updated_at(created_at) {
    var finalDate = new Date(0);
    console.log("created_at", created_at);
    finalDate.setFullYear(created_at.split('-')[0]);
    finalDate.setMonth(created_at.split('-')[1] - 1);
    finalDate.setDate(created_at.split('T')[0].split('-')[2]);
    console.log("time", created_at.split('T')[1]);
    console.log("hours", created_at.split('T')[1].split(':')[0]);
    console.log("minutes", created_at.split('T')[1].split(':')[1]);
    console.log("seconds", created_at.split('T')[1].split(':')[2].split("Z")[0]);
    finalDate.setHours(created_at.split('T')[1].split(':')[0], created_at.split('T')[1].split(':')[1], created_at.split('T')[1].split(':')[2].split("Z")[0]);
    console.log("before", finalDate.getTime());
    finalDate.setTime(finalDate.getTime() + getRandomInt(1000, 94672800000));
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  sub_type: function sub_type() {
    return getRandomInt(0, 5);
  },
  id_str: function id_str(id) {
    return id.toString();
  },
  name: function name() {
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);
    string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

    for (var i = 0; i < length; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));
    }

    return string;
  },
  id: function id() {
    return getRandomInt(0, 99999999999999999);
  },
  map: function map() {
    var array = [];
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var string = "";
    var length = getRandomInt(3, 15);

    for (var y = 0; y < 3; y++) {
      string = "";
      length = getRandomInt(3, 15);
      string += letters.charAt(Math.floor(Math.random() * letters.length)).toUpperCase();

      for (var i = 0; i < length; i++) {
        string += letters.charAt(Math.floor(Math.random() * letters.length));
      }

      array.push(string);
    }

    return {
      summary_polyline: array[0],
      id: array[1],
      polyline: array[2]
    };
  },
  timestamp: function timestamp(date) {
    var finalDate = new Date(0);
    finalDate.setFullYear(date.split('-')[0]);
    finalDate.setMonth(date.split('-')[1] - 1);
    finalDate.setDate(date.split('T')[0].split('-')[2]);
    finalDate.setHours(date.split('T')[1].split(':')[0], date.split('T')[1].split(':')[1], date.split('T')[1].split(':')[2].split("Z")[0]);
    return finalDate.getTime();
  }
};
var SummaryPRSegmentEffort = {
  pr_elapsed_time: function pr_elapsed_time() {
    return getRandomInt(0, 10);
  },
  pr_date: function pr_date() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  effort_count: function effort_count() {
    return getRandomInt(0, 10);
  },
  pr_activity_id: function pr_activity_id() {
    return getRandomInt(0, 99999999999999999);
  }
};
var SummarySegmentEffort = {
  id: function id() {
    return getRandomInt(0, 99999999999999999);
  },
  activity_id: function activity_id() {
    return getRandomInt(0, 99999999999999999);
  },
  elapsed_time: function elapsed_time() {
    return getRandomInt(0, 99999999);
  },
  start_date: function start_date() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  start_date_local: function start_date_local() {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 12) - 1);
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(0, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 24) - 1, getRandomInt(0, 60) - 1, getRandomInt(0, 60) - 1);
    return finalDate.toISOString().split('.')[0] + "Z";
  },
  distance: function distance() {
    return getRandomInt(0, 9999) / 10;
  },
  is_kom: function is_kom() {
    switch (getRandomInt(0, 2)) {
      case 1:
        return true;

      case 2:
        return false;
    }
  }
};
var dataModels = {
  Activity: {
    data: Data.Activity,
    mockup: ActivityModel
  },
  Athlete: {
    data: Data.AuthenticatedAthlete,
    mockup: AthleteModel
  },
  ActivityComments: {
    data: Data.ActivityComments,
    mockup: ActivityCommentsModel
  },
  ActivityLap: {
    data: Data.ActivityLaps,
    mockup: ActivityLapsModel
  },
  ActivityStream: {
    data: Data.ActivityStream,
    mockup: StreamModel
  },
  ActivityZone: {
    data: Data.ActivityZone,
    mockup: ActivityZoneModel
  },
  ActivityKudoers: {
    data: Data.ActivityKudoers,
    mockup: AthleteModel
  },
  AthleteActivities: {
    data: Data.AthleteActivities,
    mockup: ActivityModel
  },
  AthleteStats: {
    data: Data.AthleteStats,
    mockup: AthleteStatsModel
  },
  Club: {
    data: Data.Club,
    mockup: ClubModel
  },
  Equipment: {
    data: Data.Equipment,
    mockup: EquipmentModel
  },
  SegmentEfforts: {
    data: Data.SegmentEfforts,
    mockup: SegmentEffortsModel
  },
  Route: {
    data: Data.Route,
    mockup: RouteModel
  },
  Segments: {
    data: Data.Segments,
    mockup: ExplorerReponseModel
  },
  Upload: {
    data: Data.Upload,
    mockup: UploadModel
  }
};
function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
} // export function getActivityMockupData(dataType, dataModel, dataDate) {
//   let mockupData = {};
//   const mockupModel = dataModels[dataModel].mockup;
//   if (dataType === "SYNC") {
//     mockupData = dataModels[dataModel].data;
//   }
//   if (dataType === "ASYNC") {
//     const mockupDataRow = dataModels[dataModel].data[1].split("\t");
//     const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
//     mockupDataHeader.forEach((k, i) => {
//       mockupData[k] = mockupDataRow[i];
//     });
//   }
//   [
//   ].forEach((key, i) => {
//     switch (key) {
//       default :
//         mockupData[key] = mockupModel[key]();
//         break;
//     }
//   });
//   return mockupData;
// }

function getEquipmentMockupData(dataType, dataModel, dataDate) {
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

  ["resource_state", "primary", "id", "distance"].forEach(function (key, i) {
    switch (key) {
      case "brand_name":
      case "resource_state":
      case "id":
      case "distance":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  switch (mockupData["resource_state"]) {
    case 2:
      mockupData = {
        id: mockupData["id"],
        primary: mockupData["primary"],
        resource_state: mockupData["resource_state"],
        distance: mockupData["distance"]
      };
      break;

    case 3:
      ["brand_name", "model_name", "frame_type", "description"].forEach(function (key, i) {
        switch (key) {
          case "description":
          case "frame_type":
          case "brand_name":
          case "model_name":
            mockupData[key] = mockupModel[key]();
            break;
        }
      });
      break;
  }

  return mockupData;
}
function getClubMockupData(dataType, dataModel, dataDate) {
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

  ["id", "resource_state", "name"].forEach(function (key, i) {
    switch (key) {
      case "id":
      case "resource_state":
      case "name":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  switch (mockupData["resource_state"]) {
    case 1:
      mockupData = {
        id: mockupData["id"],
        resource_state: mockupData["resource_state"],
        name: mockupData["name"]
      };
      break;

    case 3:
      ["profile_medium", "profile", "cover_photo", "cover_photo_small", "sport_type", "activity_types", "city", "state", "country", "private", "member_count", "featured", "verified", "url", "membership", "admin", "owner", "description", "club_type", "post_count", "club_type", "owner_id", "following_count"].forEach(function (key, i) {
        switch (key) {
          case "url":
            mockupData[key] = mockupModel[key](mockupData["name"]);
            break;

          case "activity_types":
            mockupData[key] = mockupModel[key](mockupData["sport_type"]);
            break;

          case "id":
          case "resource_state":
          case "name":
          case "profile_medium":
          case "profile":
          case "cover_photo":
          case "cover_photo_small":
          case "sport_type":
          case "city":
          case "state":
          case "country":
          case "private":
          case "member_count":
          case "featured":
          case "verified":
          case "membership":
          case "admin":
          case "owner":
          case "description":
          case "club_type":
          case "post_count":
          case "club_type":
          case "owner_id":
          case "following_count":
            mockupData[key] = mockupModel[key]();
            break;
        }
      });
      break;

    case 2:
      ["profile_medium", "profile", "cover_photo", "cover_photo_small", "sport_type", "activity_types", "city", "state", "country", "private", "member_count", "featured", "verified", "url"].forEach(function (key, i) {
        switch (key) {
          case "url":
            mockupData[key] = mockupModel[key](mockupData["name"]);
            break;

          case "activity_types":
            mockupData[key] = mockupModel[key](mockupData["sport_type"]);
            break;

          case "id":
          case "resource_state":
          case "name":
          case "profile_medium":
          case "profile":
          case "cover_photo":
          case "cover_photo_small":
          case "sport_type":
          case "city":
          case "state":
          case "country":
          case "private":
          case "member_count":
          case "featured":
          case "verified":
            mockupData[key] = mockupModel[key]();
            break;
        }
      });
      delete mockupData["membership"];
      delete mockupData["admin"];
      delete mockupData["owner"];
      delete mockupData["description"];
      delete mockupData["club_type"];
      delete mockupData["post_count"];
      delete mockupData["club_type"];
      delete mockupData["owner_id"];
      delete mockupData["following_count"];
      break;
  }

  return mockupData;
}
function getSegmentEffortMockupData(dataType, dataModel, dataDate) {
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

  ["id", "name", "activity", "athlete", "elapsed_time", "moving_time", "start_date", "start_date_local", "distance", "start_index", "end_index", "segment", "kom_rank", "pr_rank", "achievements", "athlete_segment_stats"].forEach(function (key, i) {
    switch (key) {
      case "end_index":
        mockupData[key] = mockupModel[key](mockupData["start_index"]);
        break;

      case "segment":
        ["id", "name", "activity_type", "distance", "average_grade", "maximum_grade", "elevation_high", "elevation_low", "start_latlng", "end_latlng", "climb_category", "city", "state", "country", "private", "hazardous", "starred"].forEach(function (key2, i) {
          switch (key2) {
            case "maximum_grade":
              mockupData[key][key2] = SegmentModel[key2](mockupData[key]["average_grade"]);
              break;

            default:
              mockupData[key][key2] = SegmentModel[key2]();
              break;
          }
        });
        break;

      case "id":
      case "name":
      case "activity":
      case "athlete":
      case "elapsed_time":
      case "moving_time":
      case "start_date":
      case "start_date_local":
      case "distance":
      case "start_index":
      case "kom_rank":
      case "pr_rank":
      case "achievements":
      case "athlete_segment_stats":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getUploadMockupData(dataType, dataModel, dataDate) {
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

  ["id_str", "activity_id", "external_id", "id", "error", "status"].forEach(function (key, i) {
    switch (key) {
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getActivityMockupData(dataType, dataModel, dataDate) {
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

  ["id", "resource_state", "external_id", "upload_id", "athlete", "name", "distance", "moving_time", "elapsed_time", "total_elevation_gain", "type", "start_date", "start_date_local", "utc_offset", "timezone", "start_latlng", "end_latlng", "achievement_count", "kudos_count", "comment_count", "athlete_count", "photo_count", "map", "trainer", "commute", "manual", "private", "flagged", "gear_id", "from_accepted_tag", "average_speed", "max_speed", "average_cadence", "average_temp", "average_watts", "weighted_average_watts", "kilojoules", "device_watts", "has_heartrate", "max_watts", "elev_high", "elev_low", "pr_count", "total_photo_count", "has_kudoed", "workout_type", "suffer_score", "description", "calories", "segment_efforts", "splits_metric", "laps", "gear", "partner_brand_tag", "photos", "highlighted_kudosers", "hide_from_home", "device_name", "embed_token", "segment_leaderboard_opt_out", "leaderboard_opt_out"].forEach(function (key, i) {
    switch (key) {
      case "external_id":
        mockupData[key] = mockupModel[key](mockupData["id"]);
        break;

      case "timezone":
        mockupData[key] = mockupModel[key](mockupData["utc_offset"]);
        break;

      case "segment_efforts":
        mockupData[key].forEach(function (segment_efforts) {
          ["id", "name", "activity", "athlete", "elapsed_time", "moving_time", "start_date", "start_date_local", "distance", "start_index", "end_index", "segment", "kom_rank", "pr_rank", "achievements", "athlete_segment_stats"].forEach(function (key2, i) {
            switch (key2) {
              case "end_index":
                segment_efforts[key2] = SegmentEffortsModel[key2](segment_efforts["start_index"]);
                break;

              case "segment":
                ["id", "name", "activity_type", "distance", "average_grade", "maximum_grade", "elevation_high", "elevation_low", "start_latlng", "end_latlng", "climb_category", "city", "state", "country", "private", "hazardous", "starred"].forEach(function (key3, i) {
                  switch (key3) {
                    case "maximum_grade":
                      segment_efforts[key2][key3] = SegmentModel[key3](segment_efforts[key2]["average_grade"]);
                      break;

                    default:
                      segment_efforts[key2][key3] = SegmentModel[key3]();
                      break;
                  }
                });
                break;

              default:
                segment_efforts[key2] = SegmentEffortsModel[key2]();
                break;
            }
          });
        });
        break;

      case "laps":
        mockupData[key].forEach(function (laps) {
          ["id", "resource_state", "name", "activity", "athlete", "elapsed_time", "moving_time", "start_date", "start_date_local", "distance", "start_index", "end_index", "total_elevation_gain", "average_speed", "max_speed", "average_cadence", "device_watts", "average_watts", "lap_index", "split"].forEach(function (key2, i) {
            switch (key2) {
              case "end_index":
                laps[key2] = ActivityLapsModel[key2](laps["start_index"]);
                break;

              default:
                laps[key2] = ActivityLapsModel[key2]();
                break;
            }
          });
        });
        break;

      case "gear":
        console.log(mockupData["gear"]["id"]);
        ["id", "primary", "name", "resource_state", "distance"].forEach(function (key2) {
          switch (key2) {
            case "resource_state":
              mockupData[key][key2] = 2;
              break;

            default:
              mockupData[key][key2] = EquipmentModel[key2]();
              break;
          }
        });
        break;

      case "highlighted_kudosers":
        var dupelication = getRandomInt(0, 5) - 1;

        for (var i = 0; i < dupelication; i++) {
          mockupData["highlighted_kudosers"].push(Object.assign({}, mockupData["highlighted_kudosers"][0]));
        }

        mockupData["highlighted_kudosers"] = mockupData["highlighted_kudosers"].map(function () {
          return mockupModel[key]();
        });
        break;

      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getAthleteStatsMockupData(dataType, dataModel, dataDate) {
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

  ["recent_run_totals", "all_run_totals", "recent_swim_totals", "biggest_ride_distance", "ytd_swim_totals", "all_swim_totals", "recent_ride_totals", "biggest_climb_elevation_gain", "ytd_ride_totals", "all_ride_totals", "ytd_run_totals"].forEach(function (key, i) {
    switch (key) {
      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getActivityZoneMockupData(dataType, dataModel, dataDate) {
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

  mockupData.forEach(function (zones) {
    ["score", "sensor_based", "custom_zones", "max", "distribution_buckets", "type", "points"].forEach(function (key, i) {
      switch (key) {
        default:
          zones[key] = mockupModel[key]();
          break;
      }
    });
  });
  return mockupData;
}
function getActivityCommentsMockupData(dataType, dataModel, dataDate) {
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

  var dupelication = getRandomInt(0, 5) - 1;

  for (var i = 0; i < dupelication; i++) {
    mockupData.push(Object.assign({}, mockupData[0]));
  }

  mockupData.forEach(function (comment) {
    ["id", "activity_id", "post_id", "resource_state", "text", "mentions_metadata", "created_at", "athlete"].forEach(function (key, i) {
      switch (key) {
        default:
          comment[key] = mockupModel[key]();
          break;
      }
    });
  });
  return mockupData;
}
function getSegmentsMockupData(dataType, dataModel, dataDate) {
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

  var dupelication = getRandomInt(0, 5) - 1;

  for (var i = 0; i < dupelication; i++) {
    mockupData["segments"].push(Object.assign({}, mockupData["segments"][0]));
  }

  mockupData["segments"].forEach(function (segment) {
    ["id", "resource_state", "name", "climb_category", "climb_category_desc", "avg_grade", "start_latlng", "end_latlng", "elev_difference", "distance", "points", "starred"].forEach(function (key, i) {
      switch (key) {
        case "climb_category_desc":
          segment[key] = mockupModel[key](segment["climb_category"]);
          break;

        default:
          segment[key] = mockupModel[key]();
          break;
      }
    });
  });
  return mockupData;
}
function getActivityLapMockupData(dataType, dataModel, dataDate) {
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

  var dupelication = getRandomInt(0, 5) - 1;

  for (var i = 0; i < dupelication; i++) {
    mockupData.push(Object.assign({}, mockupData[0]));
  }

  mockupData.forEach(function (lap) {
    ["id", "resource_state", "name", "activity", "athlete", "elapsed_time", "moving_time", "start_date", "start_date_local", "distance", "start_index", "end_index", "total_elevation_gain", "average_speed", "max_speed", "average_cadence", "device_watts", "average_watts", "lap_index", "split"].forEach(function (key, i) {
      switch (key) {
        default:
          lap[key] = mockupModel[key]();
          break;
      }
    });
  });
  return mockupData;
}
function getAthleteMockupData(dataType, dataModel, dataDate) {
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

  var dupelication = 0; // for (var i =0; i<dupelication;i++){
  //   mockupData.push(Object.assign( {} ,mockupData[0]) )
  // }

  ["id", "resource_state", "firstname", "lastname", "username", "city", "state", "country", "sex", "premium", "created_at", "updated_at", "badge_type_id", "profile_medium", "profile", "friend", "follower", "follower_count", "friend_count", "mutual_friend_count", "athlete_type", "date_preference", "measurement_preference", "clubs", "ftp", "weight", "bikes", "shoes"].forEach(function (key, i) {
    switch (key) {
      case "shoes":
        dupelication = getRandomInt(0, 5) - 1;

        for (var i = 0; i < dupelication; i++) {
          mockupData["shoes"].push(Object.assign({}, mockupData["shoes"][0]));
        }

        mockupData["shoes"].forEach(function (shoe) {
          ["id", "primary", "name", "resource_state", "distance"].forEach(function (key2, i) {
            switch (key2) {
              default:
                shoe[key2] = EquipmentModel[key2]();
                break;
            }
          });
        });
        break;

      case "bikes":
        dupelication = getRandomInt(0, 5) - 1;

        for (var i = 0; i < dupelication; i++) {
          mockupData["bikes"].push(Object.assign({}, mockupData["bikes"][0]));
        }

        mockupData["bikes"].forEach(function (bike) {
          ["id", "primary", "name", "resource_state", "distance"].forEach(function (key2, i) {
            switch (key2) {
              default:
                bike[key2] = EquipmentModel[key2]();
                break;
            }
          });
        });
        break;

      case "clubs":
        dupelication = getRandomInt(0, 5) - 1;

        for (var i = 0; i < dupelication; i++) {
          mockupData["clubs"].push(Object.assign({}, mockupData["clubs"][0]));
        }

        mockupData["clubs"].forEach(function (club) {
          ["id", "resource_state", "name", "profile_medium", "profile", "cover_photo", "cover_photo_small", "sport_type", "city", "state", "country", "private", "member_count", "featured", "verified", "url"].forEach(function (key2, i) {
            switch (key2) {
              case "url":
                club[key2] = ClubModel[key2](club["name"]);
                break;

              default:
                club[key2] = ClubModel[key2]();
                break;
            }
          });
        });
        break;

      case "updated_at":
        mockupData[key] = mockupModel[key](mockupData["created_at"]);
        break;

      case "profile_medium":
      case "profile":
        mockupData[key] = mockupModel[key](mockupData["id"]);
        break;

      case "username":
        mockupData[key] = mockupModel[key](mockupData["firstname"], mockupData["lastname"]);
        break;

      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getActivityStreamData(dataType, dataModel, dataDate) {
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

  mockupData.forEach(function (stream) {
    ["type", "series_type", "original_size", "data", "resolution"].forEach(function (key, i) {
      switch (key) {
        case "data":
          stream[key] = mockupModel[key](stream["type"], stream["original_size"]);
          break;

        default:
          stream[key] = mockupModel[key]();
          break;
      }
    });
  });
  return mockupData;
}
function getRouteMockupData(dataType, dataModel, dataDate) {
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
  } // for (var i =0; i<dupelication;i++){
  //   mockupData.push(Object.assign( {} ,mockupData[0]) )
  // }


  ["private", "distance", "athlete", "description", "created_at", "elevation_gain", "type", "estimated_moving_time", "segments", "starred", "updated_at", "sub_type", "id_str", "name", "id", "map", "timestamp"].forEach(function (key, i) {
    switch (key) {
      case "timestamp":
        mockupData[key] = mockupModel[key](mockupData["created_at"]);
        break;

      case "id_str":
        mockupData[key] = mockupModel[key](mockupData["id"]);
        break;

      case "updated_at":
        mockupData[key] = mockupModel[key](mockupData["created_at"]);
        break;

      case "segments":
        mockupData[key].forEach(function (segment) {
          console.log(mockupData[key]);
          ["country", "private", "distance", "average_grade", "maximum_grade", "climb_category", "city", "elevation_high", "athlete_pr_effort", "athlete_segment_stats", "start_latlng", "elevation_low", "end_latlng", "activity_type", "name", "id", "state"].forEach(function (key2, i) {
            switch (key2) {
              case "athlete_segment_stats":
                ["pr_elapsed_time", "pr_date", "effort_count", "pr_activity_id"].forEach(function (key3, i) {
                  switch (key3) {
                    default:
                      segment[key2][key3] = SummaryPRSegmentEffort[key3]();
                  }
                });
                break;

              case "athlete_pr_effort":
                ["distance", "start_date_local", "activity_id", "elapsed_time", "is_kom", "id", "start_date"].forEach(function (key3, i) {
                  switch (key3) {
                    default:
                      segment[key2][key3] = SummarySegmentEffort[key3]();
                  }
                });
                break;

              case "maximum_grade":
                segment[key2] = SegmentModel[key2](segment["average_grade"]);
                break;

              default:
                console.log(segment);
                segment[key2] = SegmentModel[key2]();
                break;
            }
          });
        });

      case "athlete":
        console.log(mockupData[key]);
        ["id", "resource_state", "firstname", "lastname", "profile_medium", "profile", "city", "state", "country", "sex", "premium", "summit", "created_at", "updated_at"].forEach(function (key2, i) {
          switch (key2) {
            case "updated_at":
              mockupData[key][key2] = AthleteModel[key2](mockupData[key]["created_at"]);
              break;

            case "profile_medium":
              mockupData[key][key2] = AthleteModel[key2](mockupData[key]["id"]);
              break;

            case "profile":
              mockupData[key][key2] = AthleteModel[key2](mockupData[key]["id"]);
              break;

            case "summit":
              mockupData[key][key2] = AthleteModel[key2](mockupData[key]["premium"]);
              break;

            default:
              console.log(mockupData[key][key2]);
              mockupData[key][key2] = AthleteModel[key2]();
              break;
          }
        });
        break;

      default:
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getActivityKudoersData(dataType, dataModel, dataDate) {
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

  var dupelication = getRandomInt(0, 5) - 1;

  for (var i = 0; i < dupelication; i++) {
    mockupData.push(Object.assign({}, mockupData[0]));
  }

  mockupData.forEach(function (user) {
    ["firstname", "lastname"].forEach(function (key, i) {
      switch (key) {
        default:
          user[key] = mockupModel[key]();
          break;
      }
    });
  });
  return mockupData;
}
function getAthleteActivitesData(dataType, dataModel, dataDate) {
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

  var dupelication = getRandomInt(0, 5) - 1;

  for (var i = 0; i < dupelication; i++) {
    mockupData.push(Object.assign({}, mockupData[0]));
  }

  mockupData.forEach(function (activity) {
    ["resource_state", "athlete", "name", "distance", "moving_time", "elapsed_time", "total_elevation_gain", "type", "workout_type", "id", "external_id", "upload_id", "start_date", "start_date_local", "utc_offset", "timezone", "start_latlng", "end_latlng", "location_city", "location_state", "location_country", "achievement_count", "kudos_count", "comment_count", "athlete_count", "photo_count", "map", "trainer", "commute", "manual", "private", "flagged", "gear_id", "from_accepted_tag", "average_speed", "max_speed", "average_cadence", "average_watts", "weighted_average_watts", "kilojoules", "device_watts", "has_heartrate", "average_heartrate", "max_heartrate", "max_watts", "pr_count", "total_photo_count", "has_kudoed", "suffer_score"].forEach(function (key, i) {
      switch (key) {
        case "external_id":
          activity[key] = mockupModel[key](activity["id"]);
          break;

        case "timezone":
          activity[key] = mockupModel[key](activity["utc_offset"]);
          break;

        default:
          activity[key] = mockupModel[key]();
          break;
      }
    });
  });
  return mockupData;
}

export { getActivityCommentsMockupData, getActivityKudoersData, getActivityLapMockupData, getActivityMockupData, getActivityStreamData, getActivityZoneMockupData, getAthleteActivitesData, getAthleteMockupData, getAthleteStatsMockupData, getClubMockupData, getEquipmentMockupData, getModelCSVHeader, getRouteMockupData, getSegmentEffortMockupData, getSegmentsMockupData, getUploadMockupData };
