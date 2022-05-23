import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/strava-data";

const ActivityModel = {
  id: ()=>{
    return getRandomInt(0,99999999999999999)
  },
  resource_state : ()=>{
    return 3
  },
  external_id: (id)=>{
    return "garmin_push_" + id
  },
  upload_id : ()=>{
    return getRandomInt(0,99999999999999999) 
  },
  athlete: ()=>{
    return {
      id : getRandomInt(0,999999),
      resource_state : 1
    }
  },
  name : ()=>{
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  distance : ()=>{
    return getRandomInt(0, 99999)
  },
  moving_time : ()=>{
    return getRandomInt(0, 99999)
  },
  elapsed_time : ()=>{
    return getRandomInt(0, 99999)
  },
  total_elevation_gain : ()=>{
    return getRandomInt(0, 99999)
  },
  type : ()=>{
    let types = [ "AlpineSki", "BackcountrySki", "Canoeing", "Crossfit", "EBikeRide", "Elliptical", "Golf", "Handcycle", "Hike", "IceSkate", "InlineSkate", "Kayaking", "Kitesurf", "NordicSki", "Ride", "RockClimbing", "RollerSki", "Rowing", "Run", "Sail", "Skateboard", "Snowboard", "Snowshoe", "Soccer", "StairStepper", "StandUpPaddling", "Surfing", "Swim", "Velomobile", "VirtualRide", "VirtualRun", "Walk", "WeightTraining", "Wheelchair", "Windsurf", "Workout", "Yoga"]
    return types[getRandomInt(0,types.length)-1]
  },
  start_date : ()=>{
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  start_date_local : ()=>{
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  timezone : (offset)=>{
    let timezones = [
      {
        zones:"(GMT-12:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-11:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-10:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-09:30)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-09:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-08:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-07:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-06:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-05:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-04:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-03:30)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-03:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-02:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT-01:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT±00:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+01:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+02:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+03:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+03:30)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+04:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+04:30)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+05:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+05:30)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+05:45)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+06:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+06:30)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+07:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+08:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+08:45)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+09:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+09:30)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+10:00)",
        areas: [
          "America/Los_Angeles",
        ]
      },
      {
        zones:"(GMT+10:30)",
        areas: [
          "Australia/Lord Howe Island",
        ]
      },
      {
        zones:"(GMT+11:00)",
        areas: [
          "Norfolk Island",
          "Vanuatu",
          "Solomon Islands",
          "Tuvalu",
          "Russia/Magadan",
          "Russia/Sakha (east)",
          "Russia/Sakhalin",
          "Papua New Guinea/Bougainville",
          "New Caledonia",
          "Micronesia/Kosrae",
          "Micronesia/Pohnpei",
        ]
      },
      {
        zones:"(GMT+12:00)",
        areas: [
          "New Zealand",
          "Fiji",
          "Kiribati/Gilbert Islands",
          "Marshall Islands",
          "Nauru",
          "Russia/Chukotka",
          "Russia/Kamchatka",
          "Tuvalu",
          "Wake Island",
          "Wallis and Futuna",
        ]
      },
      {
        zones:"(GMT+12:45)",
        areas: [
          "New Zealand/Chatham Islands",
        ]
      },
      {
        zones:"(GMT+13:00)",
        areas: [
          " Kiribati/Phoenix Islands",
          " Samoa",
          " Tokelau",
          " Tonga",
        ]
      },
      {
        zones:"(GMT+14:00)",
        areas: [
          "Kiribati/Line Islands",
        ]
      },
    ]
    let offsets = [-12,-11,-10,-9.5,-9,-8,-7,-6,-5,-4,-3.5,-3,-3,-2,-1,0,1,2,3,3.5,4,5,5.5,5.75,6,6.5,7,8,8.75,9,9.5,10,10.5,11,12,12.75]
    let check = (offset/60)/60
    let index = offsets.findIndex((a)=>{
      return a === check
    })

    let string = timezones[index].zones;
    string+= " ";
    string+= timezones[index].areas[getRandomInt(0,timezones[index].areas.length)-1]
    return string


  },
  utc_offset : ()=>{
    let offsets = [-12,-11,-10,-9.5,-9,-8,-7,-6,-5,-4,-3.5,-3,-3,-2,-1,0,1,2,3,3.5,4,5,5.5,5.75,6,6.5,7,8,8.75,9,9.5,10,10.5,11,12,12.75]
    return offsets[getRandomInt(0,offsets.length)-1]*60*60
  },
  start_latlng : ()=>{
    return [getRandomInt(-90000000000000,90000000000000)/1000000000000, getRandomInt(-180000000000000,180000000000000)/1000000000000]
  },
  end_latlng : ()=>{
    return [getRandomInt(-90000000000000,90000000000000)/1000000000000, getRandomInt(-180000000000000,180000000000000)/1000000000000]
  },
  achievement_count : ()=>{
    return getRandomInt(0,10)
  },
  kudos_count : ()=>{
    return getRandomInt(0,10)
  },
  comment_count : ()=>{
    return getRandomInt(0,10)
  },
  athlete_count : ()=>{
    return getRandomInt(0,10)
  },
  photo_count: ()=>{
    return getRandomInt(0,10)
  },
  map : ()=>{
    let id = "";
    let polyline = "";
    let resource_state = 3;
    let summary_polyline = "";
    let digits = "0123456789"
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"£$%^&*()_+¬`|\?/.,><#';~:@][}{"
    id += letters.charAt(Math.floor(Math.random() * 
    letters.length));
    for (var i =0;i<4;i++){
      id += digits.charAt(Math.floor(Math.random() * 
      digits.length));
    }
    for (var i =0;i<2601;i++){
      polyline += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    for (var i =0;i<486;i++){
      summary_polyline += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }

    return {
      id : id,
      polyline : polyline,
      resource_state : 3,
      summary_polyline : summary_polyline
    }
  },
  trainer : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  commute : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  manual : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  private : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  flagged : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  gear_id : ()=>{
    let id = "";
    let digits = "0123456789"
    let letters = "abcdefghijklmnopqrstuvwxyz"
    id += letters.charAt(Math.floor(Math.random() * 
    letters.length));
    for (var i =0;i<4;i++){
      id += digits.charAt(Math.floor(Math.random() * 
      digits.length));
    }
    return id
  },
  from_accepted_tag : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  average_speed : ()=>{
    return getRandomInt(0,9999)/1000
  },
  max_speed : ()=>{
    return getRandomInt(0,999)/10
  },
  max_heartrate:()=>{
    return getRandomInt(1100,1500)/10
  },
  average_heartrate:()=>{
    return getRandomInt(160,190)
  },
  average_cadence : ()=>{
    return getRandomInt(0,999)/10
  },
  average_temp : ()=>{
    return getRandomInt(0,9)
  },
  average_watts : ()=>{
    return getRandomInt(0,9999)/10
  },
  weighted_average_watts : ()=>{
    return getRandomInt(0,999)
  },
  kilojoules : ()=>{
    return getRandomInt(0,9999)/10
  },
  device_watts : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  has_heartrate : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  max_watts : ()=>{
    return getRandomInt(0,999)
  },
  elev_high : ()=>{
    return getRandomInt(0,9999)/10
  },
  elev_low : ()=>{
    return getRandomInt(0,999)/10
  },
  pr_count : ()=>{
    return getRandomInt(0,999)
  },
  total_photo_count : ()=>{
    return getRandomInt(0,999)
  },
  has_kudoed : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  workout_type : ()=>{
    return getRandomInt(0,999)
  },
  suffer_score: ()=>{
    return getRandomInt(0,999)
  },
  description : ()=>{
    let description = "";
    let digits = "0123456789"
    let letters = "abcdefghijklmnopqrstuvwxyz"
    for (var i =0;i<50;i++){
      description += digits.charAt(Math.floor(Math.random() * 
      digits.length));
    }
    return description
  },
  calories : ()=>{
    return getRandomInt(0,9999)/10
  },
  splits_metric : () => {
    return [ {
      distance : getRandomInt(0,10000)/10,
      elapsed_time : getRandomInt(0,500),
      elevation_difference : getRandomInt(0,100)/10,
      moving_time : getRandomInt(0,500),
      split : getRandomInt(0,10),
      average_speed : getRandomInt(0,100)/10,
      pace_zone : getRandomInt(0,100)
    } ]
  },
  partner_brand_tag :() =>{
    return null
  },
  photos :() =>{
    let unique_id = ""
    let characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for (var i =0;i<31;i++){
      unique_id += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      if (i===6||i===10||i===14||i===18){
        unique_id += "-";
      }
    }

    return {
      primary : {
        id : getRandomInt(0,999999999),
        unique_id : unique_id,
        urls : {
          100 : "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-128x96.jpg",
          600 : "https://dgtzuqphqg23d.cloudfront.net/Bv93zv5t_mr57v0wXFbY_JyvtucgmU5Ym6N9z_bKeUI-768x576.jpg"
        },
        source : getRandomInt(0,10)
      },
      use_primary_photo : true,
      count : getRandomInt(0,10)
    }
  },
  highlighted_kudosers :() =>{
    let id = getRandomInt(0,99999999999999999)
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 10)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    string += " "
    length = getRandomInt(3, 10)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    let bool = false
    switch (getRandomInt(0,2)){
      case 1:
        bool = true;
        break;
      case 2:
        bool = false;
        break;
    }
    return {
      destination_url : "strava://athletes/" + id,
      display_name : string,
      avatar_url : "https://dgalywyr863hv.cloudfront.net/pictures/athletes/"+id+"/"+id+"/3/medium.jpg",
      show_name : bool
    }
  },
  hide_from_home :() =>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  device_name :() =>{
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 10)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    string += " "
    length = getRandomInt(3, 10)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  embed_token :() =>{
    let characters = "0123456789abcdef"
    let embed_token = "";
    for (var i =0;i<40;i++){
      embed_token += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return embed_token;
  },
  segment_leaderboard_opt_out :() =>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  leaderboard_opt_out :() =>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  location_city : ()=>{
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  location_state : ()=>{
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  location_country : ()=>{
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
}

const ActivityLapsModel = {
  id : ()=>{
    return getRandomInt(0,99999999999999999)
  },
  resource_state: ()=>{
    return 2
  },
  name : ()=>{
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  activity : ()=>{
    return {
      id : getRandomInt(0,99999999999999999),
      resource_state : 1
    }
  },
  athlete : ()=>{
    return {
      id : getRandomInt(0,99999999999999999),
      resource_state : 1
    }
  },
  elapsed_time : ()=>{
    return getRandomInt(0,99999)
  },
  moving_time : ()=>{
    return getRandomInt(0,99999)
  },
  start_date : ()=>{
let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  start_date_local : ()=>{
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  distance : ()=>{
    return getRandomInt(0,999999)/100

  },
  start_index : ()=>{
    return getRandomInt(0,500)

  },
  end_index : (start_index)=>{
    return getRandomInt(start_index,999)
  },
  total_elevation_gain : ()=>{
    return getRandomInt(0,999)
  },
  average_speed : ()=>{
    return getRandomInt(0,999)/100
  },
  max_speed : ()=>{
    return getRandomInt(0,99)/10
  },
  average_cadence : ()=>{
    return getRandomInt(0,100)
  },
  device_watts : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  average_watts : ()=>{
    return getRandomInt(0,9999)/10
  },
  lap_index : ()=>{
    return getRandomInt(0,10)
  },
  split : ()=>{
    return getRandomInt(0,10)
  },
}

const AthleteModel = {
  id : ()=>{
    return getRandomInt(0,99999999999999999)
  },
  username : (firstname, lastname)=>{
    let string = ""
    string += firstname.charAt(0).toLowerCase()
    string += firstname.substring(1)
    string+= "_"
    string += lastname.charAt(0).toLowerCase()
    return string
  },
  resource_state : ()=>{
    return 3
  },
  firstname : ()=>{
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
  lastname : ()=>{
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
  city : ()=>{
    let city = ""
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(3, 15)
    city += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      city += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return city
  },
  state : ()=>{
    let state = ""
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(3, 15)
    state += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      state += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return state
  },
  country : ()=>{
    let country = ""
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(3, 15)
    country += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      country += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return country
  },
  sex : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return "M"
      case 2:
        return "F"
    }
  },
  premium : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  created_at : ()=>{
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  updated_at : (created_at)=>{
    let finalDate = new Date(0);
    console.log("created_at", created_at)
    finalDate.setFullYear(created_at.split('-')[0]);
    finalDate.setMonth(created_at.split('-')[1]-1);
    finalDate.setDate(created_at.split('T')[0].split('-')[2])
    console.log("time", created_at.split('T')[1])
    console.log("hours", created_at.split('T')[1].split(':')[0])
    console.log("minutes", created_at.split('T')[1].split(':')[1])
    console.log("seconds", created_at.split('T')[1].split(':')[2].split("Z")[0])
    finalDate.setHours(created_at.split('T')[1].split(':')[0],created_at.split('T')[1].split(':')[1],created_at.split('T')[1].split(':')[2].split("Z")[0])
    console.log("before",finalDate.getTime())
    finalDate.setTime(finalDate.getTime()+getRandomInt(1000,94672800000))
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  badge_type_id : ()=>{
    return 4
  },
  profile_medium : (id)=>{
    return "https://xxxxx.cloudfront.net/pictures/athletes/"+id+"/"+id+"/2/large.jpg"
  },
  profile : (id)=>{
    return "https://xxxxx.cloudfront.net/pictures/athletes/"+id+"/"+id+"/2/large.jpg"
  },
  friend : ()=>{
    return null
  },
  follower : ()=>{
    return null
  },
  follower_count : ()=>{
    return getRandomInt(0,30)
  },
  friend_count : ()=>{
    return getRandomInt(0,30)
  },
  mutual_friend_count : ()=>{
    return getRandomInt(0,30)
  },
  athlete_type : ()=>{
    return getRandomInt(0,30)
  },
  date_preference : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return "%m/%d/%Y"
      case 2:
        return "%d/%m/%Y"
    }
  },
  measurement_preference : ()=>{
    let measurements = ["feet", "meters"]
    return measurements[getRandomInt(0,measurements.length)-1]
  },
  clubs : ()=>{
    return getRandomInt(0,3)-1
  },
  ftp : ()=>{
    return getRandomInt(0,10)
  },
  weight : ()=>{
    return getRandomInt(0,100)/10
  },
  bikes : ()=>{
    return getRandomInt(0,3)-1
  },
  shoes : ()=>{
    return getRandomInt(0,3)-1
  },
  summit: (premium) => {
    return premium
  },
  premium: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
}

const ClubModel = {
  id : () => {
    return getRandomInt(0,99)
  },
  resource_state : () => {
    return getRandomInt(0,3)
  },
  name : () => {
    let start = ["Team", "Club", "Group"]
    let place = ["Strava", "B", "C"]
    let sport = ["Cycling","Walking","Running","Swmming","Hiking"]
    return start[getRandomInt(0, start.length)-1] + " " +place[getRandomInt(0, place.length)-1] + " " + sport[getRandomInt(0, sport.length)-1]
  },
  profile_medium : () => {
    return "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/medium.jpg"
  },
  profile : () => {
    return "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/1582/4/large.jpg"
  },
  cover_photo : () => {
    return "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/large.jpg"
  },
  cover_photo_small : () => {
    return "https://dgalywyr863hv.cloudfront.net/pictures/clubs/1/4328276/1/small.jpg"
  },
  sport_type : () => {
    let types = ["cycling","running","triathlon","other"]
    return types[getRandomInt(0, types.length)-1]
  },
  activity_types : (sport_type) => {
    let types = {
      cycling: [ "Ride", "VirtualRide", "EBikeRide", "Velomobile", "Handcycle" ],
      triathlon : ["triathlon1","triathlon2","triathlon3","triathlon4","triathlon5","triathlon6",],
      running : ["running1","running2","running3","running4","running5","running6",],
      swimming : ["swimming1","swimming2","swimming3","swimming4","swimming5","swimming6",],
      hiking : ["hiking1","hiking2","hiking3","hiking4","hiking5","hiking6",],
    }
    switch (sport_type){
      case "cycling":
        return types.cycling
      case "running":
        return types.running
      case "triathlon":
        return types.triathlon
      case "other":
        switch (getRandomInt(0,types.length)-1){
          case 0:
            return types.swimming
          case 1:
            return types.hiking
          default:
            return types.hiking
        }
    }

  },
  city : () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  state : () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  country : () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  private : () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  member_count : () => {
    return getRandomInt(0,300)

  },
  featured : () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  verified : () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  url : (name) => {
     let editedName = name.split(" ");
    for (var i =0; i< editedName.length ; i++){
      editedName[i] = editedName[i][0].toLowerCase() + editedName[i].toString().substring(1)
    }
    editedName = editedName.join("-")
    return editedName
  },
  membership : () => {
    let membership = ['member', 'pending'];
    return membership[getRandomInt(0,membership.length)-1]
  },
  admin : () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  owner : () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  description : () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  club_type : () => {
    let club_type = ['company', 'club type 2', 'club type 3'];
    return club_type[getRandomInt(0,club_type.length)-1]
  },
  post_count : () => {
    return getRandomInt(0,500)
  },
  owner_id : () => {
    return getRandomInt(0,1000)
  },
  following_count : () => {
    return getRandomInt(0,500)
  },
}

const EquipmentModel = {
  id : ()=>{
    let string = ""
    let digits = "0123456789"
    let letters = "abcdefghijklmnopqrstuvwxyz"
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length));
    for (var i =0;i<4;i++){
      string += digits.charAt(Math.floor(Math.random() * 
      digits.length));
    }
    return string;
  },
  primary : ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  resource_state : ()=>{
    return getRandomInt(1,3)
  },
  distance : ()=>{
    return getRandomInt(0,999999)
  },
  brand_name : ()=>{
    let brands = ["BMX", "BMC"]
    return brands[getRandomInt(0,brands.length)-1]
    
  },
  name : ()=>{
    let brands = ["BMX", "BMC"]
    return brands[getRandomInt(0,brands.length)-1]
    
  },
  model_name : ()=>{
    let brands = ["Teammachine", "Bike2"]
    return brands[getRandomInt(0,brands.length)-1]
  },
  frame_type : ()=>{
    return getRandomInt(0,10)
  },
  description : ()=>{
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = "";
    for (var i =0;i<12;i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string

  },
}

const SegmentEffortsModel = {
  id : () =>{
    return getRandomInt(0,1234556789)
  },
  resource_state: () => {
    return 2
  },
  name: () =>{
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  activity: () =>{
    return {
      id : getRandomInt(0,9999999),
      resource_state : 1
    }
  },
  athlete: () =>{
    return {
      id : getRandomInt(0,9999999),
      resource_state : 1
    }
  },
  elapsed_time: () =>{
    return getRandomInt(0,500)
  },
  moving_time: () =>{
    return getRandomInt(0,999)
  },
  start_date: () =>{
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  start_date_local: () =>{
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  distance: () =>{
    return getRandomInt(0,300)
  },
  start_index: () =>{
    return getRandomInt(0,100)
  },
  end_index: (start_index) =>{
    return start_index + getRandomInt(0,100)
  },
  average_cadence : ()=>{
    return getRandomInt(0,99)/10
  },
    device_watts : ()=>{
      switch (getRandomInt(0,2)){
        case 1:
          return true;
        case 2:
          return false;
      }
    },
    average_watts : ()=>{
      return getRandomInt(0,9999)/10
    },
  kom_rank: () =>{
    let x = getRandomInt(0,11)-1
    switch (x){
      case 0:
        return null;
      default:
        return  x
    }

  },
  pr_rank: () =>{
    let x = getRandomInt(0,4)-1
    switch (x){
      case 0:
        return null;
      default:
        return  x
    }
  },
  hidden: () =>{
    let x = getRandomInt(0,4)-1
    switch (x){
      case 0:
        return null;
      default:
        return  x
    }
  },
  achievements: () =>{
    return []
  },
  athlete_segment_stats: () =>{
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    let dateStr =  finalDate.getFullYear() + "-" + finalDate.getMonth() + "-" +finalDate.getDate()
    return {
      pr_elapsed_time : getRandomInt(0, 500),
      pr_date : dateStr,
      effort_count : getRandomInt(0, 500)
    }
  },
}

const SegmentModel = {
  id: () => {
    return getRandomInt(0,999999)
  },
  name: () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  activity_type: () => {
    let types = [ "AlpineSki", "BackcountrySki", "Canoeing", "Crossfit", "EBikeRide", "Elliptical", "Golf", "Handcycle", "Hike", "IceSkate", "InlineSkate", "Kayaking", "Kitesurf", "NordicSki", "Ride", "RockClimbing", "RollerSki", "Rowing", "Run", "Sail", "Skateboard", "Snowboard", "Snowshoe", "Soccer", "StairStepper", "StandUpPaddling", "Surfing", "Swim", "Velomobile", "VirtualRide", "VirtualRun", "Walk", "WeightTraining", "Wheelchair", "Windsurf", "Workout", "Yoga"]
    return types[getRandomInt(0,types.length)-1]
  },
  distance: () => {
    return getRandomInt(0,99999)/100
  },
  average_grade: () => {
    return (getRandomInt(0,150)-100)/100
  },
  maximum_grade: (average_grade) => {
    return (getRandomInt(parseFloat(average_grade)*100,200)-100)/100
  },
  elevation_high: () => {
    return getRandomInt(0,100)
  },
  elevation_low: () => {
    return getRandomInt(0,100)
  },
  start_latlng: () => {
    return [getRandomInt(-90000000000000,90000000000000)/1000000000000, getRandomInt(-180000000000000,180000000000000)/1000000000000]
  },
  end_latlng: () => {
    return [getRandomInt(-90000000000000,90000000000000)/1000000000000, getRandomInt(-180000000000000,180000000000000)/1000000000000]
  },
  climb_category: () => {
    return getRandomInt(0,6)-1
  },
  city: () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  state: () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  country: () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  private: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  hazardous: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
  starred: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },

}

const UploadModel = {
    id_str:()=>{
      let string = ""
      let letters = "abcdefghijklmnopqrstuvwxyz"
      for (var i =0;i<4;i++){
        string += letters.charAt(Math.floor(Math.random() * 
        letters.length));
      }
      return string;
    },
    activity_id:()=>{
      return getRandomInt(0,100)
    },
    external_id:()=>{
      let string = ""
      let letters = "abcdefghijklmnopqrstuvwxyz"
      for (var i =0;i<4;i++){
        string += letters.charAt(Math.floor(Math.random() * 
        letters.length));
      }
      return string;
    },
    id:()=>{
      return getRandomInt(0,100)
    },
    error:()=>{
      let string = ""
      let letters = "abcdefghijklmnopqrstuvwxyz"
      for (var i =0;i<4;i++){
        string += letters.charAt(Math.floor(Math.random() * 
        letters.length));
      }
      return string;
    },
    status:()=>{
      let string = ""
      let letters = "abcdefghijklmnopqrstuvwxyz"
      for (var i =0;i<4;i++){
        string += letters.charAt(Math.floor(Math.random() * 
        letters.length));
      }
      return string;
    },
}

const AthleteStatsModel = {
  recent_run_totals : ()=>{
    switch (getRandomInt(0,10)){
      case 1:
        return ""
      default:
        return {
          distance : getRandomInt(0,9999999)/1000000,
          achievement_count : getRandomInt(0,10),
          count : getRandomInt(0,10),
          elapsed_time : getRandomInt(0,10),
          elevation_gain : getRandomInt(0,99999999)/10000000,
          moving_time : getRandomInt(0,10)
        };
    }

  },
  all_run_totals : ()=>{
    switch (getRandomInt(0,10)){
      case 1:
        return ""
      default:
        return {
          distance : getRandomInt(0,9999999)/1000000,
          achievement_count : getRandomInt(0,10),
          count : getRandomInt(0,10),
          elapsed_time : getRandomInt(0,10),
          elevation_gain : getRandomInt(0,99999999)/10000000,
          moving_time : getRandomInt(0,10)
        };
    }
  },
  recent_swim_totals : ()=>{
    switch (getRandomInt(0,10)){
      case 1:
        return ""
      default:
        return {
          distance : getRandomInt(0,9999999)/1000000,
          achievement_count : getRandomInt(0,10),
          count : getRandomInt(0,10),
          elapsed_time : getRandomInt(0,10),
          elevation_gain : getRandomInt(0,99999999)/10000000,
          moving_time : getRandomInt(0,10)
        };
    }
  },
  biggest_ride_distance : ()=>{
    return getRandomInt(0,9999999999999999)/1000000000000000
  },
  ytd_swim_totals : ()=>{
    switch (getRandomInt(0,10)){
      case 1:
        return ""
      default:
        return {
          distance : getRandomInt(0,9999999)/1000000,
          achievement_count : getRandomInt(0,10),
          count : getRandomInt(0,10),
          elapsed_time : getRandomInt(0,10),
          elevation_gain : getRandomInt(0,99999999)/10000000,
          moving_time : getRandomInt(0,10)
        };
    }
  },
  all_swim_totals : ()=>{
    switch (getRandomInt(0,10)){
      case 1:
        return ""
      default:
        return {
          distance : getRandomInt(0,9999999)/1000000,
          achievement_count : getRandomInt(0,10),
          count : getRandomInt(0,10),
          elapsed_time : getRandomInt(0,10),
          elevation_gain : getRandomInt(0,99999999)/10000000,
          moving_time : getRandomInt(0,10)
        };
    }
  },
  recent_ride_totals : ()=>{
    return {
      distance : 5.962134,
      achievement_count : 9,
      count : 1,
      elapsed_time : 2,
      elevation_gain : 7.0614014,
      moving_time : 5
    }
  },
  biggest_climb_elevation_gain : ()=>{
    return getRandomInt(0,9999999999999999)/1000000000000000
  },
  ytd_ride_totals : ()=>{
    switch (getRandomInt(0,10)){
      case 1:
        return ""
      default:
        return {
          distance : getRandomInt(0,9999999)/1000000,
          achievement_count : getRandomInt(0,10),
          count : getRandomInt(0,10),
          elapsed_time : getRandomInt(0,10),
          elevation_gain : getRandomInt(0,99999999)/10000000,
          moving_time : getRandomInt(0,10)
        };
    }
  },
  all_ride_totals : ()=>{
    switch (getRandomInt(0,10)){
      case 1:
        return ""
      default:
        return {
          distance : getRandomInt(0,9999999)/1000000,
          achievement_count : getRandomInt(0,10),
          count : getRandomInt(0,10),
          elapsed_time : getRandomInt(0,10),
          elevation_gain : getRandomInt(0,99999999)/10000000,
          moving_time : getRandomInt(0,10)
        };
    }
  },
  ytd_run_totals : ()=>{
    switch (getRandomInt(0,10)){
      case 1:
        return ""
      default:
        return {
          distance : getRandomInt(0,9999999)/1000000,
          achievement_count : getRandomInt(0,10),
          count : getRandomInt(0,10),
          elapsed_time : getRandomInt(0,10),
          elevation_gain : getRandomInt(0,99999999)/10000000,
          moving_time : getRandomInt(0,10)
        };
    }
  },
}

const ActivityZoneModel = {
  score : () => {
    return getRandomInt(0,100)-1
  },
    sensor_based : () => {
      switch (getRandomInt(0,2)){
        case 1:
          return false
        default:
          return true
        }
    },
    custom_zones :() => {
      switch (getRandomInt(0,2)){
        case 1:
          return false
        default:
          return true
        }
    },
    max : () => {
      return getRandomInt(0,100)
    },
    distribution_buckets : () => {
      let ranges = []
      for (var i = 0;i<5;i++){
        if (i===0){
          ranges.push(getRandomInt(70,90))
        } else {
          ranges.push(ranges[i-1]+getRandomInt(5,30))
        }
      }
      switch (getRandomInt(0,10)){
        case 1:
          return ""
        default:
          return [
            {
              min: ranges[0],
              max: ranges[1],
              time: getRandomInt(0,10),
            },
            {
              min: ranges[1],
              max: ranges[2],
              time: getRandomInt(0,10),
            },
            {
              min: ranges[2],
              max: ranges[3],
              time: getRandomInt(0,10),
            },
            {
              min: ranges[3],
              max: ranges[4],
              time: getRandomInt(0,10),
            }
          ];
        }
    },
    type : () => {
      let types = ["heartrate"]
      return types[getRandomInt(0,types.length)-1]
    },
    points : () => {
      return getRandomInt(0,100)
    },
}

const ActivityCommentsModel = {
  id : () => {
    return getRandomInt(0,99999999999999999)
  },
  activity_id : () => {
    return getRandomInt(0,99999999999999999)
  },
  post_id : () => {
    return null
  },
  resource_state : () => {
    return 2
  },
  text : () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let end = ".?!"
    let string = ""
    let length = getRandomInt(3, 60)
    let spaceGap = getRandomInt(3, 10)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      if (spaceGap===0){
        string+=" "
        spaceGap = getRandomInt(3, 10)
      }
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
      spaceGap-=1
    }
    string += end.charAt(Math.floor(Math.random() * 
    end.length));
    return string
  },
  mentions_metadata : () => {
    return null
  },
  created_at : () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  athlete : () => {
    let firstName = ""
    let lastName = ""
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(3, 15)
    firstName += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    lastName += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      firstName += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return {
      firstname : firstName,
      lastname : lastName
    }
  },

}

const ExplorerReponseModel = {
  id : () =>{
    return getRandomInt(0,9999999)
  },
  resource_state : () =>{
    return 2
  },
  name : () =>{
    let string = ""
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let spaces = getRandomInt(0,4)
    let length =0
    for (var y = 0; y<spaces;y++){ 
      length = getRandomInt(3, 10)
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length)).toUpperCase();
      for (var i = 0; i<length; i++){
        string += letters.charAt(Math.floor(Math.random() * 
        letters.length));
      }
      if (y+1!==spaces){
        string += " "
      }
    }
    return string
  },
  climb_category : () =>{
    return getRandomInt(0,6)-1
  },
  climb_category_desc : (index) =>{
    let descs = ["NC","4","3","2","1","HC"];
    return descs[index]
  },
  avg_grade : () =>{
    return getRandomInt(0,100)/10
  },
  start_latlng : () =>{
    return [getRandomInt(-90000000000000,90000000000000)/1000000000000, getRandomInt(-180000000000000,180000000000000)/1000000000000]
  },
  end_latlng : () =>{
    return [getRandomInt(-90000000000000,90000000000000)/1000000000000, getRandomInt(-180000000000000,180000000000000)/1000000000000]
  },
  elev_difference : () =>{
    return getRandomInt(0,2000)/10
  },
  distance : () =>{
    return getRandomInt(0,50000)/10
  },
  points : () =>{
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!\"£$%^&*()_+¬`|\?/.,><#';~:@][}{"
    let string = ""
    for (var i = 0; i<271;i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
    

  },
  starred : () =>{
    switch (getRandomInt(0,2)){
      case 1:
        return false
      default:
        return true
      }
  },
}

const StreamModel = {
  type: () => {
    let types = ["distance", "latlng", "altitude", "velocity_smooth", "heartrate", "cadence", "watts", "temp", "moving", "grade_smooth"]
    return types[getRandomInt(0,types.length)-1]
  },
  data: (type, size) => {
    let array = [];
    let x = 0
    switch(type){
      case "distance":
        for (var i = 0; i<size;i++){
          x += (getRandomInt(0,100)/10)
          array.push(x)
        }
        break
      case "latlng":
        for (var i = 0; i<size;i++){
          array.push([getRandomInt(-90000000000000,90000000000000)/1000000000000, getRandomInt(-180000000000000,180000000000000)/1000000000000])
        }
        break  
      case "altitude":
        x = getRandomInt(80,120)
        for (var i = 0; i<size;i++){
          array.push(x+getRandomInt(-20,20))
        }
        break 
      case "velocity_smooth":
        for (var i = 0; i<size;i++){
          array.push(x+getRandomInt(-20,20))
        }
        break
      case "heartrate":
        for (var i = 0; i<size;i++){
          array.push(5)
        }
        break  
      case "cadence":
        for (var i = 0; i<size;i++){
          array.push(4)
        }
        break 
      case "watts":
        for (var i = 0; i<size;i++){
          array.push(1)
        }
        break
      case "temp":
        for (var i = 0; i<size;i++){
          array.push(3)
        }
        break  
      case "moving":
        for (var i = 0; i<size;i++){
          array.push(2)
        }
        break 
      case "grade_smooth":
        for (var i = 0; i<size;i++){
          x = x + getRandomInt(0,100)/100
          if (x>1){
            array.push(1.0)
          } else {
            array.push(x)
          }
        }
        break         
    }
    return array
  },
  series_type: () => {
    let types = ["distance","time"]
    return types[getRandomInt(0,types.length)-1]
  },
  original_size: () => {
    return getRandomInt(0,15)
  },
  resolution: () => {
    let resolution = ["low","medium","high"]
    return resolution[getRandomInt(0,resolution.length)-1]
  },

}

const RouteModel = {
  private : () => {
    switch(getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  distance : () => {
    return getRandomInt(0,99999999)/10000000
    
  },
  description : () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  created_at : () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  elevation_gain : () => {
    return getRandomInt(0,999999999)/100000000
  },
  type :() => {
    return getRandomInt(0,2)
  },
  estimated_moving_time :() => {
    return getRandomInt(0,999)
  },
  starred : () => {
    switch(getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  updated_at : (created_at) => {
    let finalDate = new Date(0);
    console.log("created_at", created_at)
    finalDate.setFullYear(created_at.split('-')[0]);
    finalDate.setMonth(created_at.split('-')[1]-1);
    finalDate.setDate(created_at.split('T')[0].split('-')[2])
    console.log("time", created_at.split('T')[1])
    console.log("hours", created_at.split('T')[1].split(':')[0])
    console.log("minutes", created_at.split('T')[1].split(':')[1])
    console.log("seconds", created_at.split('T')[1].split(':')[2].split("Z")[0])
    finalDate.setHours(created_at.split('T')[1].split(':')[0],created_at.split('T')[1].split(':')[1],created_at.split('T')[1].split(':')[2].split("Z")[0])
    console.log("before",finalDate.getTime())
    finalDate.setTime(finalDate.getTime()+getRandomInt(1000,94672800000))
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  sub_type : () => {
    return getRandomInt(0,5)
  },
  id_str : (id) => {
    return id.toString()
  },
  name : () => {
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    string += letters.charAt(Math.floor(Math.random() * 
    letters.length)).toUpperCase();
    for (var i = 0; i<length; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
    }
    return string
  },
  id : () => {
    return getRandomInt(0,99999999999999999)
  },
  map : () => {
    let array = []
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let string = ""
    let length = getRandomInt(3, 15)
    for (var y = 0; y<3;y++){
      string = ""
      length = getRandomInt(3, 15)
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length)).toUpperCase();
      for (var i = 0; i<length; i++){
        string += letters.charAt(Math.floor(Math.random() * 
        letters.length));
      }
      array.push(string)
    }
    return {
      summary_polyline : array[0],
      id : array[1],
      polyline : array[2]
    }

  },
  timestamp : (date) => {
    let finalDate = new Date(0);
    finalDate.setFullYear(date.split('-')[0]);
    finalDate.setMonth(date.split('-')[1]-1);
    finalDate.setDate(date.split('T')[0].split('-')[2])
    finalDate.setHours(date.split('T')[1].split(':')[0],date.split('T')[1].split(':')[1],date.split('T')[1].split(':')[2].split("Z")[0])
    return finalDate.getTime()
    
  },
}

const SummaryPRSegmentEffort = {
  pr_elapsed_time : () => {
    return getRandomInt(0,10)
  },
  pr_date : () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  effort_count : () => {
    return getRandomInt(0,10)
  },
  pr_activity_id :() => {
    return getRandomInt(0,99999999999999999)
  },
}

const SummarySegmentEffort = {
  id: () => {
    return getRandomInt(0,99999999999999999)
  },
  activity_id: () => {
    return getRandomInt(0,99999999999999999)
  },
  elapsed_time: () => {
    return getRandomInt(0,99999999)
  },
  start_date: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  start_date_local: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(0,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1)
    return finalDate.toISOString().split('.')[0]+"Z"
  },
  distance: () => {
    return getRandomInt(0,9999)/10
  },
  is_kom: () => {
    switch(getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false    
    }
  },

}

const dataModels = {
  Activity: {
    data: MOCK.Activity,
    mockup: ActivityModel,
  },
  Athlete: {
    data: MOCK.AuthenticatedAthlete,
    mockup: AthleteModel
  },
  ActivityComments: {
    data: MOCK.ActivityComments,
    mockup: ActivityCommentsModel,
  },
  ActivityLap: {
    data: MOCK.ActivityLaps,
    mockup: ActivityLapsModel,
  },
  ActivityStream: {
    data: MOCK.ActivityStream,
    mockup: StreamModel
  },
  ActivityZone: {
    data: MOCK.ActivityZone,
    mockup: ActivityZoneModel,
  },
  ActivityKudoers:
  {
    data: MOCK.ActivityKudoers,
    mockup: AthleteModel,
  }, 
  AthleteActivities: {
    data: MOCK.AthleteActivities,
    mockup: ActivityModel,
  },
  AthleteStats: {
    data: MOCK.AthleteStats,
    mockup: AthleteStatsModel,
  },
  AthleteClubs: {
    data: MOCK.AthleteClubs,
    mockup: ClubModel,
  },
  Club: {
    data: MOCK.Club,
    mockup: ClubModel,
  },
  Equipment: {
    data: MOCK.Equipment,
    mockup: EquipmentModel,
  },
  SegmentEfforts: {
    data: MOCK.SegmentEfforts,
    mockup: SegmentEffortsModel,
  },
  Route: {
    data: MOCK.Route,
    mockup: RouteModel
  },
  Segments: {
    data: MOCK.Segments,
    mockup: ExplorerReponseModel,
  },
  Upload: {
    data: MOCK.Upload,
    mockup: UploadModel,
  }
};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

// export function getActivityMockupData(dataType, dataModel, dataDate) {
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

export function getEquipmentMockupData(dataType, dataModel, dataDate) {
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
    "resource_state",
    "primary",
    "id",
    "distance",
  ].forEach((key, i) => {
    switch (key) {
      case "brand_name":
      case "resource_state":
      case "id":
      case "distance":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  switch(mockupData["resource_state"]){
    case 2:
      mockupData = {
        id: mockupData["id"],
        primary: mockupData["primary"],
        resource_state: mockupData["resource_state"],
        distance: mockupData["distance"],
      }
      break;
    case 3:
      [
        "brand_name",
        "model_name",
        "frame_type",
        "description",
      ].forEach((key, i) => {
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

export function getClubMockupData(dataType, dataModel, dataDate) {
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
    "resource_state",
    "name",
  ].forEach((key, i) => {
    switch (key) {
    case  "id":
    case "resource_state":
    case "name":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  switch(mockupData["resource_state"]){
    case 1:
      mockupData={
        id: mockupData["id"],
        resource_state: mockupData["resource_state"],
        name: mockupData["name"],
      }
      break;
    case 3:
      [
        "profile_medium",
        "profile",
        "cover_photo",
        "cover_photo_small",
        "sport_type",
        "activity_types",
        "city",
        "state",
        "country",
        "private",
        "member_count",
        "featured",
        "verified",
        "url",
        "membership",
        "admin",
        "owner",
        "description",
        "club_type",
        "post_count",
        "club_type",
        "owner_id",
        "following_count",
      ].forEach((key, i) => {
        switch (key) {
        case "url":
          mockupData[key] = mockupModel[key](mockupData["name"]);
          break;
        case "activity_types":
          mockupData[key] = mockupModel[key](mockupData["sport_type"]);
          break;
        case  "id":
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
      [
        "profile_medium",
        "profile",
        "cover_photo",
        "cover_photo_small",
        "sport_type",
        "activity_types",
        "city",
        "state",
        "country",
        "private",
        "member_count",
        "featured",
        "verified",
        "url",
      ].forEach((key, i) => {
        switch (key) {
        case "url":
          mockupData[key] = mockupModel[key](mockupData["name"]);
          break;
        case "activity_types":
          mockupData[key] = mockupModel[key](mockupData["sport_type"]);
          break;
        case  "id":
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
      delete mockupData["membership"]
      delete mockupData["admin"]
      delete mockupData["owner"]
      delete mockupData["description"]
      delete mockupData["club_type"]
      delete mockupData["post_count"]
      delete mockupData["club_type"]
      delete mockupData[ "owner_id"]
      delete mockupData["following_count"]
      break;
  }
  
  

  return mockupData;
}


export function getSegmentEffortMockupData(dataType, dataModel, dataDate) {
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
    "activity",
    "athlete",
    "elapsed_time",
    "moving_time",
    "start_date",
    "start_date_local",
    "distance",
    "start_index",
    "end_index",
    "segment",
    "kom_rank",
    "pr_rank",
    "achievements",
    "athlete_segment_stats",

  ].forEach((key, i) => {
    switch (key) {
      case "end_index":
        mockupData[key] = mockupModel[key](mockupData["start_index"]);
        break;
      case  "segment":
        [
          "id",
          "name",
          "activity_type",
          "distance",
          "average_grade",
          "maximum_grade",
          "elevation_high",
          "elevation_low",
          "start_latlng",
          "end_latlng",
          "climb_category",
          "city",
          "state",
          "country",
          "private",
          "hazardous",
          "starred"
        ].forEach((key2, i) => {
          switch (key2){
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

export function getUploadMockupData(dataType, dataModel, dataDate) {
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
    "id_str",
    "activity_id",
    "external_id",
    "id",
    "error",
    "status",
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
    "id",
    "resource_state",
    "external_id",
    "upload_id",
    "athlete",
    "name",
    "distance",
    "moving_time",
    "elapsed_time",
    "total_elevation_gain",
    "type",
    "start_date",
    "start_date_local",
    "utc_offset",
    "timezone",
    "start_latlng",
    "end_latlng",
    "achievement_count",
    "kudos_count",
    "comment_count",
    "athlete_count",
    "photo_count",
    "map",
    "trainer",
    "commute",
    "manual",
    "private",
    "flagged",
    "gear_id",
    "from_accepted_tag",
    "average_speed",
    "max_speed",
    "average_cadence",
    "average_temp",
    "average_watts",
    "weighted_average_watts",
    "kilojoules",
    "device_watts",
    "has_heartrate",
    "max_watts",
    "elev_high",
    "elev_low",
    "pr_count",
    "total_photo_count",
    "has_kudoed" ,
    "workout_type",
    "suffer_score",
    "description",
    "calories",
    "segment_efforts",
    "splits_metric" ,
    "laps",
    "gear",
    "partner_brand_tag" ,
    "photos",
    "highlighted_kudosers",
    "hide_from_home",
    "device_name",
    "embed_token",
    "segment_leaderboard_opt_out",
    "leaderboard_opt_out"
  ].forEach((key, i) => {
    switch (key) {
      case "external_id":
        mockupData[key] = mockupModel[key](mockupData["id"]);
        break;
      case "timezone":
        mockupData[key] = mockupModel[key](mockupData["utc_offset"]);
        break;
      case "segment_efforts":
        mockupData[key].forEach((segment_efforts)=>{
          [
            "id",
            "name",
            "activity",
            "athlete",
            "elapsed_time",
            "moving_time",
            "start_date",
            "start_date_local",
            "distance",
            "start_index",
            "end_index",
            "segment",
            "kom_rank",
            "pr_rank",
            "achievements",
            "athlete_segment_stats",
        
          ].forEach((key2, i) => {
            switch (key2){
              case "end_index":
                segment_efforts[key2] = SegmentEffortsModel[key2](segment_efforts["start_index"]);
                break;
              case "segment":
                [
                  "id",
                  "name",
                  "activity_type",
                  "distance",
                  "average_grade",
                  "maximum_grade",
                  "elevation_high",
                  "elevation_low",
                  "start_latlng",
                  "end_latlng",
                  "climb_category",
                  "city",
                  "state",
                  "country",
                  "private",
                  "hazardous",
                  "starred"
                ].forEach((key3, i) => {
                  switch (key3){
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
        })

        break;
      case "laps":
        mockupData[key].forEach((laps)=>{
          [
            "id",
            "resource_state",
            "name",
            "activity",
            "athlete",
            "elapsed_time",
            "moving_time",
            "start_date",
            "start_date_local",
            "distance",
            "start_index",
            "end_index",
            "total_elevation_gain",
            "average_speed",
            "max_speed",
            "average_cadence",
            "device_watts",
            "average_watts",
            "lap_index",
            "split",
          ].forEach((key2,i)=>{
            switch (key2){
              case "end_index":
                laps[key2] = ActivityLapsModel[key2](laps["start_index"]);
                break;
              default:
                laps[key2] = ActivityLapsModel[key2]();
                break;
            }

          })
        })
        break;
      case "gear":
        
        console.log(mockupData["gear"]["id"]);
        [
          "id",
          "primary",
          "name",
          "resource_state",
          "distance"
        ].forEach((key2)=>{
          switch(key2){
            case "resource_state":
              mockupData[key][key2] = 2;
              break
            default:
              mockupData[key][key2] = EquipmentModel[key2]();
              break;
          }

        })
        break;
      case "highlighted_kudosers":
        let dupelication = getRandomInt(0,5)-1;
        for (var i =0; i<dupelication;i++){
          mockupData["highlighted_kudosers"].push(Object.assign( {} ,mockupData["highlighted_kudosers"][0]) )
        }
        mockupData["highlighted_kudosers"] = mockupData["highlighted_kudosers"].map(()=>{
          return mockupModel[key]();
        })
        break;
      default :
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

export function getAthleteStatsMockupData(dataType, dataModel, dataDate) {
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
    
  "recent_run_totals",
  "all_run_totals",
  "recent_swim_totals",
  "biggest_ride_distance",
  "ytd_swim_totals",
  "all_swim_totals",
  "recent_ride_totals",
  "biggest_climb_elevation_gain",
  "ytd_ride_totals",
  "all_ride_totals",
  "ytd_run_totals"
  ].forEach((key, i) => {
    switch (key) {
      
      default :
        mockupData[key] = mockupModel[key]();
        break;
    }
  });

  return mockupData;
}

export function getActivityZoneMockupData(dataType, dataModel, dataDate) {
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
  mockupData.forEach((zones)=>{
    [
      "score",
      "sensor_based",
      "custom_zones",
      "max",
      "distribution_buckets",
      "type",
      "points",
      ].forEach((key, i) => {
        switch (key) {
          default :
            zones[key] = mockupModel[key]();
            break;
        }
      });
  })
  return mockupData;
}

export function getActivityCommentsMockupData(dataType, dataModel, dataDate) {
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
  let dupelication = getRandomInt(0,5)-1;
  for (var i =0; i<dupelication;i++){
    mockupData.push(Object.assign( {} ,mockupData[0]) )
  }
  mockupData.forEach((comment)=>{
    [
      "id",
      "activity_id",
      "post_id",
      "resource_state",
      "text",
      "mentions_metadata",
      "created_at",
      "athlete",
      ].forEach((key, i) => {
        switch (key) {
          default :
          comment[key] = mockupModel[key]();
            break;
        }
      });
  })
  return mockupData;
}

export function getSegmentsMockupData(dataType, dataModel, dataDate) {
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
  let dupelication = getRandomInt(0,5)-1;
  for (var i =0; i<dupelication;i++){
    mockupData["segments"].push(Object.assign( {} ,mockupData["segments"][0]) )
  }
  mockupData["segments"].forEach((segment)=>{
    [
      "id",
      "resource_state",
      "name",
      "climb_category",
      "climb_category_desc",
      "avg_grade",
      "start_latlng",
      "end_latlng",
      "elev_difference",
      "distance",
      "points",
      "starred"
      ].forEach((key, i) => {
        switch (key) {
          case "climb_category_desc":
            segment[key] = mockupModel[key](segment["climb_category"]);
            break;
          default :
            segment[key] = mockupModel[key]();
            break;
        }
      });
  })
  return mockupData;
}

export function getActivityLapMockupData(dataType, dataModel, dataDate) {
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
  let dupelication = getRandomInt(0,5)-1;
  for (var i =0; i<dupelication;i++){
    mockupData.push(Object.assign( {} ,mockupData[0]) )
  }
  mockupData.forEach((lap)=>{
    [
      "id",
      "resource_state",
      "name",
      "activity",
      "athlete",
      "elapsed_time",
      "moving_time",
      "start_date",
      "start_date_local",
      "distance",
      "start_index",
      "end_index",
      "total_elevation_gain",
      "average_speed",
      "max_speed",
      "average_cadence",
      "device_watts",
      "average_watts",
      "lap_index",
      "split",
      ].forEach((key, i) => {
        switch (key) {
          default :
            lap[key] = mockupModel[key]();
            break;
        }
      });
  })
  return mockupData;
}

export function getAthleteMockupData(dataType, dataModel, dataDate) {
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
  let dupelication = 0;
  // for (var i =0; i<dupelication;i++){
  //   mockupData.push(Object.assign( {} ,mockupData[0]) )
  // }
    [
      "id",
      "resource_state",
      "firstname",
      "lastname" ,
      "username",
      "city",
      "state",
      "country",
      "sex",
      "premium",
      "created_at",
      "updated_at",
      "badge_type_id",
      "profile_medium",
      "profile",
      "friend" ,
      "follower",
      "follower_count",
      "friend_count" ,
      "mutual_friend_count",
      "athlete_type",
      "date_preference",
      "measurement_preference",
      "clubs",
      "ftp",
      "weight",
      "bikes",
      "shoes"
      ].forEach((key, i) => {
        switch (key) {
          case "shoes":
            dupelication= getRandomInt(0,5)-1;
            for (var i =0; i<dupelication;i++){
              mockupData["shoes"].push(Object.assign( {} ,mockupData["shoes"][0]) )
            }
            mockupData["shoes"].forEach((shoe)=>{
              [
                "id",
                "primary",
                "name",
                "resource_state",
                "distance"
              ].forEach((key2, i) => {
                switch(key2) {
                  default:
                    shoe[key2]=EquipmentModel[key2]()
                    break;
                }
              })
            })
            break;
          case "bikes":
            dupelication= getRandomInt(0,5)-1;
            for (var i =0; i<dupelication;i++){
              mockupData["bikes"].push(Object.assign( {} ,mockupData["bikes"][0]) )
            }
            mockupData["bikes"].forEach((bike)=>{
              [
                "id",
                "primary",
                "name",
                "resource_state",
                "distance"
              ].forEach((key2, i) => {
                switch(key2) {
                  default:
                    bike[key2]=EquipmentModel[key2]()
                    break;
                }
              })
            })
            break;
          case "clubs":
            dupelication= getRandomInt(0,5)-1;
            for (var i =0; i<dupelication;i++){
              mockupData["clubs"].push(Object.assign( {} ,mockupData["clubs"][0]) )
            }
            mockupData["clubs"].forEach((club)=>{
              [
                "id",
                "resource_state",
                "name",
                "profile_medium",
                "profile",
                "cover_photo",
                "cover_photo_small",
                "sport_type",
                "city",
                "state",
                "country",
                "private",
                "member_count",
                "featured",
                "verified",
                "url"
              ].forEach((key2, i) => {
                switch(key2) {
                  case "url":
                    club[key2]=ClubModel[key2](club["name"])
                    break;
                  default:
                    club[key2]=ClubModel[key2]()
                    break;
                }
              })
            })
            break;
          case "updated_at":
            mockupData[key] = mockupModel[key](mockupData["created_at"]);
            break;
          case "profile_medium":
          case "profile":
            mockupData[key] = mockupModel[key](mockupData["id"]);
            break;
          case "username":
            mockupData[key] = mockupModel[key](mockupData["firstname"],mockupData["lastname"]);
            break;
          default :
            mockupData[key] = mockupModel[key]();
            break;
        }
      });
  return mockupData;
}

export function getActivityStreamData(dataType, dataModel, dataDate) {
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

  mockupData.forEach((stream)=>{
    [
      "type",
      "series_type",
      "original_size",
      "data",
      "resolution",
     ].forEach((key, i) => {
       switch (key) {
         case "data":
          stream[key] = mockupModel[key](stream["type"],stream["original_size"]);
           break;
         default :
         stream[key] = mockupModel[key]();
           break;
       }
     });
  })
  

  return mockupData;
}

export function getRouteMockupData(dataType, dataModel, dataDate) {
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
  // for (var i =0; i<dupelication;i++){
  //   mockupData.push(Object.assign( {} ,mockupData[0]) )
  // }
    [
      "private",
      "distance",
      "athlete",
      "description",
      "created_at",
      "elevation_gain",
      "type",
      "estimated_moving_time",
      "segments",
      "starred",
      "updated_at",
      "sub_type",
      "id_str",
      "name",
      "id",
      "map",
      "timestamp"
      ].forEach((key, i) => {
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
            mockupData[key].forEach((segment)=>{
              console.log(mockupData[key]);
              [
                "country" ,
                "private",
                "distance",
                "average_grade",
                "maximum_grade",
                "climb_category",
                "city",
                "elevation_high",
                "athlete_pr_effort",
                "athlete_segment_stats",
                "start_latlng",
                "elevation_low",
                "end_latlng",
                "activity_type",
                "name",
                "id",
                "state"
                ].forEach((key2, i) => {
                  switch(key2){
                    case "athlete_segment_stats":
                        [
                          "pr_elapsed_time",
                          "pr_date",
                          "effort_count",
                          "pr_activity_id"
                          ].forEach((key3, i) => {
                            switch(key3){
                              default:
                                segment[key2][key3] = SummaryPRSegmentEffort[key3]();
                            }
                          })

                      break
                    case "athlete_pr_effort":
                        [
                          "distance",
                          "start_date_local",
                          "activity_id",
                          "elapsed_time",
                          "is_kom",
                          "id",
                          "start_date",
                          ].forEach((key3, i) => {
                            switch(key3){
                              default:
                                segment[key2][key3] = SummarySegmentEffort[key3]();
                            }
                          })
                      break
                    case "maximum_grade":
                      segment[key2] = SegmentModel[key2](segment["average_grade"]);
                      break;
                    default:
                      
          console.log(segment)
                      segment[key2] = SegmentModel[key2]();
                      break;
                  }
                })
            })
          case "athlete":
            console.log(mockupData[key]);
            [
              "id",
              "resource_state",
              "firstname",
              "lastname",
              "profile_medium",
              "profile",
              "city",
              "state",
              "country",
              "sex",
              "premium",
              "summit",
              "created_at",
              "updated_at",
            ].forEach((key2, i) => {
              switch(key2){
                case "updated_at":
                  mockupData[key][key2]= AthleteModel[key2](mockupData[key]["created_at"]);
                  break
                case "profile_medium":
                  mockupData[key][key2]= AthleteModel[key2](mockupData[key]["id"]);
                  break
                case "profile":
                  mockupData[key][key2]= AthleteModel[key2](mockupData[key]["id"]);
                  break
                case "summit":
                  mockupData[key][key2]= AthleteModel[key2](mockupData[key]["premium"]);
                  break
                default:
                  console.log(mockupData[key][key2])
                  mockupData[key][key2]= AthleteModel[key2]();
                  break;
              }
            })
            break;
          default :
            mockupData[key] = mockupModel[key]();
            break;
        }
      });
  return mockupData;
}

export function getActivityKudoersData(dataType, dataModel, dataDate) {
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
  let dupelication = getRandomInt(0,5)-1
  for (var i =0; i<dupelication;i++){
    mockupData.push(Object.assign( {} ,mockupData[0]) )
  }
  mockupData.forEach((user)=>{
    [
      "firstname",
      "lastname",
      ].forEach((key, i) => {
        switch (key) {
          default :
            user[key] = mockupModel[key]();
            break;
        }
      });
  })

  return mockupData;
}

export function getAthleteActivitesData(dataType, dataModel, dataDate) {
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
  let dupelication = getRandomInt(0,5)-1
  for (var i =0; i<dupelication;i++){
    mockupData.push(Object.assign( {} ,mockupData[0]) )
  }
  mockupData.forEach((activity)=>{
    [
      "resource_state",
      "athlete",
      "name",
      "distance",
      "moving_time",
      "elapsed_time",
      "total_elevation_gain",
      "type",
      "workout_type",
      "id",
      "external_id",
      "upload_id",
      "start_date",
      "start_date_local",
      "utc_offset",
      "timezone",
      "start_latlng",
      "end_latlng",
      "location_city",
      "location_state",
      "location_country",
      "achievement_count",
      "kudos_count",
      "comment_count",
      "athlete_count",
      "photo_count",
      "map",
      "trainer",
      "commute",
      "manual",
      "private",
      "flagged",
      "gear_id",
      "from_accepted_tag",
      "average_speed",
      "max_speed",
      "average_cadence",
      "average_watts",
      "weighted_average_watts",
      "kilojoules",
      "device_watts",
      "has_heartrate",
      "average_heartrate",
      "max_heartrate",
      "max_watts",
      "pr_count",
      "total_photo_count",
      "has_kudoed",
      "suffer_score"
      ].forEach((key, i) => {
        switch (key) {
          case "external_id":
            activity[key] = mockupModel[key](activity["id"]);
            break;
          case "timezone":
            activity[key] = mockupModel[key](activity["utc_offset"]);
            break;   
          default :
            activity[key] = mockupModel[key]();
            break;
        }
      });
  })

  return mockupData;
}