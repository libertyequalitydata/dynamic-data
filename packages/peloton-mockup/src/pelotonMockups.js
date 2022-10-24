import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/peloton-data";


const RideDetailsModel = {
  availability: () => {
    return {
      "is_available": true, 
      "reason": null 
    }
  },
  class_type_ids: () => {
    let array = []
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    array.push(string)
    return array
  },
  content_provider: () => {
    return "peloton"
  },
  content_format: () => {
    return "video"
  },
  description: () => {
    return "Celebrating a diverse range of rock n’ roll, you’ll get into this popular themed ride."
  },
  difficulty_estimate: () => {
    return 8.6146
  },
  difficulty_level:() => {
    return "this is currently null"
  },
  overall_estimate: () => {
    return 0.9895
  },
  difficulty_rating_avg: () => {
    return 8.6146
  },  
  difficulty_rating_count: () => {
    return 1510
  },
  distance: () => {
    return 0
  },
  distance_display_value: () => {
    return 0
  },
  distance_unit: () => {
    return ""
  },
  duration: () => {
    return 2700
  },
  dynamic_video_recorded_speed_in_mph: () => {
    return 0
  },
  equipment_ids: () => {
    return [""]
  },
  equipment_tags: () => {
    return [""]
  },
  extra_images: () => {
    return [""]
  },
  fitness_discipline: () => {
    return "cycling"
  },
  fitness_discipline_display_name: () => {
    return "Cycling"
  },
  has_closed_captions: () => {
    return true
  },
  has_pedaling_metrics:() => {
    return true
  },
  home_peloton_id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  image_url: () => {
    return "https://s3.amazonaws.com/peloton-ride-images/c5aac521dc39e8dc315c171e3a3ab44882e1e588/img_1581021017_5cef688eb21547c9aa55b90b720829e0.png"
  },
  instructor_id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  is_archived: () => {
    return true
  },
  is_closed_caption_shown: () => {
    return true
  },
  is_dynamic_video_eligible: () => {
    return false
  },
  is_explicit: () => {
    return false
  },
  is_fixed_distance: () => {
    return false
  },
  is_ftp_test: () => {
    return false
  },
  has_free_mode: () => {
    return false
  },
  is_live_in_studio_only: () => {
    return false
  },
  language: () => {
    return "english"
  },
  origin_locale: () => {
    return "en-US"
  },
  length:() => {
    return 2885
  },
  live_stream_id: (id) => {
    return id + "-live"
  },
  live_stream_url: () => {
    return ""
  },
  location: () => {
    return "uk"
  },
  metrics: () => {
    return [
      {
        "bike": ["heart_rate", "cadence", "calories" ]
      }, {
        "tread": ["heart_rate","calories", "speed", "elevation", "distance"]
      }
    ]
  },
  original_air_time: () => {
    return 1581014940
  },
  overall_rating_avg: () => {
    return 0.9895
  },
  overall_rating_count: () => {
    return 1816
  },
  pedaling_start_offset:() => {
    return 60
  },
  pedaling_end_offset: () => {
    return 2760
  },
  pedaling_duration: () => {
    return 2700
  },
  rating:() => {
    return 0.0
  },
  ride_type_id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  ride_type_ids:() => {
    let array = []
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    array.push(string)
    return array
  },
  sample_vod_stream_url: () => {
    return "https://amd-vod.akamaized.net/vod/bike/03-2021/03062021-hannah_frankson-1200pm-drastic-1-1712d9ecaf8649cbaabf48ca12c418ab/HLS/master.m3u8"
  },
  scheduled_start_time: () => {
    return 1581015600
  },
  series_id:() => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  sold_out: () => {
    return false
  },
  studio_peloton_id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  title: () => {
    return "45 min Rock Ride"
  },
  total_ratings: () => {
    return 0
  },
  total_in_progress_workouts: () => {
    return 0
  },
  total_workouts: () => {
    return 3072
  },
  vod_stream_id: (id) => {
    return id + "-vod"
  },
  vod_stream_url: () => {
    return "https://amd-vod.akamaized.net/vod/bike/03-2021/03062021-hannah_frankson-1200pm-drastic-1-1712d9ecaf8649cbaabf48ca12c418ab/HLS/master.m3u8"
  },
  captions: () => {
    return [ "en-US" ]
  },
  excluded_platforms: () => {
    return []
  },
}

const UserSettingsModel = {
  weight_unit: ()=>{
    return ""
  },
  height_unit: ()=>{
    return ""
  },
  auto_post_workout_to_strava: ()=>{
    return false
  },
  timezone: ()=>{
    return 0
  },
  block_explicit: ()=>{
    return ""
  },
  class_language_preferences: ()=>{
    return [{
      display_all_classes: false,
      locale_name: "",
      locale: "",
      captions: [{
        locale_name: "",
        locale: "",
        enabled: false,
      }]
   
    }]
  },
  privacy: ()=>{
    return {
      is_profile_private: false,
      gender: false,
      share_music_profile: false,
      friends_can_chat_me: false,
      new_facebook_friend_email_notification: false,
      weight: false,
      new_follower_email_notification: false,
      classmates_can_chat_me: false,
      age: false,
      bmi: false,
      height: false,
      workout_maps_private: false,
    }
  },
  closed_captions: ()=>{
    return {
      language_preference: {},
      enabled: false
    }
  },
  distance_unit: ()=>{
    
  },
  auto_post_workout_to_fitbit: ()=>{

  },
}

const AchievementTemplateModel = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  name: () => {
    return "Best Output"
  },
  slug: () => {
    return "best_output"
  },
  image_url: () => {
    return "https://s3.amazonaws.com/peloton-achievement-images-prod/b39a304e90bb484698a2f245473f18a6"
  },
  description: () => {
    return "Personal best output in a workout."
  },
}

const UserProfileModel = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  image_url: () => {
    return "https://s3.amazonaws.com/peloton-profile-images/9b96196ee1c5af53a170ab588df84a2cb0cfa0bf/6d8c195ab6664031bf12314b04eebeb6"
  },
  is_profile_private: () => {
    return false
  },
  location: () => {
    return "Worthing, UK"
  },
  total_followers: () => {
    return 123
  },
  total_following: () => {
    return 219
  },
  total_workouts: () => {
    return 97
  },
  username: () => {
    return "Gregory121"
  },
  authed_user_follows: () => {
    return false
  },
  relationship: () => {
    return {
      me_to_user: "following",
      user_to_me: "none",
      }
  },
  category: () => {
    return "others"
  },
  next: () => {
    return {
      page: 1
    }
  },
  total_non_pending_followers: () => {
    return 300
  },
}

const UserDataModel = {
  block_explicit: ()=>{
    return false
  },
  created_at: ()=>{
    return 1531452705
  },
  id: ()=>{
    return "zzzzzzzzzzzzzzzz"
  },
  image_url: ()=>{
    return "https://s3.amazonaws.com/peloton-profile-images/b02556fa7be7e6c2c95e76ef723fc0ae1a6d4acc/e6c3bf90c568404a98687df0762cf2f7"
  },
  is_profile_private: ()=>{
    return false
  },
  is_provisional: ()=>{
    return false
  },
  last_workout_at: ()=>{
    return 1586686754
  },
  location: ()=>{
    return "London #PZP #PUKC"
  },
  total_followers: ()=>{
    return 300
  },
  total_following: ()=>{
    return 383
  },
  total_non_pedaling_metric_workouts: ()=>{
    return 35
  },
  total_pedaling_metric_workouts: ()=>{
    return 265
  },
  total_workouts: ()=>{
    return 300
  },
  username: ()=>{
    return "DovOps"
  },
  workout_counts: ()=>{
    let array = []
    array.push({
      name: "Bootcamp",
      slug: "circuit",
      count: 0,
      icon_url: "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/workout-count-icons/zero-circuit2.png",
    })
    return array
  },
  subscription_credits: ()=>{
    return 0
  },
  last_name: ()=>{
    return "katz"
  },
  default_max_heart_rate: ()=>{
    return 178
  },
  name: ()=>{
    return "dov katz"
  },
  height: ()=>{
    return 69
  },
  contract_agreements: ()=>{
    let array = []
    array.push({
      contract_type: "privacy_policy",
      contract_id: "aaaaaaaaaaaaaaa",
      contract_created_at: 1577458906,
      bike_contract_url: "https://s3.us-east-2.amazonaws.com/contract-terms-html/prod/en-us/privacy_1577458906.html",
      tread_contract_url: "https://s3.us-east-2.amazonaws.com/contract-terms-html/prod/en-us/privacy_1577458906.html",
      agreed_at: 1577555736,
    })
    return array
  },
  facebook_access_token: ()=>{
    return "xxxxxxxxxxxxxxxxxx"
  },
  is_complete_profile: ()=>{
    return true
  },
  email: ()=>{
    return "dov@dovkatz.net"
  },
  has_active_digital_subscription: ()=>{
    return false
  },
  customized_max_heart_rate: ()=>{
    return 0
  },
  created_country: ()=>{
    return "US"
  },
  estimated_cycling_ftp: ()=>{
    return 222
  },
  obfuscated_email: ()=>{
    return "abc123"
  },
  subscription_credits_used: ()=>{
    return 0
  },
  quick_hits: ()=>{
    return {
      quick_hits_enabled: true
    }
  },
  cycling_ftp_source: ()=>{
    return "ftp_workout_source"
  },
  cycling_ftp: ()=>{
    return 0
  },
  paired_devices: ()=>{
    let array = []
    array.push({
      name: "[TV] Samsung 9 Series (65)",
      paired_device_type: "audio",
      serial_number: "aa:bb:cc:dd:ee",
    })
    return array
  },
  v1_referrals_made: ()=>{
    return 0
  },
  total_pending_followers: ()=>{
    return 0
  },
  is_demo: ()=>{
    return false
  },
  has_active_device_subscription: ()=>{
    return true
  },
  facebook_id: ()=>{
    return "12345678910111213"
  },
  is_strava_authenticated: ()=>{
    return true
  },
  card_expires_at: ()=>{
    return 1709251200
  },
  has_signed_waiver: ()=>{
    return false
  },
  default_heart_rate_zones: ()=>{
    return [ 0, 115.7, 133.5, 151.29999999999998, 169.1 ]
  },
  can_charge: ()=>{
     return true
  },
  cycling_ftp_workout_id: ()=>{
    return "cb77bf303a2b4476bc6b39a5c1285217"
  },
  first_name:()=>{
    return "dov"
  },
  middle_initial: ()=>{
    return ""
  },
  is_fitbit_authenticated: ()=>{
    return false
  },
  weight:()=>{
    return 240
  },
  phone_number:()=>{
    return 2015551212
  },
  birthday: ()=>{
    return 1234567890
  },
  customized_heart_rate_zones: ()=>{
    return [ 0, 115.7, 133.5, 151.29999999999998, 169.1 ]
  },
  cycling_workout_ftp: ()=>{
    return 257
  },
  referrals_made: ()=>{
    return 0
  },
  gender: ()=>{
    return "male"
  },
  member_groups: ()=>{
    return {}
  },
  is_internal_beta_tester: ()=>{
    return false
  },
  is_external_beta_tester: ()=>{
    return false
  },
}

const AuthDetailsModel = {
  session_id: () => {
    return "xxxxxxxxxxxxxx"
  },
  user_id: () => {
    return "yyyyyyyyyyyyyyy"
  },
  pubsub_session: () => {
    return {}
  },
}

const FacebookUserProfileModel = {
  id: () => {
    return "79b62774ef6f4d79876c9426bddcaf7f"
  },
  image_url: () => {
    return "https://s3.amazonaws.com/peloton-profile-images/9b96196ee1c5af53a170ab588df84a2cb0cfa0bf/6d8c195ab6664031bf12314b04eebeb6"
  },
  is_profile_private: () => {
    return false
  },
  location: () => {
    return "Worthing, UK"
  },
  total_followers: () => {
    return 123
  },
  total_following: () => {
    return 219
  },
  total_workouts: () => {
    return 97
  },
  username: () => {
    return "Gregory121"
  },
  authed_user_follows: () => {
    return false
  },
  relationship: () => {
    return {
      me_to_user: "following",
      user_to_me: "none",
      }
  },
  category: () => {
    return "others"
  },
  next: () => {
    return {
      page: 1
    }
  },
  total_non_pending_followers: () => {
    return 300
  },
  facebook_name: () => {
    return ""
  }
}

const InstructorModel = {
  id: () => {
    return "79b62774ef6f4d79876c9426bddcaf7f"
  },
  image_url: () => {
    return "https://s3.amazonaws.com/peloton-profile-images/9b96196ee1c5af53a170ab588df84a2cb0cfa0bf/6d8c195ab6664031bf12314b04eebeb6"
  },
  is_profile_private: () => {
    return false
  },
  location: () => {
    return "Worthing, UK"
  },
  total_followers: () => {
    return 123
  },
  total_following: () => {
    return 219
  },
  total_workouts: () => {
    return 97
  },
  username: () => {
    return "Gregory121"
  },
  authed_user_follows: () => {
    return false
  },
  relationship: () => {
    return {
      me_to_user: "following",
      user_to_me: "none",
      }
  },
  category: () => {
    return "others"
  },
}

const RelationshipModel = {
  me_to_user: () => {
    let values = ["following","follow_pending", "none"]
    return values[getRandomInt(0,values.length-1)]
  },
  user_to_me: () => {
    let values = ["following","follow_pending", "none"]
    return values[getRandomInt(0,values.length-1)]
  },
}

const ReservationModel = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  join_token: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (var i = 0; i<82; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  peloton_id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
}

const RideFilterModel = {
  name: ()=>{
    return "is_favorite_ride"
  },
  display_name: ()=>{
    return "Bookmarked"
  },
  instructor_id: ()=>{
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  type: ()=>{
    return "toggle"
  },
  user_specific: ()=>{
    return true
  },
  values: ()=>{
    let array = []
    array.push({
      value: "true",
      display_name: "Bookmarked",
      display_image_url: "https://s3.amazonaws.com/static-cdn.pelotoncycle.com/filter-icons/bookmarked.png"
    })
    return array
  },
}

const RideSortsModel = {
  value: () => {
    return {
      sort: "original_air_time",
      desc: true
    }
  },
  peloton_id: () => {
    return "New"
  },
  slug: () => {
    return "new"
  },
}

const UserOverviewModel = {
  id: () => {

  },
  workout_counts: () => {
    let array = []
    array.push({
      name: "",
      slug: "",
      count: 0,
      icon_url: "",
      workout_name: "",
    })
    return {
      total_workouts: 0,
      workouts: array
    }
  },
  personal_records: () => {
    let array = []
    array.push({
      name: "",
      slug: "",
      value: 0,
      raw_value: 0.0,
      unit: "",
      unit_slug: "",
      workout_id: "",
      workout_date: "",
    })
    return {
      name: "",
      slug: "",
      first_workout_date: "",
      reset_date: "",
      records: array
    }
  },
  streaks: () => {
    return {
      current_weekly: 0,
      best_weekly: 0,
      start_date_of_current_weekly: 0,
    }
  },

}

const WorkoutDetailsModel = {
  created_at: () => {
    return 1586686754
  },
  device_type: () => {
    return "home_bike_v1"
  },
  end_time: () => {
    return 1586687055
  },
  effort_zones: () => {
    return {
      heart_rate_z1_duration: 0,
      heart_rate_z2_duration: 0,
      heart_rate_z3_duration: 0,
      heart_rate_z4_duration: 0,
      heart_rate_z5_duration: 0,
      total_effort_points: 35.1
    }
  },
  fitness_discipline: () => {
    return "cycling"
  },
  has_pedaling_metrics: () => {
    return true
  },
  has_leaderboard_metrics: () => {
    return true
  },
  id: () => {
    return "1960ef0e94a44d24bd5b8f8460973333"
  },
  is_total_work_personal_record: () => {
    return false
  },
  metrics_type: () => {
    return "cycling"
  },
  name: () => {
    return "Cycling Workout"
  },
  peloton_id: () => {
    return "7a77557fbaf6454e8445fcff4a415a6c"
  },
  platform: () => {
    return "home_bike"
  },
  start_time: () => {
    return 1586686756
  },
  strava_id: () => {
    return "-1"
  },
  status: () => {
    return "COMPLETE"
  },
  timezone: () => {
    return "Asia/Amman"
  },
  title: () => {
    return "currently set to null"
  },
  total_music_audio_buffer_seconds: () => {
    return 0
  },
  total_music_audio_play_seconds: () => {
    return 0
  },
  total_video_buffering_seconds: () => {
    return 0
  },
  total_video_watch_time_seconds: () => {
    return 0
  },
  total_work: () => {
    return 28373.63
  },
  user_id: () => {
    return "b3f902e4b6c54777a73b61471ebed471"
  },
  v2_total_video_buffering_seconds: () => {
    return 0
  },
  v2_total_video_watch_time_seconds: () => {
    return 0
  },
  workout_type: () => {
    return "class"
  },
  created: () => {
    return 1586686754
  },
  device_time_created_at: () => {
    return 1586697554
  },
  leaderboard_rank: () => {
    return 91
  },
  total_leaderboard_users: () => {
    return 2598
  },  
  ftp_info: () => {
    return {
      ftp: 210,
      ftp_source: "ftp_workout_source",
      ftp_workout_id: "5378797fb524417b80ff0e9d9bd3bd9a"
    }
  },
  device_type_display_name: () => {
    return "Studio"
  },
}

const dataModels = {
  RideDetails: {
    data: MOCK.RideDetails,
    mockup: RideDetailsModel
  },
  UserSettings: {
    data: MOCK.UserSettings,
    mockup: UserSettingsModel
  },
  AchievementTemplate: {
    data: MOCK.AchievementTemplate,
    mockup: AchievementTemplateModel
  },
  UserProfile: {
    data: MOCK.UserProfile,
    mockup: UserProfileModel
  },
  UserData: {
    data: MOCK.UserData,
    mockup: UserDataModel
  },
  AuthDetails: {
    data: MOCK.AuthDetails,
    mockup: AuthDetailsModel
  },
  FacebookUserProfile: {
    data: MOCK.FacebookUserProfile,
    mockup: FacebookUserProfileModel
  },
  Instructor: {
    data: MOCK.Instructor,
    mockup: InstructorModel
  },
  Relationship: {
    data: MOCK.Relationship,
    mockup: RelationshipModel
  },
  Reservation: {
    data: MOCK.Reservation,
    mockup: ReservationModel
  },
  RideFilter: {
    data: MOCK.RideFilter,
    mockup: RideFilterModel
  },
  RideSorts: {
    data: MOCK.RideSorts,
    mockup: RideSortsModel
  },
  UserOverview: {
    data: MOCK.UserOverview,
    mockup: UserOverviewModel
  },
  WorkoutDetails: {
    data: MOCK.WorkoutDetails,
    mockup: WorkoutDetailsModel
  }
};



export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getRideDetails(dataType, dataModel, dataDate) {
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
      "availability",
      "class_type_ids",
      "content_provider",
      "content_format",
      "description",
      "difficulty_estimate",
      "difficulty_level",
      "overall_estimate",
      "difficulty_rating_avg",
      "difficulty_rating_count",
      "distance",
      "distance_display_value",
      "distance_unit",
      "duration",
      "dynamic_video_recorded_speed_in_mph",
      "equipment_ids",
      "equipment_tags",
      "extra_images",
      "fitness_discipline",
      "fitness_discipline_display_name",
      "has_closed_captions",
      "has_pedaling_metrics",
      "home_peloton_id",
      "id",
      "image_url",
      "instructor_id",
      "is_archived",
      "is_closed_caption_shown",
      "is_dynamic_video_eligible",
      "is_explicit",
      "is_fixed_distance",
      "is_ftp_test",
      "has_free_mode",
      "is_live_in_studio_only",
      "language",
      "origin_locale",
      "length",
      "live_stream_id",
      "live_stream_url",
      "location",
      "metrics",
      "original_air_time",
      "overall_rating_avg",
      "overall_rating_count",
      "pedaling_start_offset",
      "pedaling_end_offset",
      "pedaling_duration",
      "rating",
      "ride_type_id",
      "ride_type_ids",
      "sample_vod_stream_url",
      "scheduled_start_time",
      "series_id",
      "sold_out",
      "studio_peloton_id",
      "title",
      "total_ratings",
      "total_in_progress_workouts",
      "total_workouts",
      "vod_stream_id",
      "vod_stream_url",
      "captions",
      "excluded_platforms"
    ].forEach((key, i) => {
      switch (key) {
        case "vod_stream_id":
          mockupData[key] = mockupModel[key](mockupData["id"]);
          break;
        case "live_stream_id":
          mockupData[key] = mockupModel[key](mockupData["id"]);
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

  return mockupData;
}

export function getUserSettings(dataType, dataModel, dataDate) {
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
      "weight_unit",
      "height_unit",
      "auto_post_workout_to_strava",
      "timezone",
      "block_explicit",
      "class_language_preferences",
      "privacy",
      "closed_captions",
      "distance_unit",
      "auto_post_workout_to_fitbit",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });


  return mockupData;
}

export function getAchievementTemplate(dataType, dataModel, dataDate) {
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
      "name",
      "slug",
      "image_url",
      "description",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });


  return mockupData;
}

export function getUserProfile(dataType, dataModel, dataDate) {
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
      "image_url",
      "is_profile_private",
      "location",
      "total_followers",
      "total_following",
      "total_workouts",
      "username",
      "authed_user_follows",
      "relationship",
      "category",
      "next",
      "total_non_pending_followers",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });


  return mockupData;
}
export function getUserData(dataType, dataModel, dataDate) {
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
      "block_explicit",
      "created_at",
      "id",
      "image_url",
      "is_profile_private",
      "is_provisional",
      "last_workout_at",
      "location",
      "total_followers",
      "total_following",
      "total_non_pedaling_metric_workouts",
      "total_pedaling_metric_workouts",
      "total_workouts",
      "username",
      "workout_counts",
      "subscription_credits",
      "last_name",
      "default_max_heart_rate",
      "name",
      "height",
      "contract_agreements",
      "facebook_access_token",
      "is_complete_profile",
      "email",
      "has_active_digital_subscription",
      "customized_max_heart_rate",
      "created_country",
      "estimated_cycling_ftp",
      "obfuscated_email",
      "subscription_credits_used",
      "quick_hits",
      "cycling_ftp_source",
      "cycling_ftp",
      "paired_devices",
      "v1_referrals_made",
      "total_pending_followers",
      "is_demo",
      "has_active_device_subscription",
      "facebook_id",
      "is_strava_authenticated",
      "card_expires_at",
      "has_signed_waiver",
      "default_heart_rate_zones",
      "can_charge",
      "cycling_ftp_workout_id",
      "first_name",
      "middle_initial",
      "is_fitbit_authenticated",
      "weight",
      "phone_number",
      "birthday",
      "customized_heart_rate_zones",
      "cycling_workout_ftp",
      "referrals_made",
      "gender",
      "member_groups",
      "is_internal_beta_tester",
      "is_external_beta_tester",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });


  return mockupData;
}

export function getAuthDetails(dataType, dataModel, dataDate) {
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
    "session_id",
    "user_id",
    "user_data",
    "pubsub_session"
  ].forEach((key, i)=>{
    switch(key){
      case "user_data":
        [
          "block_explicit",
          "created_at",
          "id",
          "image_url",
          "is_profile_private",
          "is_provisional",
          "last_workout_at",
          "location",
          "total_followers",
          "total_following",
          "total_non_pedaling_metric_workouts",
          "total_pedaling_metric_workouts",
          "total_workouts",
          "username",
          "workout_counts",
          "subscription_credits",
          "last_name",
          "default_max_heart_rate",
          "name",
          "height",
          "contract_agreements",
          "facebook_access_token",
          "is_complete_profile",
          "email",
          "has_active_digital_subscription",
          "customized_max_heart_rate",
          "created_country",
          "estimated_cycling_ftp",
          "obfuscated_email",
          "subscription_credits_used",
          "quick_hits",
          "cycling_ftp_source",
          "cycling_ftp",
          "paired_devices",
          "v1_referrals_made",
          "total_pending_followers",
          "is_demo",
          "has_active_device_subscription",
          "facebook_id",
          "is_strava_authenticated",
          "card_expires_at",
          "has_signed_waiver",
          "default_heart_rate_zones",
          "can_charge",
          "cycling_ftp_workout_id",
          "first_name",
          "middle_initial",
          "is_fitbit_authenticated",
          "weight",
          "phone_number",
          "birthday",
          "customized_heart_rate_zones",
          "cycling_workout_ftp",
          "referrals_made",
          "gender",
          "member_groups",
          "is_internal_beta_tester",
          "is_external_beta_tester",
        ].forEach((key2, i) => {
          switch (key2) {
            default:
              mockupData[key][key2] = UserDataModel[key2]();
              break;
          }
        });
        break;
      default:
        mockupData[key] = mockupModel[key]()
        break;
    }
  })


  return mockupData;
}

export function getFacebookUserProfile(dataType, dataModel, dataDate) {
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
    "image_url",
    "is_profile_private",
    "location",
    "total_followers",
    "total_following",
    "total_workouts",
    "username",
    "authed_user_follows",
    "relationship",
    "category",
    "next",
    "total_non_pending_followers",
    "facebook_name",
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData[key] = mockupModel[key]()
        break;
    }
  })


  return mockupData;
}

export function getInstructor(dataType, dataModel, dataDate) {
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
    "image_url",
    "is_profile_private",
    "location",
    "total_followers",
    "total_following",
    "total_workouts",
    "username",
    "authed_user_follows",
    "relationship",
    "category"
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData[key] = mockupModel[key]()
        break;
    }
  })


  return mockupData;
}

export function getRelationship(dataType, dataModel, dataDate) {
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
    "me_to_user",
    "user_to_me",
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData[key] = mockupModel[key]()
        break;
    }
  })


  return mockupData;
}

export function getReservation(dataType, dataModel, dataDate) {
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
    "join_token",
    "peloton_id",
    "user_id"
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData[key] = mockupModel[key]()
        break;
    }
  })


  return mockupData;
}

export function getRideFilter(dataType, dataModel, dataDate) {
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
    "display_name",
    "instructor_id",
    "type",
    "user_specific",
    "values"
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData[key] = mockupModel[key]()
        break;
    }
  })


  return mockupData;
}

export function getRideSorts(dataType, dataModel, dataDate) {
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
    "value",
    "peloton_id",
    "slug",
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData[key] = mockupModel[key]()
        break;
    }
  })


  return mockupData;
}

export function getUserOverview(dataType, dataModel, dataDate) {
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
    "workout_counts",
    "personal_records",
    "streaks",
    "achievements",
  ].forEach((key, i)=>{
    switch(key){
      case "achievements":
        mockupData[key].forEach((achievement)=>{
          [
            "id",
            "name",
            "slug",
            "image_url",
            "description",
          ].forEach((key2, i) => {
            switch (key2) {
              default:
                achievement[key2] = AchievementTemplateModel[key2]();
                break;
            }
          });
        })
        break;
      default:
        mockupData[key] = mockupModel[key]()
        break;
    }
  })


  return mockupData;
}

export function getWorkoutDetails(dataType, dataModel, dataDate) {
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
    "created_at",
    "device_type",
    "end_time",
    "effort_zones",
    "fitness_discipline",
    "has_pedaling_metrics",
    "has_leaderboard_metrics",
    "id",
    "is_total_work_personal_record",
    "metrics_type",
    "name",
    "peloton_id",
    "platform",
    "start_time",
    "strava_id",
    "status",
    "timezone",
    "title",
    "total_music_audio_buffer_seconds",
    "total_music_audio_play_seconds",
    "total_video_buffering_seconds",
    "total_video_watch_time_seconds",
    "total_work",
    "user_id",
    "v2_total_video_buffering_seconds",
    "v2_total_video_watch_time_seconds",
    "workout_type",
    "created",
    "device_time_created_at",
    "ride",
    "achievement_templates",
    "leaderboard_rank",
    "total_leaderboard_users",
    "ftp_info",
    "device_type_display_name",
  ].forEach((key, i)=>{
    switch(key){
      case "achievement_templates":
        [
          "id",
          "name",
          "slug",
          "image_url",
          "description"
        ].forEach((key2)=>{
          switch (key2){
            default:
              mockupData[key][key2] = AchievementTemplateModel[key2]()
          }
        })
        break;
      case "ride":
        [
          "availability",
          "class_type_ids",
          "content_provider",
          "content_format",
          "description",
          "difficulty_estimate",
          "difficulty_level",
          "overall_estimate",
          "difficulty_rating_avg",
          "difficulty_rating_count",
          "distance",
          "distance_display_value",
          "distance_unit",
          "duration",
          "dynamic_video_recorded_speed_in_mph",
          "equipment_ids",
          "equipment_tags",
          "extra_images",
          "fitness_discipline",
          "fitness_discipline_display_name",
          "has_closed_captions",
          "has_pedaling_metrics",
          "home_peloton_id",
          "id",
          "image_url",
          "instructor_id",
          "is_archived",
          "is_closed_caption_shown",
          "is_dynamic_video_eligible",
          "is_explicit",
          "is_fixed_distance",
          "is_ftp_test",
          "has_free_mode",
          "is_live_in_studio_only",
          "language",
          "origin_locale",
          "length",
          "live_stream_id",
          "live_stream_url",
          "location",
          "metrics",
          "original_air_time",
          "overall_rating_avg",
          "overall_rating_count",
          "pedaling_start_offset",
          "pedaling_end_offset",
          "pedaling_duration",
          "rating",
          "ride_type_id",
          "ride_type_ids",
          "sample_vod_stream_url",
          "scheduled_start_time",
          "series_id",
          "sold_out",
          "studio_peloton_id",
          "title",
          "total_ratings",
          "total_in_progress_workouts",
          "total_workouts",
          "vod_stream_id",
          "vod_stream_url",
          "captions",
          "excluded_platforms"
        ].forEach((key2, i) => {
          switch (key2) {
            case "vod_stream_id":
              mockupData[key][key2] = RideDetailsModel[key2](mockupData[key]["id"]);
              break;
            case "live_stream_id":
              mockupData[key][key2] = RideDetailsModel[key2](mockupData[key]["id"]);
              break;
            default:
              mockupData[key][key2] = RideDetailsModel[key2]();
              break;
          }
        });
        break;
      default:
        mockupData[key] = mockupModel[key]()
        break;
    }
  })


  return mockupData;
}