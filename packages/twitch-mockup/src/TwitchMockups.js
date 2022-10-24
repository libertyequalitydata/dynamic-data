import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/twitch-data";

const VideosModel = {
  id: () => {
    let id = getRandomInt(0,999999999)
    return id.toString()
  },
  stream_id: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return null
      case 2:
        let id = getRandomInt(0,999999999)
        return id.toString()
    }
  },
  user_id: () => {
    let id = getRandomInt(0,999999999)
    return id.toString()
  },
  user_login: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  title: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz "
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  description: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz !?.,|#"
    let length = getRandomInt(20,50)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  created_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString();
  },
  published_at: (created_at) => {
    let createdDate = new Date(created_at)
    let publishedDate = new Date(createdDate.getTime()+getRandomInt(1,432000))
    return publishedDate.toISOString()
  },
  url: (id) => {
    return "https://www.twitch.tv/videos/" + id
  },
  thumbnail_url: () => {
    return "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/twitchdev/335921245/ce0f3a7f-57a3-4152-bc06-0c6610189fb3/thumb/index-0000000000-%{width}x%{height}.jpg"
  },
  viewable: () => {
    let types = ["public","private"]
    return types[getRandomInt(0, types.length-1)]
  },
  view_count: () => {
    return getRandomInt(0,9999999999)
  },
  language: () => {
    let languages = ["en", "id", "ca", "da", "de", "es", "fr", "it", "hu", "nl", "no","pl", "pt", "ro", "sk", "fi", "sv", "tl", "vi", "tr", "cs", "el", "bg", "ru", "uk", "ar", "ms", "hi", "th", "zh", "ja", "zh-hk", "ko", "asl", "other"]
    return languages[getRandomInt(0, languages.length-1)]
  },
  type: () => {
    let types = ["upload", "archive", "highlight"]
    return types[getRandomInt(0,types.length-1)]
  },
  duration: () => {
    let time = getRandomInt(0,36000)
    let string = ""
    if (time / 3600 > 1){
      string += Math.floor(time / 3600) + "h"
    }
    if ((time % 3600)/60 > 1){
      string += Math.floor((time % 3600)/60) + "m"
    }
    if ((time % 3600)%60 > 1){
      string += Math.floor((time % 3600)%60) + "s"
    } 
    return string
  },
  muted_segments: (duration) => {
    let array = []
    let finalReturn =[]
    let numOfSegments = getRandomInt(0,6)-1
    let durationInSeconds = 0;

    let durationLeftover = duration
    if (durationLeftover.includes("h")){
      durationInSeconds += (parseInt(duration.split("h")[0]) * 60 * 60)
      durationLeftover = durationLeftover.split("h")[1]
    } 
    if (durationLeftover.includes("m")){
      durationInSeconds += (parseInt(duration.split("m")[0]) * 60)
      durationLeftover = durationLeftover.split("m")[1]
    } 
    if (durationLeftover.includes("s")){
      durationInSeconds += parseInt(duration.split("s")[0])
      durationLeftover = durationLeftover.split("s")[1]
    }
    for (let i = 0; i<numOfSegments;){
      var random = getRandomInt(0,durationInSeconds)-1
      if (!array.includes(random)){
        array.push(random)
        i++
      }
    }
    array.sort(function(a, b){return a - b})
    for (let i = 0; i<array.length;i++){
      let durationSeg = 0
      if (i===array.length-1){
          if (array[i]+durationSeg+300>durationInSeconds){
            durationSeg = getRandomInt(0,durationInSeconds-array[i])
          } else {
            durationSeg = getRandomInt(0,300)
          }
      } else {
        durationSeg = getRandomInt(0,300)
        if (array[i] + durationSeg > array[i+1]) {
          durationSeg = getRandomInt(0,array[i+1] - array[i])        
        }
      }
      finalReturn.push({
        duration: durationSeg,
        offset: array[i]
      })
    }
    return finalReturn

  },
}

const UserSubscriptionModel = {
  broadcaster_id: () => {
    let id = getRandomInt(0,999999999)
    return id.toString()
  },
  broadcaster_name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_login: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_login: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  is_gift: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  tier: () => {
    return (getRandomInt(0,3)*1000).toString()
  },
  gifter_login: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  gifter_name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
}

const UsersFollowsModel = {
  from_id: () => {
    let id = getRandomInt(0,999999999)
    return id.toString()
  },
  from_login: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  from_name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  to_id: () => {
    let id = getRandomInt(0,999999999)
    return id.toString()
  },
  to_name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  to_login: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  followed_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1,getRandomInt(0,1000)-1)
    return finalDate.toISOString();
  },
}
const UsersModel = {
  id: ()=>{
    let id = getRandomInt(0,999999999)
    return id.toString()
  },
  login: ()=>{
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  display_name: ()=>{
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  type: ()=>{
    let types = ["staff", "admin", "global_mod", ""]
    return types[getRandomInt(0,types.length-1)]
  },
  broadcaster_type: ()=>{
    let types = ["partner", "affiliate", ""]
    return types[getRandomInt(0,types.length-1)]
  },
  description: ()=>{
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  profile_image_url: ()=>{
    return "https://static-cdn.jtvnw.net/jtv_user_pictures/8a6381c7-d0c0-4576-b179-38bd5ce1d6af-profile_image-300x300.png"
  },
  offline_image_url: ()=>{
    return "https://static-cdn.jtvnw.net/jtv_user_pictures/3f13ab61-ec78-4fe6-8481-8682cb3b0ac2-channel_offline_image-1920x1080.png"
  },
  view_count: ()=>{
    return getRandomInt(0,99999999)
  },
  email: ()=>{
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
  created_at: ()=>{
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1,getRandomInt(0,1000)-1)
    return finalDate.toISOString();
  },
}

const ExtensionModel = {
  id: ()=>{
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i<30; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  version: ()=>{
    return (getRandomInt(0,12)-1).toString() + "." + (getRandomInt(0,12)-1).toString() + "." + (getRandomInt(0,12)-1).toString()
  },
  name: ()=>{
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  can_activate: ()=>{
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false 
    }
  },
  type: ()=>{
    let types = ["panel", "overlay", "mobile", "component"]
    let amount = getRandomInt(0,types.length)
    let final = []
    for (var i = 0; i<amount;){
      let random = getRandomInt(0,types.length-1)
      if (!final.includes(types[random])){
        final.push(types[random])
        i++
      }
    }
    return final
  },
}

const UserBlockListModel = {
  user_id: () => {
    let id = getRandomInt(0,999999999)
    return id.toString()
  },
  user_login: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  display_name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
}

const UserActiveExtensionsModel = {
  active: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  id: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i<30; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  version: () => {
    return (getRandomInt(0,12)-1).toString() + "." + (getRandomInt(0,12)-1).toString() + "." + (getRandomInt(0,12)-1).toString()
  },
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  }
}

const TopGamesModel  = {
  id: () => {
    let id = getRandomInt(0,999999999)
    return id.toString()
  },
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  box_art_url: () => {
    return "https://static-cdn.jtvnw.net/ttv-boxart/PLAYERUNKNOWN%27S%20BATTLEGROUNDS-{width}x{height}.jpg"
  },
}

const TeamsModel = {
  user_id: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_login: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  background_image_url: () => {
    return "https://static-cdn.jtvnw.net/jtv_user_pictures/team-livecoders-team_logo_image-bf1d9a87ca81432687de60e24ad9593d-600x600.png"
  },
  banner: () => {
    return "https://static-cdn.jtvnw.net/jtv_user_pictures/team-livecoders-team_logo_image-bf1d9a87ca81432687de60e24ad9593d-600x600.png"
  },
  created_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,12)-1);
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1,getRandomInt(0,1000)-1)
    return finalDate.toISOString();
  },
  updated_at: (created_at) => {
    let createdAt = new Date (created_at)
    createdAt.setTime(createdAt.getTime() + getRandomInt(0,630720000))
    return createdAt.toISOString()
  },
  info: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  thumbnail_url: () => {
    return "https://static-cdn.jtvnw.net/jtv_user_pictures/team-livecoders-team_logo_image-bf1d9a87ca81432687de60e24ad9593d-600x600.png"
  },
  team_name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  team_display_name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  id: () => {
    let id = getRandomInt(0,999999999)
    return id.toString()
  },
}

const StreamsMarkersModel = {
  user_id : () => {
    let id = getRandomInt(0,999999999)
    return id.toString()
  },
  user_name : () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_login : () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  video_id : () => {
    let id = getRandomInt(0,999999999)
    return id.toString()
  },
  id : () => {
    let id = getRandomInt(0,999999999)
    return id.toString()
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
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,24)-1,getRandomInt(0,60)-1,getRandomInt(0,60)-1,getRandomInt(0,1000)-1)
    return finalDate.toISOString();
  },
  description : () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  position_seconds : () => {
    return getRandomInt(0,32400)
  },
  URL : (video_id, position_seconds) => {
    let stringTime = ""
    stringTime += Math.floor(position_seconds/3600)+"h"
    stringTime += Math.floor((position_seconds-(Math.floor(position_seconds/3600)*3600))/60)+"m"
    stringTime += Math.floor(position_seconds%60)+"s"
    return "https://twitch.tv/videos/"+video_id+"?t=" + stringTime
  },
}

const StreamsModel = {
  id: ()=>{
    return getRandomInt(0,99999999999).toString()
  },
  user_id: ()=>{
    return getRandomInt(0,99999999999).toString()
  },
  user_login: ()=>{
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_name: ()=>{
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  game_id: ()=>{
    return getRandomInt(0,99999999999).toString()
  },
  game_name: ()=>{
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  type: ()=>{
    switch (getRandomInt(0,10)){
      case 1:
        return ""
      default:
        return "live"
    }
  },
  title: ()=>{
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  viewer_count: ()=>{
    return getRandomInt(0,9999999)
  },
  started_at: ()=>{
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString();
  },
  language: ()=>{
    let languages = ["en", "id", "ca", "da", "de", "es", "fr", "it", "hu", "nl", "no","pl", "pt", "ro", "sk", "fi", "sv", "tl", "vi", "tr", "cs", "el", "bg", "ru", "uk", "ar", "ms", "hi", "th", "zh", "ja", "zh-hk", "ko", "asl", "other"]
    return languages[getRandomInt(0, languages.length-1)]
  },
  thumbnail_url: ()=>{
    return "https://static-cdn.jtvnw.net/previews-ttv/live_user_amar-{width}x{height}.jpg"
  },
  tag_ids: ()=>{
    let array = []
    let numOfTags = getRandomInt(0,5)-1
    for (var i=0; i<numOfTags;i++){
      let string = ""
      let characters = "0123456789abcdef"
      for (var i = 0; i<32; i++){
        string += characters.charAt(Math.floor(Math.random() * 
        characters.length));
        switch (i){
          case 7:
          case 11:
          case 15:
          case 19:
            string+="-"
        }
      }
      array.push(string)
    }
  },
  is_mature: ()=>{
    switch (getRandomInt(0,2)){
      case 1:
        return true;
      case 2:
        return false;
    }
  },
}

const StreamKeyModel = {
  stream_key: () => {
    let string = "live_"
    string += getRandomInt(9999999,99999999)
    string += "_"
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i<16; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  }
}

const SoundtrackPlaylistModel = {
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  id: () => {
    let string = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for (var i = 0; i<10; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  image_url: () => {
    return "https://m.media-amazon.com/images/I/517kGzeaRhL.jpg"
  },
  description: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
}

const SoundtrackArtistModel = {
  id: () => {
    let string = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for (var i = 0; i<10; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  creator_channel_id: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return getRandomInt(0,999999999).toString()
      case 2:
        return ""
    }
  },
}

const SoundtrackAlbumModel = {
  id: () => {
    let string = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for (var i = 0; i<10; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  name: (title) => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    if (title.includes("[Explicit]")){
      string += " [Explicit]"
    }
    return string
  },
  image_url: () => {
    return "https://m.media-amazon.com/images/I/316SDaD-XQL.jpg"
  },
}

const SoundtrackTrackModel = {
  id: () => {
    let string = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for (var i = 0; i<10; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  isrc: () => {
    let string = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for (var i = 0; i<10; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  duration: () => {
    return getRandomInt(30,600)
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    switch(getRandomInt(1,2)){
      case 1:
        string += " [Explicit]"
    }
    return string
  },
}

const SoundtrackTrackSourceModel = {
  id: () => {
    let string = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    for (var i = 0; i<10; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  content_type: () => {
    let types = ["PLAYLIST", "STATION"]
    return types[getRandomInt(0,types.length-1)]
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  image_url: () => {
    return "https://m.media-amazon.com/images/I/419WuvMXzEL.jpg"
  },
  soundtrack_url: () => {
    return "https://soundtrack.twitch.tv/playlist?playlistID=B08HCW84SF"
  },
  spotify_url: () => {
    return "https://open.spotify.com/playlist/1LOP14236oTUscowY3NvYN"
  },
}

const ReleasedExtensionsModel = {
  author_name : () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  bits_enabled : () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  can_install : () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  configuration_location : () => {
    let locations = ["hosted"]
    return locations[getRandomInt(0,locations.length-1)]
  },
  description : () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  eula_tos_url : () => {
    return ""
  },
  has_chat_support : () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  icon_url : () => {
    return "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/logob6c995d8-8b45-48cc-a748-b256e92ac1cd"
  },
  icon_urls : () => {
    return {
      "24x24": "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/logob6c995d8-8b45-48cc-a748-b256e92ac1cd",
      "100x100": "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/logob6c995d8-8b45-48cc-a748-b256e92ac1cd",
      "300x200": "https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/logob6c995d8-8b45-48cc-a748-b256e92ac1cd",
    }
  },
  id : () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  name : () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  privacy_policy_url : () => {
    return ""
  },
  request_identity_link : () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  screenshot_urls : () => {
    let array  =[]
    let numOfUrls = getRandomInt(0,5)-1
    for (var i = 0; i< numOfUrls; i++){
      array.push("https://extensions-discovery-images.twitch.tv/pgn0bjv51epi7eaekt53tovjnc82qo/0.0.8/screenshotbdec475d-3d2f-4378-b334-941dfddc897a")
    }
    return array
  },
  state : () => {
    let types = ["InTest", "InReview", "Rejected", "Approved", "Released", "Deprecated", "PendingAction", "AssetsUploaded", "Deleted"]
    return types[getRandomInt(0,types.length-1)]
  },
  subscriptions_support_level : () => {
    let levels = ["optional"]
    return levels[getRandomInt(0, levels.length-1)]
  },
  summary : () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  support_email : () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz123456789"
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,20)
    let domain = getRandomInt(5,10)
    let endings = [".com", ".co.uk"]
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    string+="@"
    for (var i = 0; i<domain; i++){
      string += alphabet.charAt(Math.floor(Math.random() * 
      alphabet.length));
    }
    string+=endings[getRandomInt(0,endings.length-1)]

    return string
  },
  version : () => {
    return (getRandomInt(0,12)-1).toString() + "." + (getRandomInt(0,12)-1).toString() + "." + (getRandomInt(0,12)-1).toString()
  },
  viewer_summary : () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  views : () => {
    return {}
  },
  allowlisted_config_urls : () => {
    return []
  },
  allowlisted_panel_urls : () => {
    return []
  },
}

const PredictionsModel = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
  },
  broadcaster_id: () => {
    return getRandomInt(0,99999999).toString()
  },
  broadcaster_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,45)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  winning_outcome_id: (status) => {
    switch(status){
      case "RESOLVED":
        let string = ""
        let characters = "0123456789abcdef"
        for (var i = 0; i<32; i++){
          string += characters.charAt(Math.floor(Math.random() * 
          characters.length));
          switch (i){
            case 7:
            case 11:
            case 15:
            case 19:
              string+="-"
          }
        }
        return string
      default:
        return null
    }
  },
  prediction_window: () => {
    return getRandomInt(0,99999)
  },
  status: () => {
    let status = ["RESOLVED","ACTIVE","CANCELED","LOCKED"]
    return status[getRandomInt(0,status.length-1)]
  },
  created_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString();
  },
  ended_at: (status, created_at) => {
    switch(status){
      case "ACTIVE":
        return null
      default:
        let lockedAt = new Date(created_at)
        lockedAt.setTime(lockedAt.getTime() + getRandomInt(0,3600))
        return lockedAt.toISOString()
    }
  },
  locked_at: (status, created_at) => {
    switch(status){
      case "LOCKED":
        let lockedAt = new Date(created_at)
        lockedAt.setTime(lockedAt.getTime() + getRandomInt(0,3600))
        return lockedAt.toISOString()
      default:
        return null
    }
  },
 
}

const PredictionsOutcomeModel = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  users: () => {
    return getRandomInt(0, 99999)
  },
  channel_points: () => {
    return getRandomInt(0,999999999)
  },
  color: (number, i) => {
    switch (number) {
      case 2:
        switch (i) {
          case 0:
            return "BLUE"
          case 1:
            return "PINK"
        }
      default:
        return "BLUE"
    }
  },
}

const TopPredictorModel = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  login: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  channel_points_used: (used) => {
    return used
  },
  channel_points_won: (status, won) => {
    switch(status){
      case "RESOLVED":
        return won
      default:
        return null
    }
    

  }
  
}

const PollModel = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
  },
  broadcaster_id: () => {
    return getRandomInt(0,99999999).toString() 
  },
  broadcaster_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  bits_voting_enabled: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  bits_per_vote: (bits_enabled) => {
    switch (bits_enabled){
      case false:
        return 0
      case true:
        return getRandomInt(0,9999999)
    }
  },
  channel_points_voting_enabled: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  channel_points_per_vote: (points_enabled) => {
    switch (points_enabled){
      case false:
        return 0
      case true:
        return getRandomInt(0,9999999)
    }
  },
  status: () => {
    let statuses = ["ACTIVE","COMPLETED","TERMINATED","ARCHIVED","MODERATED","INVALID"]
    return statuses[getRandomInt(0, statuses.length-1)]
  },
  duration: () => {
    return getRandomInt(0,99999999)
  },
  started_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString();
  },
}

const PollChoiceModel  = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  votes: (channel_points_votes, bits_votes) => {
    return channel_points_votes + bits_votes + getRandomInt(0,99999)
  },
  channel_points_votes: (channel_points_voting_enabled) => {
    switch (channel_points_voting_enabled){
      case true:
        return getRandomInt(0,100)
      case false:
        return 0 
    }
  },
  bits_votes: (bits_voting_enabled) => {
    switch (bits_voting_enabled){
      case true:
        return getRandomInt(0,100)
      case false:
        return 0 
    }
  },
}

const ModeratorsModel = {
  user_id: () => {
    return getRandomInt(0,99999999).toString()
  },
  user_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
}

const HypeTrainEventsModel = {
  id: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let length = 27
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  event_type: () => {
    let types = ["progression"]
    let string = "hypetrain."
    return string + types[getRandomInt(0,types.length-1)]
  },
  event_timestamp: (started_at) => {
    let event_timestamp = new Date(started_at)
    event_timestamp.setTime(event_timestamp.getTime()+getRandomInt(0,9999))
    return event_timestamp.toISOString()
  },
  version: ()=>{
    return (getRandomInt(0,12)-1).toString() + "." + (getRandomInt(0,12)-1).toString() + "." + (getRandomInt(0,12)-1).toString()
  },
}

const HypeTrainEventDataModel = {
  broadcaster_id: () => {
    return getRandomInt(0, 999999999).toString()
  },
  cooldown_end_time: (expires_at) => {
    let cooldown_end_time = new Date(expires_at)
    cooldown_end_time.setTime(cooldown_end_time.getTime()+getRandomInt(0,9999))
    return cooldown_end_time.toISOString()
  },
  expires_at: (started_at) => {
    let expires_at = new Date(started_at)
    expires_at.setTime(expires_at.getTime()+getRandomInt(0,9999))
    return expires_at.toISOString()
  },
  goal: () => {
    return getRandomInt(0,999999)
  },
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
  },
  level: () => {
    return getRandomInt(0,5)
  },
  started_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString();
  },
  total: () => {
    return getRandomInt(0,999999)
  },
}

const HypeTrainEventContributionModel = {
  total: (type) => {
    switch(type){
      case "BITS":
        return getRandomInt(0,99999)
      case "SUBS":
        let subTotal = [500,1000,2500]
        switch (getRandomInt(0,3)){
          case 1:
            return subTotal[getRandomInt(0,subTotal.length-1)]
          case 2:
            let num1 = subTotal[getRandomInt(0,subTotal.length-1)]
            let num2 = num1
            do {
              num2 = subTotal[getRandomInt(0,subTotal.length-1)]
            } while (num2 === num1)
            return num1 + num2
          case 3:
            return 4000
        }
        
    }
  },
  type: () => {
    let types = ["BITS", "SUBS"]
    return types[getRandomInt(0,types.length-1)]
  },
  user: () => {
    return getRandomInt(0,999999999).toString()
  },
}

const GlobalEmotesModel = {
  id: () => {
    return getRandomInt(0,999999).toString()
  },
  name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  format: () => {
    let formats = ["static", "animated"]
    switch(getRandomInt(1,2)){
      case 1:
        return [formats[getRandomInt(0,formats.length-1)]]
      case 2:
        return formats
    }
  },
  images: (scales, id) => {
    let obj = {}
    if (scales.includes("1.0")){
      obj["url_1x"]="https://static-cdn.jtvnw.net/emoticons/v2/"+id+"/static/light/1.0"
    }
    if (scales.includes("2.0")){
      obj["url_2x"]="https://static-cdn.jtvnw.net/emoticons/v2/"+id+"/static/light/2.0"
    }
    if (scales.includes("3.0")){
      obj["url_4x"]="https://static-cdn.jtvnw.net/emoticons/v2/"+id+"/static/light/3.0"
    }
    return obj

  },
  scale: () => {
    let scales = ["1.0", "2.0", "3.0"]
    let array = []
    switch(getRandomInt(1,3)){
      case 1:
        return [scales[getRandomInt(0,scales.length-1)]]
      case 2:
        array.push(scales[getRandomInt(0,scales.length-1)])
        let newScale;
        do {
          newScale = scales[getRandomInt(0,scales.length-1)]
        } while (array.includes(newScale))
        array.push(newScale)
        return array
      case 3:
        return scales
    }
  },
  theme_mode: () => {
    let themes = ["light", "dark"]
    switch(getRandomInt(1,2)){
      case 1:
        return [themes[getRandomInt(0,themes.length-1)]]
      case 2:
        return themes
    }
  },
}

const GlobalChatBadgesModel = {
  set_id: () => {
    const sets = ["vip"]
    return sets[getRandomInt(0,sets.length-1)]
  },
  id: () => {
    return getRandomInt(0,9999999999).toString()
  },
  image_url_1x: () => {
    return "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/1"
  },
  image_url_2x: () => {
    return "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/2"
  },
  image_url_4x: () => {
    return "https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3"
  },
}

const GamesModel = {
  box_art_url: (name) => {
    return "https://static-cdn.jtvnw.net/ttv-boxart/"+name+"-52x72.jpg"
  },
  id: () => {
    return getRandomInt(0,9999999999).toString()
  },
  name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
}

const AnalyticsModel = {
  game_id: () => {
    return getRandomInt(0,9999999999).toString()
  },
  extension_id: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(5,10)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  URL: () => {
    return "https://twitch-piper-reports.s3-us-west-2.amazonaws.com/games/9821/overview/1526428800000.csv?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIAJQ4MLJCNPIYDOZ4Q%2F20180517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20180517T231129Z&X-Amz-Expires=60&X-Amz-Security-Token=FQoDYXdzEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaDD0JCM06UswayN4iVyK3AzIiwI0Qf4KRs2yk9nCiocQOwmMWa7FPJnJEd%2FIxljnmZy%2BphQEEWN3%2Bt8k06wZysfPHvW71zcrIeclv11kNtXaYojC%2FHVKJWO8EnicIQE73kokr16fkf1Q4eglQBuu56jJQoTsEn2UkgZff9XHx69LyFvLYf33ue10CjeJE1bY65%2B6LtcPKciJK%2FNRS1TyUsz%2FiQjyxMEUpAKm39HxNtNKFM5xehjAoWC1KfJc52XVQGFO%2Fm2EQiJj6RoifNkiIQKb4m7nGr86zvIQKDQcxcpVbiGNEcC8UugZgCnuspSPjuJLARb%2BNT%2FjLKopd2%2FUKDlIY%2BAoyEk%2B%2FGIWL5TgvjjmT5uaJ5AcnTm4b7DlV%2FkmDsYHFQez0Mu4%2BwoujZEqR0K%2BtDSyAvva2nUUGabZuDeaaiQD4JfrokXC5GWtninHQCAoPiC4q%2FMYkHS82wxPjJp0l4cStwzEDQ5LJ4cehKm4tCoY1m1whWIJsNuyfLtIUH2rBTuF9D5DFmsmpXiKc4LE9saQgSlLwNBEGASqAbRuy7Tc2ZlcIp1lBllioxhoYL3XcjaXOX3qluWGMwgXdV2Odq0L03MkoxuL31wU%3D&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3Bfilename%3D%22Heroes%20of%20Might%20and%20Magic%20IV-overview_v1-2018-05-16.csv%22&X-Amz-Signature=47af9a041970244b51fa6dd6a31d78ae9ff56a4db76a54d3e1b8a7ec4631defa"
  },
  type: () => {
    const types = ["overview_v2"]
    return types[getRandomInt(0,types.length-1)]
  },
  started_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString();
  },
  ended_at: (started_at) => {
    let startedAt = new Date(started_at)
    startedAt.setTime(startedAt.getTime()+getRandomInt(0,4320000000))
    return startedAt.toISOString()
  },
}

const ExtensionTransactionsModel = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
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
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString();
  },
  broadcaster_id: () => {
    return getRandomInt(0,99999999).toString()
  },
  broadcaster_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_id: () => {
    return getRandomInt(0,99999999).toString()
  },
  user_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  product_type: () => {
    return "BITS_IN_EXTENSION"
  },
  domain: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return "twitch.ext." + string
  },
  sku: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  amount: () => {
    return getRandomInt(100,5000)
  },
  type: () => {
    return "bits"
  },
  inDevelopment: () => {
    switch(getRandomInt(1,2)){
      case 1:
         return true
      case 2:
        return false
    }  
  },
  displayName: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  expiration: () => {
    return ""
  },
  broadcast: () => {
    switch(getRandomInt(1,2)){
      case 1:
         return true
      case 2:
        return false
    }
  },
}

const ExtensionLiveChannelsModel = {
  broadcaster_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  broadcaster_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  game_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  game_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
}

const EmoteSetsModel =  {
  id: () => {
    return getRandomInt(0,999999999).toString()
  },
  name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  images: () => {
    return  {
      "url_1x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/1.0",
      "url_2x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/2.0",
      "url_4x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/3.0"
    }
  },
  emote_type: () => {
    let types = ["bitstier","follower","subscriptions"]
    return types[getRandomInt(0,types.length-1)]
  },
  emote_set_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  owner_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  format: () => {
    let formats = ["static", "animated"]
    switch(getRandomInt(1,2)){
      case 1:
        return [formats[getRandomInt(0,formats.length-1)]]
      case 2:
        return formats
    }
  },
  scale: () => {
    let scales = ["1.0", "2.0", "3.0"]
    let array = []
    switch(getRandomInt(1,3)){
      case 1:
        return [scales[getRandomInt(0,scales.length-1)]]
      case 2:
        array.push(scales[getRandomInt(0,scales.length-1)])
        let newScale;
        do {
          newScale = scales[getRandomInt(0,scales.length-1)]
        } while (array.includes(newScale))
        array.push(newScale)
        return array
      case 3:
        return scales
    }
  },
  theme_mode: () => {
    let themes = ["light", "dark"]
    switch(getRandomInt(1,2)){
      case 1:
        return [themes[getRandomInt(0,themes.length-1)]]
      case 2:
        return themes
    }
  }
}

const CustomRewardRedemptionModel = {
  broadcaster_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
  },
  user_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  user_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_input: () => {
    return ""
  },
  status: () => {
    let statuses = ["UNFULFILLED","FULFILLED","CANCELED"]
    return statuses[getRandomInt(0,statuses.length-1)]
  },
  redeemed_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString();
  },
}

const CustomRewardRedemptionRewardModel = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  prompt: () => {
    return ""
  },
  cost: () => {
    return getRandomInt(0,999999)
  },
}

const CustomRewardModel = {
  broadcaster_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
  },
  image: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return null
      case 2:
        return { 
          "url_1x": "", 
          "url_2x": "", 
          "url_4x": "" }
    }
  },  
  background_color: () => {
    let string = "#"
    let characters = "0123456789ABCDEF"
    for (var i = 0; i<6; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  is_enabled: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  cost: () => {
    return getRandomInt(0,99999)
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  prompt: () => {
    return ""
  },
  is_user_input_required: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  max_per_stream_setting: () => {
    let bool = false
    let val = 0
    switch(getRandomInt(1,2)){
      case 1:
        bool = true
        val = getRandomInt(0,9999999)
        break
      case 2:
        bool = false
        val = 0
        break
    }
    return {
      "is_enabled": bool,
      "max_per_stream": val
    }
  },
  max_per_user_per_stream_setting: () => {
    let bool = false
    let val = 0
    switch(getRandomInt(1,2)){
      case 1:
        bool = true
        val = getRandomInt(0,9999999)
        break
      case 2:
        bool = false
        val = 0
        break
    }
    return {
      "is_enabled": bool,
      "max_per_user_per_stream": val
    }
  },
  global_cooldown_setting: () => {
    let bool = false
    let val = 0
    switch(getRandomInt(1,2)){
      case 1:
        bool = true
        val = getRandomInt(0,9999999)
        break
      case 2:
        bool = false
        val = 0
        break
    }
    return {
      "is_enabled": bool,
      "global_cooldown_seconds": val
    }
  },
  is_paused: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  is_in_stock: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  default_image: () => {
    return {
      "url_1x": "https://static-cdn.jtvnw.net/custom-reward-images/default-1.png",
      "url_2x": "https://static-cdn.jtvnw.net/custom-reward-images/default-2.png",
      "url_4x": "https://static-cdn.jtvnw.net/custom-reward-images/default-4.png"
    }
  },
  should_redemptions_skip_request_queue: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  redemptions_redeemed_current_stream: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return getRandomInt(0,999999)
      case 2:
        return null
    }
  },
  cooldown_expires_at: () => {
    switch(getRandomInt(1,2)){
      case 1:
        let finalDate = new Date(0);
        let maxMonthDate = new Date(0);
        finalDate.setFullYear(getRandomInt(2020,2050));
        finalDate.setMonth(getRandomInt(0,11));
        finalDate.setDate(1)
        maxMonthDate = finalDate
        maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
        maxMonthDate.setDate(0)
        finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
        finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
        return finalDate.toISOString();
      case 2:
        return null
    }
  }
}

const CreatorGoalsModel = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_id: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  type: () => {
    let types = ["follower","subscription","subscription_count","new_subscription","new_subscription_count"]
    return types[getRandomInt(0,types.length-1)]
  },
  description: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,40)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  current_amount: () => {
    return getRandomInt(0,999999)
  },
  target_amount: () => {
    return getRandomInt(0,999999)
  },
  created_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString();
  }
}

const ClipsModel = {
  id: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  url: (id) => {
    return "https://clips.twitch.tv/" + id
  },
  embed_url: (id) => {
    return "https://clips.twitch.tv/embed?clip=" + id
  },
  broadcaster_id: () => {
    return getRandomInt(10000000,999999999).toString()
  },
  broadcaster_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  creator_id: () => {
    return getRandomInt(10000000,999999999).toString()
  },
  creator_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  video_id: () => {
    return getRandomInt(10000000,999999999).toString()
  },
  game_id: () => {
    return getRandomInt(10000000,999999999).toString()
  },
  language: () => {
    let languages = ["en", "id", "ca", "da", "de", "es", "fr", "it", "hu", "nl", "no","pl", "pt", "ro", "sk", "fi", "sv", "tl", "vi", "tr", "cs", "el", "bg", "ru", "uk", "ar", "ms", "hi", "th", "zh", "ja", "zh-hk", "ko", "asl", "other"]
    return languages[getRandomInt(0, languages.length-1)]
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  view_count: () => {
    return getRandomInt(0,99999999)
  },
  created_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString();
  },
  thumbnail_url: () => {
    return "https://clips-media-assets.twitch.tv/157589949-preview-480x272.jpg"
  },
  duration: () => {
    return getRandomInt(0,1200)/10
  },
  vod_offset: () => {
    return getRandomInt(0,28800)
  }
}

const CheermotesModel = {
  prefix: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  min_bits: () => {
    return getRandomInt(0,999999)
  },
  id: () => {
    let tiers = ["1","100","500","1000","5000","10k", "100k"]
    return tiers[getRandomInt(0,tiers.length-1)]
  },
  color: () => {

    //Grey, Purple, Teal, Blue, or Red
    //NOTE: All Hex Colors except Grey are guessed
    let colors = ["#979797","#800080", "#008080", "#0000ff"]
    return colors[getRandomInt(0,colors.length-1)]
  },
  images: () => {
    switch(getRandomInt(1,3)){
      case 1: //Light
        switch(getRandomInt(1,3)){ 
          case 1: //Static
            return {
              "light": {
                "static": {
                  "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.gif",
                  "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.5.gif",
                  "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/2.gif",
                  "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/3.gif",
                  "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/4.gif"
                },
              }
            }
          case 2: //Animated
          return {
            "light": {
              "animated": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.gif",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.5.gif",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/2.gif",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/3.gif",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/4.gif"
              },
            }
          }
          case 3:
            return {
              "light": {
                "animated": {
                  "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.gif",
                  "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.5.gif",
                  "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/2.gif",
                  "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/3.gif",
                  "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/4.gif"
                },
                "static": {
                  "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.png",
                  "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.5.png",
                  "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/2.png",
                  "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/3.png",
                  "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/4.png"
                }
              }
            }
        }
      case 2://Dark
      switch(getRandomInt(1,3)){ 
        case 1: //Static
          return {
            "dark": {
              "static": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.gif",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.5.gif",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/2.gif",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/3.gif",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/4.gif"
              },
            }
          }
        case 2: //Animated
        return {
          "dark": {
            "animated": {
              "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.gif",
              "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.5.gif",
              "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/2.gif",
              "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/3.gif",
              "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/4.gif"
            },
          }
        }
        case 3:
          return {
            "dark": {
              "animated": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.gif",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.5.gif",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/2.gif",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/3.gif",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/4.gif"
              },
              "static": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.png",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.5.png",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/2.png",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/3.png",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/4.png"
              }
            }
          }
      }
      case 3: //Light & Dark
      switch(getRandomInt(1,3)){ 
        case 1: //Static
          return {
            "light": {
              "static": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.gif",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.5.gif",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/2.gif",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/3.gif",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/4.gif"
              },
            },
            "dark": {
              "static": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.gif",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.5.gif",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/2.gif",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/3.gif",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/4.gif"
              },
            }
          }
        case 2: //Animated
        return {
          "light": {
            "animated": {
              "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.gif",
              "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/1.5.gif",
              "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/2.gif",
              "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/3.gif",
              "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/dark/animated/1/4.gif"
            },
          },
          "dark": {
            "animated": {
              "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.gif",
              "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.5.gif",
              "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/2.gif",
              "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/3.gif",
              "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/4.gif"
            },
          }
        }
        case 3:
          return {
            "dark": {
              "animated": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.gif",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.5.gif",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/2.gif",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/3.gif",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/4.gif"
              },
              "static": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.png",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.5.png",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/2.png",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/3.png",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/4.png"
              }
            },
            "light": {
              "animated": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.gif",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/1.5.gif",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/2.gif",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/3.gif",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/animated/1/4.gif"
              },
              "static": {
                "1": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.png",
                "1.5": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/1.5.png",
                "2": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/2.png",
                "3": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/3.png",
                "4": "https://d3aqoihi2n8ty8.cloudfront.net/actions/cheer/light/static/1/4.png"
              }
            }
          }
      }
    }
  },
  can_cheer: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  show_in_bits_card: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  type: () => {
    let types = ["global_first_party","global_third_party","channel_custom","display_only","sponsored"]
    return types[getRandomInt(0,types.length-1)]
  },
  order: () => {
    return getRandomInt(0,100)
  },
  last_updated: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString();
  },
  is_charitable: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },

}

const ChatSettingsModel = {
  broadcaster_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  slow_mode: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  slow_mode_wait_time: (slow_mode) => {
    switch(slow_mode){
      case true:
        return getRandomInt(0,99999)
      case false:
        return null
    }
  },
  follower_mode: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  follower_mode_duration: (follower_mode) => {
    switch(follower_mode){
      case true:
        return getRandomInt(0,99999)
      case false:
        return null
    }
  },
  subscriber_mode: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  emote_mode: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  unique_chat_mode: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  non_moderator_chat_delay: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  non_moderator_chat_delay_duration: (non_moderator_chat_delay) => {
    switch(non_moderator_chat_delay){
      case true:
        return getRandomInt(0,99999)
      case false:
        return null
    }
  }
}

const ChannelStreamScheduleModel = {
  id: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(100,107)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    string += "="
    return string
  },
  start_time: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString()
  },
  end_time: (start_time) => {
    let end_time = new Date(start_time)
    end_time.setTime(end_time.getTime()+getRandomInt(0,43200000))
    return end_time.toISOString()
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  canceled_until: () => {
    switch(getRandomInt(1,2)){
      case 1:
        let finalDate = new Date(0);
        let maxMonthDate = new Date(0);
        finalDate.setFullYear(getRandomInt(2020,2050));
        finalDate.setMonth(getRandomInt(0,11));
        finalDate.setDate(1)
        maxMonthDate = finalDate
        maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
        maxMonthDate.setDate(0)
        finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
        finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
        return finalDate.toISOString()
      case 2:
        return null
    }
  },
  category: () => {
    switch (getRandomInt(0,2)){
      case 1:
        let string = ""
        let characters = "abcdefghijklmnopqrstuvwxyz"
        let length = getRandomInt(10,32)
        for (var i = 0; i<length; i++){
          string += characters.charAt(Math.floor(Math.random() * 
          characters.length));
        }
        return {
          "id": getRandomInt(0,99999999).toString(),
          "name": string
      }
      case 2:
        return null
    }
  },
  is_recurring: () => {
    switch (getRandomInt(0,2)){
      case 1:
        return true
      case 2:
        return true
    }
  },
  broadcaster_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  broadcaster_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  vacation: () => {
    switch (getRandomInt(0,2)){
      case 1:
        let finalDate = new Date(0);
        let maxMonthDate = new Date(0);
        finalDate.setFullYear(getRandomInt(2020,2050));
        finalDate.setMonth(getRandomInt(0,11));
        finalDate.setDate(1)
        maxMonthDate = finalDate
        maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
        maxMonthDate.setDate(0)
        finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
        finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
        let endDate = new Date(finalDate)
        endDate.setTime(endDate.getTime()+getRandomInt(0,2592000))
        return {
          "start_time": finalDate.toISOString(),
          "end_time": endDate.toISOString()
        }
      case 2:
        return null
    }
  }
}

const ChannelsModel = {
  broadcaster_language: () => {
    let languages = ["en", "id", "ca", "da", "de", "es", "fr", "it", "hu", "nl", "no","pl", "pt", "ro", "sk", "fi", "sv", "tl", "vi", "tr", "cs", "el", "bg", "ru", "uk", "ar", "ms", "hi", "th", "zh", "ja", "zh-hk", "ko", "asl", "other"]
    return languages[getRandomInt(0, languages.length-1)]
  },
  broadcaster_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  display_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  game_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  game_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  id: () => {
    return getRandomInt(0,999999999).toString()
  },
  is_live: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return false
      case 2:
        return true
    }
  },
  tags_ids: () => {
    return [
      "6ea6bca4-4712-4ab9-a906-e3336a9d8039"
    ]
  },
  thumbnail_url: () => {
    return "https://static-cdn.jtvnw.net/jtv_user_pictures/a_seagull-profile_image-4d2d235688c7dc66-300x300.png"
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  started_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString()
  },

}

const ChannelInformationModel = {
  broadcaster_language: () => {
    let languages = ["en", "id", "ca", "da", "de", "es", "fr", "it", "hu", "nl", "no","pl", "pt", "ro", "sk", "fi", "sv", "tl", "vi", "tr", "cs", "el", "bg", "ru", "uk", "ar", "ms", "hi", "th", "zh", "ja", "zh-hk", "ko", "asl", "other"]
    return languages[getRandomInt(0, languages.length-1)]
  },
  broadcaster_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  game_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  game_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  title: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  delay: () => {
    return getRandomInt(0,301)-1
  },

}

const ChannelEmotesModel =  {
  id: () => {
    return getRandomInt(0,999999999).toString()
  },
  name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  images: () => {
    return  {
      "url_1x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/1.0",
      "url_2x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/2.0",
      "url_4x": "https://static-cdn.jtvnw.net/emoticons/v2/304456832/static/light/3.0"
    }
  },
  emote_type: () => {
    let types = ["bitstier","follower","subscriptions"]
    return types[getRandomInt(0,types.length-1)]
  },
  emote_set_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  tier: (emote_type) => {
    let tiers = ["1000","2000", "3000"]
    switch(emote_type){
      case "subscriptions":
        return tiers[getRandomInt(0,tiers.length-1)]
      default:
        return ""
    }
  },
  format: () => {
    let formats = ["static", "animated"]
    switch(getRandomInt(1,2)){
      case 1:
        return [formats[getRandomInt(0,formats.length-1)]]
      case 2:
        return formats
    }
  },
  scale: () => {
    let scales = ["1.0", "2.0", "3.0"]
    let array = []
    switch(getRandomInt(1,3)){
      case 1:
        return [scales[getRandomInt(0,scales.length-1)]]
      case 2:
        array.push(scales[getRandomInt(0,scales.length-1)])
        let newScale;
        do {
          newScale = scales[getRandomInt(0,scales.length-1)]
        } while (array.includes(newScale))
        array.push(newScale)
        return array
      case 3:
        return scales
    }
  },
  theme_mode: () => {
    let themes = ["light", "dark"]
    switch(getRandomInt(1,2)){
      case 1:
        return [themes[getRandomInt(0,themes.length-1)]]
      case 2:
        return themes
    }
  }
}

const ChannelEditorsModel = {
  user_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  user_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  created_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString()
  },
}

const ChannelChatBadgesModel = {
  set_id: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  versions: () => {
    return {
      "id": getRandomInt(0,999999).toString(),
      "image_url_1x": "https://static-cdn.jtvnw.net/badges/v1/743a0f3b-84b3-450b-96a0-503d7f4a9764/1",
      "image_url_2x": "https://static-cdn.jtvnw.net/badges/v1/743a0f3b-84b3-450b-96a0-503d7f4a9764/2",
      "image_url_4x": "https://static-cdn.jtvnw.net/badges/v1/743a0f3b-84b3-450b-96a0-503d7f4a9764/3"
    }
  },
}

const CategoriesModel = {
  id: () => {
    return getRandomInt(0,99999999).toString()
  }, 
  name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string 
  }, 
  box_art_url: () => {
    return "https://static-cdn.jtvnw.net/ttv-boxart/Fortnite-{width}x{height}.jpg"
  }, 
}

const BroadcasterSubscriptionsModel = {
  broadcaster_id: () => {
    return getRandomInt(0,99999999999).toString()
  },
  broadcaster_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  broadcaster_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  gifter_id: () => {
    return getRandomInt(0,99999999999).toString()
  },
  gifter_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  gifter_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  is_gift: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return false
      case 2:
        return true
    }
  },
  tier: () => {
    let tiers = ["1000","2000","3000"]
    return tiers[getRandomInt(0,tiers.length-1)] 
  },
  plan_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_id: () => {
    return getRandomInt(0,99999999999).toString()
  },
  user_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  }
}

const BlockedTermsModel = {
  broadcaster_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  moderator_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
  },
  text: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  created_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString()
  },
  updated_at: (created_at) => {
    switch(getRandomInt(1,2)){
      case 1:
        let updated_at = new Date(created_at)
        updated_at.setTime(updated_at.getTime()+getRandomInt(0,9999999))
        return updated_at.toISOString()
      case 2:
        return created_at
    }
  },
  expires_at: (updated_at) => {
    switch(getRandomInt(1,2)){
      case 1:
        return null
      case 2:
        let expires_at = new Date(updated_at)
        expires_at.setTime(expires_at.getTime()+getRandomInt(0,9999999))
        return expires_at.toISOString()
    }
  }
}

const BitsLeaderboardModel = {
  user_id: () => {
    return getRandomInt(0,9999999).toString()
  },
  user_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  rank: (index) => {
    return index
  },
  score: (previous) => {
    return previous + getRandomInt(0,9999)
  },
  date_range: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    let updated_at = new Date(finalDate)
    updated_at.setTime(updated_at.getTime()+getRandomInt(0,99999999))
    return {
      "started_at": finalDate.toISOString(),
      "ended_at": updated_at.toISOString()
    }
  },
}

const BannedUsersModel = {
  user_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  user_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  user_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  expires_at: (created_at) => {
    let expires_at = new Date(created_at)
    expires_at.setTime(expires_at.getTime()+getRandomInt(0,999999))
    return expires_at.toISOString()
  },
  created_at: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0,23),getRandomInt(0,59),getRandomInt(0,59),getRandomInt(0,999))
    return finalDate.toISOString()
  },
  reason: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  moderator_id: () => {
    return getRandomInt(0,999999999).toString()
  },
  moderator_login: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  moderator_name: () => {
    let string = ""
    let characters = "abcdefghijklmnopqrstuvwxyz"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  }
}

const AutoModSettingsModel = {
  broadcaster_id: () => {
    return getRandomInt(0,99999999999).toString()
  },
  moderator_id: () => {
    return getRandomInt(0,99999999999).toString()
  },
  overall_level: () => {
    let x = getRandomInt(0,6)
    switch(x){
      case 5:
        return null
      case 6:
        return 0
      default:
        return x
    }
  },
  disability: (overall_level) => {
    switch(overall_level){
      case 2:
      case 3:
      case 4:
        return overall_level
      case 1:
      case 0:
        return 0
      case null:
        return getRandomInt(0,5)-1
    }
  },
  aggression: (overall_level) => {
    switch(overall_level){
      case 1:
      case 2:
      case 3:
      case 4:
        return overall_level
      case 0:
        return 0
      case null:
        return getRandomInt(0,5)-1
    }
  },
  sexuality_sex_or_gender: (overall_level) => {
    switch(overall_level){
      case 1:
      case 2:
      case 3:
      case 4:
        return overall_level
      case 0:
        return 0
      case null:
        return getRandomInt(0,5)-1
    }
  },
  misogyny: (overall_level) => {
    switch(overall_level){
      case 2:
      case 3:
      case 4:
        return overall_level
      case 0:
      case 1:
        return 0
      case null:
        return getRandomInt(0,5)-1
    }
  },
  bullying: (overall_level) => {
    switch(overall_level){
      case 4:
        return overall_level
      case 2:
      case 3:
        return overall_level-1
      case 0:
      case 1:
        return 0
      case null:
        return getRandomInt(0,5)-1
    }
  },
  swearing: (overall_level) => {
    switch(overall_level){
      case 4:
        return overall_level
      case null:
        return getRandomInt(0,5)-1
      default:
        return 0
    }
  },
  race_ethnicity_or_religion: (overall_level) => {
    switch(overall_level){
      case 1:
      case 2:
      case 3:
      case 4:
        return overall_level
      case 0:
        return 0
      case null:
        return getRandomInt(0,5)-1
    }
  },
  sex_based_terms: (overall_level) => {
    switch(overall_level){
      case 2:
      case 3:
      case 4:
        return overall_level
      case 0:
      case 1:
        return 0
      case null:
        return getRandomInt(0,5)-1
    }
  }
}

const StreamTagsModel = {
  tag_id: () => {
    let string = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          string+="-"
      }
    }
    return string
  },
  is_auto: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return false
      case 2:
        return true
    }
  },
  localization_names: () => {
    return {
      "bg-bg": "Изчистване на 1 кредит",
      "cs-cz": "1 čistý kredit",
      "da-dk": "1 credit klaret",
      "de-de": "Mit 1 Leben abschließen",
      "el-gr": "1 μόνο πίστωση",
      "en-us": "1 Credit Clear",
    }
  },
  localization_descriptions: () => {
    return {
      "bg-bg": "За потоци с акцент върху завършване на аркадна игра с монети, в която не се използва продължаване",
      "cs-cz": "Pro vysílání s důrazem na plnění mincových arkádových her bez použití pokračování.",
      "da-dk": "Til streams med vægt på at gennemføre et arkadespil uden at bruge continues",
      "de-de": "Für Streams mit dem Ziel, ein Coin-op-Arcade-Game mit nur einem Leben abzuschließen.",
      "el-gr": "Για μεταδόσεις με έμφαση στην ολοκλήρωση παλαιού τύπου ηλεκτρονικών παιχνιδιών που λειτουργούν με κέρμα, χωρίς να χρησιμοποιούν συνέχειες",
      "en-us": "For streams with an emphasis on completing a coin-op arcade game without using any continues",
    }
  },
}

const dataModels = {
  Videos: {
    data: MOCK.Videos,
    mockup: VideosModel
  },
  UserSubscription: {
    data: MOCK.UserSubscription,
    mockup: UserSubscriptionModel
  },
  UsersFollows: {
    data: MOCK.UsersFollows,
    mockup: UsersFollowsModel
  },
  Users: {
    data: MOCK.Users,
    mockup: UsersModel
  },
  UserExtensions: {
    data: MOCK.UserExtensions,
    mockup: ExtensionModel
  },
  UserBlockList: {
    data: MOCK.UserBlockList,
    mockup: UserBlockListModel
  },
  UserActiveExtensions: {
    data: MOCK.UserActiveExtensions,
    mockup: UserActiveExtensionsModel
  },
  TopGames: {
    data: MOCK.TopGames,
    mockup: TopGamesModel
  },
  Teams: {
    data: MOCK.Teams,
    mockup: TeamsModel
  },
  StreamsMarkers: {
    data: MOCK.StreamsMarkers,
    mockup: StreamsMarkersModel
  },
  Streams: {
    data: MOCK.Streams,
    mockup: StreamsModel
  },
  StreamKey: {
    data: MOCK.StreamKey,
    mockup: StreamKeyModel
  },
  SoundtrackPlaylists: {
    data: MOCK.SoundtrackPlaylists,
    mockup: SoundtrackPlaylistModel
  },
  SoundtrackPlaylist: {
    data: MOCK.SoundtrackPlaylist,
    mockup: SoundtrackPlaylistModel
  },
  SoundtrackCurrentTrack: {
    data: MOCK.SoundtrackCurrentTrack,
    mockup: SoundtrackTrackSourceModel
  },
  ReleasedExtensions: {
    data: MOCK.ReleasedExtensions,
    mockup: ReleasedExtensionsModel
  },
  Prediction: {
    data: MOCK.Predictions,
    mockup: PredictionsModel
  },
  Polls : {
    data: MOCK.Polls,
    mockup: PollModel
  },
  Moderators : {
    data: MOCK.Moderators,
    mockup: ModeratorsModel
  },
  HypeTrainEvents: {
    data: MOCK.HypeTrainEvents,
    mockup: HypeTrainEventsModel
  },
  GlobalEmotes: {
    data: MOCK.GlobalEmotes,
    mockup: GlobalEmotesModel
  },
  GlobalChatBadges: {
    data: MOCK.GlobalChatBadges,
    mockup: GlobalChatBadgesModel
  },
  Games: {
    data: MOCK.Games,
    mockup: GamesModel
  },
  GameAnalytics: {
    data: MOCK.GameAnalytics,
    mockup: AnalyticsModel
  },
  FollowedStreams: {
    data: MOCK.FollowedStreams,
    mockup: StreamsModel
  },
  ExtensionTransactions: {
    data: MOCK.ExtensionTransactions,
    mockup: ExtensionTransactionsModel
  },
  ExtensionLiveChannels: {
    data: MOCK.ExtensionLiveChannels,
    mockup: ExtensionLiveChannelsModel
  },
  ExtensionAnalytics: {
    data: MOCK.ExtensionAnalytics,
    mockup: AnalyticsModel
  },
  EmoteSets: {
    data: MOCK.EmoteSets,
    mockup: EmoteSetsModel
  },
  CustomRewardRedemption: {
    data: MOCK.CustomRewardRedemption,
    mockup: CustomRewardRedemptionModel
  },
  CustomReward: {
    data: MOCK.CustomReward,
    mockup: CustomRewardModel
  },
  CreatorGoals: {
    data: MOCK.CreatorGoals,
    mockup: CreatorGoalsModel
  },
  Clips:  {
    data: MOCK.Clips,
    mockup: ClipsModel
  },
  Cheermotes:  {
    data: MOCK.Cheermotes,
    mockup: CheermotesModel
  },
  ChatSettings: {
    data: MOCK.ChatSettings,
    mockup: ChatSettingsModel
  },
  ChannelTeams: {
    data: MOCK.ChannelTeams,
    mockup: TeamsModel
  },
  ChannelStreamSchedule: {
    data: MOCK.ChannelStreamSchedule,
    mockup: ChannelStreamScheduleModel
  },
  Channels: {
    data: MOCK.Channels,
    mockup: ChannelsModel
  },
  ChannelInformation: {
    data: MOCK.ChannelInformation,
    mockup: ChannelInformationModel
  },
  ChannelEmotes: {
    data: MOCK.ChannelEmotes,
    mockup: ChannelEmotesModel
  },
  ChannelEditors: {
    data: MOCK.ChannelEditors,
    mockup: ChannelEditorsModel
  },
  ChannelChatBadges: {
    data: MOCK.ChannelChatBadges,
    mockup: ChannelChatBadgesModel
  },
  Categories: {
    data: MOCK.Categories,
    mockup: CategoriesModel
  },
  BroadcasterSubscriptions: {
    data: MOCK.BroadcasterSubscriptions,
    mockup: BroadcasterSubscriptionsModel
  },
  BlockedTerms: {
    data: MOCK.BlockedTerms,
    mockup: BlockedTermsModel
  },
  BitsLeaderboard: {
    data: MOCK.BitsLeaderboard,
    mockup: BitsLeaderboardModel
  },
  BannedUsers: {
    data: MOCK.BannedUsers,
    mockup: BannedUsersModel
  },
  AutoModSettings: {
    data: MOCK.AutoModSettings,
    mockup: AutoModSettingsModel
  }, 
  AllStreamTags: {
    data: MOCK.AllStreamTags,
    mockup: StreamTagsModel
  },
  StreamTags: {
    data: MOCK.StreamTags,
    mockup: StreamTagsModel
  }
};



export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getVideos(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((video)=>{
    [
      "id",
      "stream_id",
      "user_id",
      "user_login",
      "user_name",
      "title",
      "description",
      "created_at",
      "published_at",
      "url",
      "thumbnail_url",
      "viewable",
      "view_count",
      "language",
      "type",
      "duration",
      "muted_segments"
    ].forEach((key, i) => {
      switch (key) {
        case "published_at":
          video[key] = mockupModel[key](video["created_at"]);
          break;
        case "url":
          video[key] = mockupModel[key](video["id"]);
          break;
        case "muted_segments":
          video[key] = mockupModel[key](video["duration"]);
          break;
        default:
          video[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getUserSubscription(dataType, dataModel, dataDate) {
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
  switch(getRandomInt(1,2)){
    case 1:
      mockupData["data"].forEach((sub)=>{
        [
          "broadcaster_id",
          "broadcaster_login",
          "broadcaster_name",
          "is_gift",
          "tier",
        ].forEach((key, i) => {
          switch (key) {
            default:
              sub[key] = mockupModel[key]();
              break;
          }
        });
        switch(sub["is_gift"]){
          case true:
            [
              "gifter_login",
              "gifter_name",
            ].forEach((key, i) => {
              switch (key) {
                default:
                  sub[key] = mockupModel[key]();
                  break;
              }
            });
        }
      })
      break;
    case 2:
      var exampleError = {
        "error": "Not Found",
        "message": mockupModel["user_login"]() + " has no subscription to " + mockupModel["broadcaster_name"](),
        "status": 404
      }
      mockupData = exampleError

      break;
  }


  

  

  return mockupData;
}

export function getUsersFollows(dataType, dataModel, dataDate) {
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
  switch(getRandomInt(1,3)){
    case 1:
      // Who is Following X?=> to_id stays the same
      mockupData["total"] = 1
      let to_id = mockupModel["to_id"]();
      let to_login = mockupModel["to_login"]();
      let to_name = mockupModel["to_name"]();
      mockupData["data"] =  [mockupData["data"][0]]
      mockupData["data"].forEach((follow)=> {
        [
          "from_id",
          "from_login",
          "from_name",
          "to_id",
          "to_name",
          "to_login",
          "followed_at",
        ].forEach((key, i) => {
          switch (key) {
            case "to_id":
              follow[key] = to_id
              break;
            case "to_login":
              follow[key] = to_login
              break;
            case "to_name":
              follow[key] = to_name
              break;
            default:
              follow[key] = mockupModel[key]();
              break;
          }
        });
      }) 
      break;
      
    case 2:
      // Who is X Following?. => From_id stays the same
      mockupData["total"] = 1
      mockupData["data"] = [mockupData["data"][0]]
      let from_id = mockupModel["from_id"]();
      let from_login = mockupModel["from_login"]();
      let from_name = mockupModel["from_name"]();
      mockupData["data"].forEach((follow)=> {
        [
          "from_id",
          "from_login",
          "from_name",
          "to_id",
          "to_name",
          "to_login",
          "followed_at",
        ].forEach((key, i) => {
          switch (key) {
            case "from_id":
              follow[key] = from_id
              break;
            case "from_login":
              follow[key] = from_login
              break;
            case "from_name":
              follow[key] = from_name
              break;
            default:
              follow[key] = mockupModel[key]();
              break;
          }
        });
      }) 
      break;
    case 3:
      // Is X following Y?
      mockupData["total"] = 1
      mockupData["data"] = [mockupData["data"][0]]
      mockupData["data"].forEach((follow)=> {
        [
          "from_id",
          "from_login",
          "from_name",
          "to_id",
          "to_name",
          "to_login",
          "followed_at",
        ].forEach((key, i) => {
          switch (key) {
            default:
              follow[key] = mockupModel[key]();
              break;
          }
        });
      }) 
      break;
  }
  
  return mockupData;
}

export function getUsers(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((user)=>{
    [
      "id",
      "login",
      "display_name",
      "type",
      "broadcaster_type",
      "description",
      "profile_image_url",
      "offline_image_url",
      "view_count",
      "email",
      "created_at"
    ].forEach((key, i) => {
      switch (key) {
        default:
          user[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getUserExtensions(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((extension)=>{
    [
      "id",
      "version",
      "name",
      "can_activate",
      "type",
    ].forEach((key, i) => {
      switch (key) {
        default:
          extension[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getUserBlockList(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((extension)=>{
    [
      "user_id",
      "user_login",
      "display_name",
    ].forEach((key, i) => {
      switch (key) {
        default:
          extension[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getUserActiveExtensions(dataType, dataModel, dataDate) {
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
    "panel",
    "overlay",
    "component",
  ].forEach((extension, i) => {
    mockupData["data"][extension] = {}
    let num = getRandomInt(0,6)
    switch (num){
      case 0:
        break;
      default: 
        for (var i = 1; i<num;i++){
          mockupData["data"][extension][i.toString()] = {}
          let mockup = {
            "active": true,
            "id": "rh6jq1q334hqc2rr1qlzqbvwlfl3x0",
            "version": "1.1.0",
            "name": "TopClip"
          };
          [
            "active",
            "id",
            "version",
            "name",
          ].forEach((key, i) => {
            if (mockup["active"]){
              switch (key) {
                default:
                  mockup[key] = mockupModel[key]();
                  break;
              }
            }
          });
          if (!mockup["active"]){
            mockupData["data"][extension][i.toString()]["active"] = "false"
          } else {
            mockupData["data"][extension][i.toString()] = mockup
          }
          
        }
        
    }
  });
  

  

  return mockupData;
}

export function getTopGames(dataType, dataModel, dataDate) {
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

  mockupData["data"].forEach((game)=>{
    [
      "id",
      "name",
      "box_art_url",
    ].forEach((key, i) => {
      switch (key) {
        default:
          game[key] = mockupModel[key]();
          break;
      }
    });
  })
  

  

  return mockupData;
}

export function getTeams(dataType, dataModel, dataDate) {
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
  switch (dataModel){
    case "Teams":
      mockupData["data"].forEach((team)=>{
        [
          "users",
          "background_image_url",
          "banner",
          "created_at",
          "updated_at",
          "info",
          "thumbnail_url",
          "team_name",
          "team_display_name",
          "id",
        ].forEach((key, i) => {
          switch (key) {
            case "users":
              team[key] = [team[key][0]]
              team[key].forEach((user, i) => {
                [
                  "user_id",
                  "user_name",
                  "user_login",
                ].forEach((key, i) => {
                  switch (key) {
                    default:
                      user[key] = mockupModel[key]();
                      break;
                  }
                });
              })
              break;
            case "updated_at":
              team[key] = mockupModel[key](team["created_at"]);
              break;
            default:
              team[key] = mockupModel[key]();
              break;
          }
        });
      })
      break;
    case "ChannelTeams":
      mockupData["data"].forEach((team)=>{
        [
          "background_image_url",
          "banner",
          "created_at",
          "updated_at",
          "info",
          "thumbnail_url",
          "team_name",
          "team_display_name",
          "id",
        ].forEach((key, i) => {
          switch (key) {
            case "updated_at":
              team[key] = mockupModel[key](team["created_at"]);
              break;
            default:
              team[key] = mockupModel[key]();
              break;
          }
        });
      })
      break;
  }
  
  

  

  return mockupData;
}

export function getStreamsMarkers(dataType, dataModel, dataDate) {
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

  mockupData["data"].forEach((data)=>{
    [
      "user_id",
      "user_name",
      "user_login",
      "videos"
    ].forEach((key, i) => {
      switch (key) {
        case "videos":
          data[key].forEach((video)=>{
            [
              "video_id",
              "markers"
            ].forEach((key2, i) => {
              switch(key2){
                case "video_id":
                  video[key2] = mockupModel[key2]()
                  break;
                case "markers":
                  video[key2].forEach((marker)=>{
                    [
                      "id",
                      "created_at",
                      "description",
                      "position_seconds",
                      "URL"
                    ].forEach((key3, i) => {
                      switch(key3){
                        case "URL":
                          marker[key3] = mockupModel[key3](video["video_id"], marker["position_seconds"])
                          break;
                        default:
                          marker[key3] = mockupModel[key3]()
                          break;
                      }
                    })
                  })
                  break;
              }
            })
          })
          break;
        default:
          data[key] = mockupModel[key]();
          break;
      }
    });
  })
  

  

  return mockupData;
}

export function getStreams(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((stream)=>{
    [
      "id",
      "user_id",
      "user_login",
      "user_name",
      "game_id",
      "game_name",
      "type",
      "title",
      "viewer_count",
      "started_at",
      "language",
      "thumbnail_url",
      "tag_ids",
      "is_mature"
    ].forEach((key, i) => {
      switch (key) {
        case "is_mature":
          // Streams Data has "is_mature", whilst Followed_Streams does not
          
          switch(stream.hasOwnProperty("is_mature")){
            case false:
              break;
            case true:
              stream[key] = mockupModel[key]();
              break;
          }
          break;
        default:
          stream[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getStreamKey(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((streamKey)=>{
    [
      "stream_key",
    ].forEach((key, i) => {
      switch (key) {
        default:
          streamKey[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getSoundtrackPlaylists(dataType, dataModel, dataDate) {
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
  mockupData["data"] = [mockupData["data"][0]]
  
  mockupData["data"].forEach((playlist)=>{
    [
      "title",
      "id",
      "image_url",
      "description",
    ].forEach((key, i) => {
      switch (key) {
        default:
          playlist[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getSoundtrackPlaylist(dataType, dataModel, dataDate) {
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
  
  mockupData["data"].forEach((playlist)=>{
    [
      "artists",
      "id",
      "isrc",
      "duration",
      "title",
      "album"
    ].forEach((key, i) => {
      switch (key){
        case "artists":
          playlist[key].forEach((artist)=>{
            [
              "id",
              "name",
              "creator_channel_id"
            ].forEach((key2, i) => {
              switch(key2){
                default:
                  artist[key2] = SoundtrackArtistModel[key2]()
                  break;
              }
            })
          })
          break;
        case "album":
          [
            "id",
            "name",
            "image_url"
          ].forEach((key2, i) => {
            switch(key2){
              case "name":
                playlist[key][key2] = SoundtrackAlbumModel[key2](playlist["title"])
                break;
              default:
                playlist[key][key2] = SoundtrackAlbumModel[key2]()
                break;
            }
          })
          break
        default:
          playlist[key] = SoundtrackTrackModel[key]()
          break;
      }
    })
  })

  

  

  return mockupData;
}

export function getSoundtrackCurrentTrack(dataType, dataModel, dataDate) {
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
  
  mockupData["data"].forEach((currentTrack)=>{
    [
      "track",
      "source",
    ].forEach((key, i) => {
      switch (key) {
        case "track":
            [
              "artists",
              "id",
              "duration",
              "title",
              "album"
            ].forEach((key2, i) => {
              switch (key2){
                case "artists":
                  currentTrack[key][key2].forEach((artist)=>{
                    [
                      "id",
                      "name",
                      "creator_channel_id"
                    ].forEach((key3, i) => {
                      switch(key3){
                        default:
                          artist[key3] = SoundtrackArtistModel[key3]()
                          break;
                      }
                    })
                  })
                  break;
                case "album":
                  [
                    "id",
                    "name",
                    "image_url"
                  ].forEach((key3, i) => {
                    switch(key3){
                      case "name":
                        currentTrack[key][key2][key3] = SoundtrackAlbumModel[key3](currentTrack[key]["title"])
                        break;
                      default:
                        currentTrack[key][key2][key3] = SoundtrackAlbumModel[key3]()
                        break;
                    }
                  })
                  break
                default:
                  currentTrack[key][key2] = SoundtrackTrackModel[key2]()
                  break;
              }
            })
          break;
        case "source":
          [
            "id",
            "content_type",
            "title",
            "image_url",
            "soundtrack_url",
            "spotify_url"
          ].forEach((key2, i) => {
            switch (key2) {
              default:
                currentTrack[key][key2] = mockupModel[key2]();
                break;
            }
          });
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getReleasedExtensions(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((extension)=>{
    [
      "author_name",
      "bits_enabled",
      "can_install",
      "configuration_location",
      "description",
      "eula_tos_url",
      "has_chat_support",
      "icon_url",
      "icon_urls",
      "id",
      "name",
      "privacy_policy_url",
      "request_identity_link",
      "screenshot_urls",
      "state",
      "subscriptions_support_level",
      "summary",
      "support_email",
      "version",
      "viewer_summary",
      "views",
      "allowlisted_config_urls",
      "allowlisted_panel_urls"
    ].forEach((key, i) => {
      switch (key) {
        default:
          extension[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getPrediction(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((prediction)=>{
    [
      "id",
      "broadcaster_id",
      "broadcaster_name",
      "broadcaster_login",
      "title",
      "status",
      "outcomes",
      "prediction_window",
      "winning_outcome_id",
      "created_at",
      "ended_at",
      "locked_at",
    ].forEach((key, i) => {
      switch (key) {
        case "winning_outcome_id":
          prediction[key] = mockupModel[key](prediction["status"]);
          break;
        case "ended_at":
        case "locked_at":
          prediction[key] = mockupModel[key](prediction["status"], prediction["created_at"]);
          break;
        case "outcomes":
          prediction[key] = [prediction[key][0]]
          let numberOfOutcomes = getRandomInt(2, 10);
          for (var i = 0; i<numberOfOutcomes-1; i++){
            prediction[key].push(Object.assign({},prediction[key][0]))
          }
          prediction[key].forEach((outcome, indexOfOutcome)=>{
            [
              "id",
              "title",
              "users",
              "channel_points",
              "top_predictors",
              "color"
            ].forEach((key2, i) => {
              switch(key2){
                case "color":
                  outcome[key2] = PredictionsOutcomeModel[key2](numberOfOutcomes, indexOfOutcome);
                  break;
                case "top_predictors":
                  let channelPointsUsed = getRandomInt(0,999999999)
                  let channelPointsWon = Math.round(channelPointsUsed * (getRandomInt(0,500)/100))
                  outcome[key2].forEach((predictor)=>{
                    [
                      "id",
                      "name",
                      "login",
                      "channel_points_used",
                      "channel_points_won",
                    ].forEach((key3, i) => {
                      switch(key3){
                        case "channel_points_used":
                          predictor["user"][key3] = TopPredictorModel[key3](channelPointsUsed);
                          break;
                        case "channel_points_won":
                          predictor["user"][key3] = TopPredictorModel[key3](prediction["status"], channelPointsWon);
                          break;
                        default:
                          predictor["user"][key3] = TopPredictorModel[key3]();
                          break;
                      }
                    })
                  })
                  break;
                default:
                  outcome[key2] = PredictionsOutcomeModel[key2]();
                  break;
              }
            })
          })
          break;
        default:
          prediction[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getPolls(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((poll)=>{
    [
      "id",
      "broadcaster_id",
      "broadcaster_name",
      "broadcaster_login",
      "title",
      "bits_voting_enabled",
      "bits_per_vote",
      "channel_points_voting_enabled",
      "channel_points_per_vote",
      "status",
      "choices",
      "duration",
      "started_at",
    ].forEach((key, i) => {
      switch (key) {
        case "bits_per_vote":
          poll[key] = mockupModel[key](poll["bits_voting_enabled"]);
          break;
        case "channel_points_per_vote":
          poll[key] = mockupModel[key](poll["channel_points_voting_enabled"]);
          break;
        case "choices":
          let numOfChoices = getRandomInt(0,4)-1
          for (var i = 0; i<numOfChoices; i++){
            poll[key].push(Object.assign({},poll[key][0]))
          }
          poll[key].forEach((choice)=>{
            [
              "id",
              "title",
              "channel_points_votes",
              "bits_votes",
              "votes",
            ].forEach((key2, i) => {
              switch(key2){
                case "votes":
                  choice[key2] = PollChoiceModel[key2](choice["channel_points_votes"], choice["bits_votes"])
                  break;
                case "channel_points_votes":
                  choice[key2] = PollChoiceModel[key2](poll["channel_points_voting_enabled"])
                  break;
                case "bits_votes":
                  choice[key2] = PollChoiceModel[key2](poll["bits_voting_enabled"])
                  break;
                default:
                  choice[key2] = PollChoiceModel[key2]()
                  break;
              }
            })
          })
          break;
        default:
          poll[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getModerators(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((moderator)=>{
    [
      "user_id",
      "user_login",
      "user_name"
    ].forEach((key, i) => {
      switch (key) {
        default:
          moderator[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getHypeTrainEvent(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((event)=>{
    [
      "id",
      "event_type",
      "version",
      "event_data",
      "event_timestamp",
    ].forEach((key, i) => {
      switch (key) {
        case "event_data":
          [
            "broadcaster_id",
            "started_at",
            "expires_at",
            "cooldown_end_time",
            "goal",
            "id",
            "last_contribution",
            "level",
            "top_contributions",
            "total"
          ].forEach((key2, i) => {
            switch(key2){
              case "cooldown_end_time":
                event[key][key2] = HypeTrainEventDataModel[key2](event[key]["expires_at"]);
                break;
              case "expires_at":
                event[key][key2] = HypeTrainEventDataModel[key2](event[key]["started_at"]);
                break;
              case "last_contribution":
                [
                  "type",
                  "user",
                  "total"
                ].forEach((key3, i) => {
                  switch(key3){
                    case "total":
                      event[key][key2][key3] = HypeTrainEventContributionModel[key3](event[key][key2]["type"]);
                      break;
                    default:
                      event[key][key2][key3] = HypeTrainEventContributionModel[key3]();
                      break;
                  }
                })
                break;
              case "top_contributions":
                // let numOfTopContri = getRandomInt(0,2)
                // for (var i = 0; i<numOfTopContri-1; i++){
                //   event[key][key2].push(Object.assign({},event[key][key2][0]))
                // }
                event[key][key2].forEach((contribution, indexContribution) => {
                  [
                    "type",
                    "user",
                    "total"
                  ].forEach((key3, i) => {
                    switch(key3){
                      case "total":
                        contribution[key3] = HypeTrainEventContributionModel[key3](contribution["type"]);
                        break;
                      case "type":
                        switch(indexContribution){
                          case 1:
                            switch(event[key][key2][0]["type"]){
                              case "BITS":
                                contribution[key3] = "SUBS"
                                break
                              case "SUBS":
                                contribution[key3] = "BITS"
                                break
                            }
                            break
                          default:
                            contribution[key3] = HypeTrainEventContributionModel[key3]();
                            break;
                        }
                        break
                      default:
                        contribution[key3] = HypeTrainEventContributionModel[key3]();
                        break;
                    }
                  })
                })
                
                break;
              default:
                event[key][key2] = HypeTrainEventDataModel[key2]();
                break;
            }
          })
          break
        case "event_timestamp":
          event[key] = mockupModel[key](event["event_data"]["started_at"]);
          break;
        default:
          event[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getGlobalEmotes(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((emote)=>{
    [
      "id",
      "name",
      "format",
      "scale",
      "theme_mode",
      "images",
    ].forEach((key, i) => {
      switch (key) {
        case "images":
          emote[key] = mockupModel[key](emote["scale"], emote["id"]);
          break;
        default:
          emote[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getGlobalChatBadges(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((badge)=>{
    [
      "set_id",
      "versions",
    ].forEach((key, i) => {
      switch (key) {
        case "versions":
          badge[key].forEach((badgeVersion)=>{
            [
              "id",
              "image_url_1x",
              "image_url_2x",
              "image_url_4x",
            ].forEach((key2, i) => {
              switch(key2){
                default:
                  badgeVersion[key2] = mockupModel[key2]();
                  break;
              }
            })
          })
          break;
        default:
          badge[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getGames(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((game)=>{
    [
      "id",
      "name",
      "box_art_url",
    ].forEach((key, i) => {
      switch (key) {
        case "box_art_url":
          game[key] = mockupModel[key](game["name"]);
          break;
        default:
          game[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getAnalytics(dataType, dataModel, dataDate) {
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

  mockupData["data"].forEach((analytics)=>{
    if (analytics.hasOwnProperty( 'game_id')) {
      [
        "game_id",
        "URL",
        "type",
        "date_range"
      ].forEach((key, i) => {
        switch (key) {
          case "date_range":
            [
              "started_at",
              "ended_at",
            ].forEach((key2, i) => {
              switch(key2){
                case "ended_at":
                  analytics[key][key2] = mockupModel[key2](analytics[key]["started_at"]);
                  break
                default:
                  analytics[key][key2] = mockupModel[key2]();
                  break
              }
            })
            break;
          default:
            analytics[key] = mockupModel[key]();
            break;
        }
      });
    } else if(analytics.hasOwnProperty('extension_id')){
      [
        "extension_id",
        "URL",
        "type",
        "date_range"
      ].forEach((key, i) => {
        switch (key) {
          case "date_range":
            [
              "started_at",
              "ended_at",
            ].forEach((key2, i) => {
              switch(key2){
                case "ended_at":
                  analytics[key][key2] = mockupModel[key2](analytics[key]["started_at"]);
                  break
                default:
                  analytics[key][key2] = mockupModel[key2]();
                  break
              }
            })
            break;
          default:
            analytics[key] = mockupModel[key]();
            break;
        }
      });
    }

  })

  return mockupData;
}

export function getExtensionTransactions(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((transaction)=>{
    [
      "id",
      "timestamp",
      "broadcaster_id",
      "broadcaster_login",
      "broadcaster_name",
      "user_id",
      "user_login",
      "user_name",
      "product_type",
      "product_data"
    ].forEach((key, i) => {
      switch (key) {
        case "product_data":
          [
            "domain",
            "sku",
            "cost",
            "inDevelopment",
            "displayName",
            "expiration",
            "broadcast"
          ].forEach((key2, i) => {
            switch(key2){
              case "cost":
                [
                  "amount",
                  "type"
                ].forEach((key3, i) => {
                  switch(key3){
                    default:
                      transaction[key][key2][key3] = mockupModel[key3]();
                      break
                  }
                }) 
                break
              default:
                transaction[key][key2] = mockupModel[key2]();
                break
            }
          }) 
          break;
        default:
          transaction[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getExtensionLiveChannels(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((channel)=>{
    [
      "broadcaster_id",
      "broadcaster_name",
      "game_name",
      "game_id",
      "title"
    ].forEach((key, i) => {
      switch (key) {
        default:
          channel[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getEmoteSets(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((set)=>{
    [
      "id",
      "name",
      "images",
      "emote_type",
      "emote_set_id",
      "owner_id",
      "format",
      "scale",
      "theme_mode"
    ].forEach((key, i) => {
      switch (key) {
        default:
          set[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getCustomRewardRedemption(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((redemption)=>{
    [
      "broadcaster_name",
      "broadcaster_login",
      "broadcaster_id",
      "id",
      "user_login",
      "user_id",
      "user_name",
      "user_input",
      "status",
      "redeemed_at",
      "reward"
    ].forEach((key, i) => {
      switch (key) {
        case "reward":
          [
            "id",
            "title",
            "prompt",
            "cost"
          ].forEach((key2, i) => {
            switch(key2){
              default:
                redemption[key][key2] = CustomRewardRedemptionRewardModel[key2]();
                break;
            }
          })
          break
        default:
          redemption[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getCustomReward(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((reward)=>{
    [
      "broadcaster_name",
      "broadcaster_login",
      "broadcaster_id",
      "id",
      "image",
      "background_color",
      "is_enabled",
      "cost",
      "title",
      "prompt",
      "is_user_input_required",
      "max_per_stream_setting",
      "max_per_user_per_stream_setting",
      "global_cooldown_setting",
      "is_paused",
      "is_in_stock",
      "default_image",
      "should_redemptions_skip_request_queue",
      "redemptions_redeemed_current_stream",
      "cooldown_expires_at"
    ].forEach((key, i) => {
      switch (key) {
        default:
          reward[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getCreatorGoals(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((goal)=>{
    [
      "id",
      "broadcaster_id",
      "broadcaster_name",
      "broadcaster_login",
      "type",
      "description",
      "current_amount",
      "target_amount",
      "created_at"
    ].forEach((key, i) => {
      switch (key) {
        default:
          goal[key] = mockupModel[key]();
          break;
      }
    });
  })

  

  

  return mockupData;
}

export function getClips(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((clip)=>{
    [
      "id",
      "url",
      "embed_url",
      "broadcaster_id",
      "broadcaster_name",
      "creator_id",
      "creator_name",
      "video_id",
      "game_id",
      "language",
      "title",
      "view_count",
      "created_at",
      "thumbnail_url",
      "duration",
      "vod_offset"
    ].forEach((key, i) => {
      switch (key) {
        case "url":
        case "embed_url":
          clip[key] = mockupModel[key](clip["id"]);
          break;
        default:
          clip[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getCheermotes(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((cheermotes)=>{
    [
      "prefix",
      "tiers",
      "type",
      "order",
      "last_updated",
      "is_charitable"
    ].forEach((key, i) => {
      switch (key) {
        case "tiers":
          cheermotes[key].forEach((tier)=>{
            [
              "min_bits",
              "id",
              "color",
              "images",
              "can_cheer",
              "show_in_bits_card"
            ].forEach((key2, i)=>{
              switch(key2){
                default:
                  tier[key2] = mockupModel[key2]();
                  break
              }
            })
          })
          break;
        default:
          cheermotes[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getChatSettings(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((setting)=>{
    [
      "broadcaster_id",
      "slow_mode",
      "slow_mode_wait_time",
      "follower_mode",
      "follower_mode_duration",
      "subscriber_mode",
      "emote_mode",
      "unique_chat_mode",
      "non_moderator_chat_delay",
      "non_moderator_chat_delay_duration"
    ].forEach((key, i) => {
      switch (key) {
        case "slow_mode_wait_time":
          setting[key] = mockupModel[key](setting["slow_mode"]);
          break;
        case "follower_mode_duration":
          setting[key] = mockupModel[key](setting["follower_mode"]);
          break;
        case "non_moderator_chat_delay_duration":
          setting[key] = mockupModel[key](setting["non_moderator_chat_delay"]);
          break;
        default:
          setting[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getChannelStreamSchedule(dataType, dataModel, dataDate) {
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
      "segments",
      "broadcaster_id",
      "broadcaster_name",
      "broadcaster_login",
      "vacation"
    ].forEach((key, i) => {
      switch (key) {
        case "segments":
          mockupData["data"][key].forEach((segment)=>{
            [
              "id",
              "start_time",
              "end_time",
              "title",
              "canceled_until",
              "category",
              "is_recurring",
            ].forEach((key2, i) => {
              switch(key2){
                case "end_time":
                  segment[key2] = mockupModel[key2](segment["start_time"]);
                  break;
                default:
                  segment[key2] = mockupModel[key2]();
                  break;
              }
            })
          })
          break;
        default:
          mockupData["data"][key] = mockupModel[key]();
          break;
      }
    });

  return mockupData;
}

export function getChannels(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((channel)=>{
    [
      "broadcaster_language",
      "broadcaster_login",
      "display_name",
      "game_id",
      "game_name",
      "id",
      "is_live",
      "tags_ids",
      "thumbnail_url",
      "title",
      "started_at"
    ].forEach((key, i) => {
      switch (key) {
        default:
          channel[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getChannelInformation(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((channel)=>{
    [
      "broadcaster_id",
      "broadcaster_login",
      "broadcaster_name",
      "broadcaster_language",
      "game_id",
      "game_name",
      "title",
      "delay"
    ].forEach((key, i) => {
      switch (key) {
        default:
          channel[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getChannelEmotes(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((emote)=>{
    [
      "id",
      "name",
      "images",
      "emote_type",
      "tier",
      "emote_set_id",
      "format",
      "scale",
      "theme_mode"
    ].forEach((key, i) => {
      switch (key) {
        case "tier":
          emote[key] = mockupModel[key](emote["emote_type"]);
          break;
        default:
          emote[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getChannelEditors(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((editor)=>{
    [
      "user_id",
      "user_name",
      "created_at"
    ].forEach((key, i) => {
      switch (key) {
        default:
          editor[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getChannelChatBadges(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((badge)=>{
    [
      "set_id",
      "versions"
    ].forEach((key, i) => {
      switch (key) {
        case "versions":
          badge[key].forEach((version, index)=>{
            badge[key][index] = mockupModel[key]();
          })
          break
        default:
          badge[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getCategories(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((category)=>{
    [
      "id",
      "name",
      "box_art_url"
    ].forEach((key, i) => {
      switch (key) {
        default:
          category[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getBroadcasterSubscriptions(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((subscription)=>{
    [
      "broadcaster_id",
      "broadcaster_login",
      "broadcaster_name",
      "gifter_id",
      "gifter_login",
      "gifter_name",
      "is_gift",
      "tier",
      "plan_name",
      "user_id",
      "user_name",
      "user_login"
    ].forEach((key, i) => {
      switch (key) {
        default:
          subscription[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getBlockedTerms(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((subscription)=>{
    [
      "broadcaster_id",
      "moderator_id",
      "id",
      "text",
      "created_at",
      "updated_at",
      "expires_at"
    ].forEach((key, i) => {
      switch (key) {
        case "updated_at":
          subscription[key] = mockupModel[key](subscription["created_at"]);
          break;
        case "expires_at":
          subscription[key] = mockupModel[key](subscription["updated_at"]);
          break;
        default:
          subscription[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getBitsLeaderboard(dataType, dataModel, dataDate) {
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

  mockupData["total"] = 1
  mockupData["data"] = [mockupData["data"][0]]


  for (var index = mockupData["data"].length-1;index>=0;index--){
    [
      "user_id",
      "user_login",
      "user_name",
      "rank",
      "score"
    ].forEach((key, i) => {
      switch (key) {
        case "rank":
          mockupData["data"][index][key] = mockupModel[key](index+1);
          break;
        case "score":
          if (index===mockupData["data"].length-1){
            mockupData["data"][index][key] = mockupModel[key](0);
          } else {
            mockupData["data"][index][key] = mockupModel[key](mockupData["data"][index+1][key]);
          }
          break;
        default:
          mockupData["data"][index][key] = mockupModel[key]();
          break;
      }
    });
  }
  mockupData["date_range"] = mockupModel["date_range"]();
  return mockupData;
}

export function getBannedUsers(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((user)=>{
    [
      "user_id",
      "user_login",
      "user_name",
      "created_at",
      "expires_at",
      "reason",
      "moderator_id",
      "moderator_login",
      "moderator_name"
    ].forEach((key, i) => {
      switch (key) {
        case "expires_at":
          user[key] = mockupModel[key](user["created_at"]);
          break;
        default:
          user[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getAutoModSettings(dataType, dataModel, dataDate) {
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
  mockupData["data"].forEach((setting)=>{
    [
      "broadcaster_id",
      "moderator_id",
      "overall_level",
      "disability",
      "aggression",
      "sexuality_sex_or_gender",
      "misogyny",
      "bullying",
      "swearing",
      "race_ethnicity_or_religion",
      "sex_based_terms"
    ].forEach((key, i) => {
      switch (key) {
        case "expires_at":
        case "disability":
        case "aggression":
        case "sexuality_sex_or_gender":
        case "misogyny":
        case "bullying":
        case "swearing":
        case "race_ethnicity_or_religion":
        case "sex_based_terms":
          setting[key] = mockupModel[key](setting["overall_level"]);
          break;
        default:
          setting[key] = mockupModel[key]();
          break;
      }
    });
  })
  return mockupData;
}

export function getStreamTags(dataType, dataModel, dataDate) {
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

  switch(dataModel){
    case "AllStreamTags":
      mockupData["data"].forEach((tags)=>{
        [
          "tag_id",
          "is_auto",
          "localization_names",
          "localization_descriptions"
        ].forEach((key, i) => {
          switch (key) {
            default:
              tags[key] = mockupModel[key]();
              break;
          }
        });
      })
    case "StreamTags":
      mockupData["data"].forEach((tags)=>{
        [
          "tag_id",
          "is_auto",
          "localization_names",
          "localization_descriptions"
        ].forEach((key, i) => {
          switch (key) {
            default:
              tags[key] = mockupModel[key]();
              break;
          }
        });
      })
  }
  
  return mockupData;
}