import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
  randomHexString,
  getRandomName,
  randomCountry,
  pickRandomValue,
  getRandomString,
  getRandomLatLng,
  getRandomAddress,
  randomLanguage,
  randomIntPhone,
  getRandBool,
  getRandomTimeZone,
  getRandomDateTime
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/foursquare-data";

const metaModel = {
  meta: () => {
    return {
      "code": 200,
      "requestId": randomHexString({len: 24, upperCase:false})
    }
  },
}

const NotificationsModel = {
  notifications: () => {
    return {
      item: {
        unreadCount: getRandomInt(0,50)
      },
      type: "notificationTray"
    }
  }
}

const PhotoDetailsModel = {
  id: () => {
    return randomHexString({len: 24, upperCase:false})
  },
  createdAt: () => {
    return getRandomInt(1000000000,2000000000)
  },
  source: () => {
    let sources = [
      {
        "name": "Instagram",
        "url": "http://instagram.com"
      }
    ]
    return sources[getRandomInt(0,sources.length-1)]
  },
  prefix: () => {
    return "https://igx.4sqi.net/img/general/"
  },
  suffix: () => {
    return "/1022386_wEd7VXnWzp5lajvRLtAPunoiufDSIq8PMEtEuIH2Tzg.jpg"
  },
  width: () => {
    return getRandomInt(99,1000)
  },
  height: () => {
    return getRandomInt(99,1000)
  },
  user: () => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return {
      firstName: getRandomName(),
      lastName: characters.charAt(Math.floor(Math.random() * 
      characters.length)),
      countryCode: randomCountry()
    }
  },
  visibility: () => {
    return pickRandomValue(["private", "public"])
  },
  checkin: () => {
    let timezone = getRandomTimeZone()
    switch (typeof timezone["OFFSET"]){
      case "object":
        timezone = timezone["OFFSET"][pickRandomValue(["STD", "DST"])]
        break
      default:
        timezone = timezone["OFFSET"]
        break
    }
    return {
      id: randomHexString({len: 24, upperCase:false}),
      createdAt: getRandomDateTime(false),
      type: "checkin",
      timeZoneOffset: timezone
    }
    // id: "51e4151b498ea66547febfaf",
    // createdAt: 1373902107,
    // type: "checkin",
    // timeZoneOffset: -240
  },
}

const VenueModel = {
  id: () => {
    return randomHexString({len: 24, upperCase:false})
  },
  name: () => {
    return getRandomString(getRandomInt(15,100))
  },
  contact: (name) => {
    let phone = randomIntPhone()
    return {
      "phone": phone.replace("+",""),
      "formattedPhone": phone,
      "twitter": name,
      "instagram": name,
      "facebook": getRandomInt(9999999999,99999999999),
      "facebookUsername": name,
      "facebookName": name
    }
  },
  location: () => {
    let country = randomCountry({full:null})
    let latLng = getRandomLatLng()
    let address = getRandomAddress()
    return {
      address: `${address["streetNumber"]} ${address["streetName"]}`,
      crossStreet: "",
      lat: latLng[0],
      lng: latLng[1],
      postalCode: address["postalCode"],
      cc: country["code"],
      city: address["city"],
      state: address["county"],
      country: country["full"],
      formattedAddress: [
        `${address["streetNumber"]} ${address["streetName"]}`,
        `${address["city"]}, ${address["county"]} ${address["postalCode"]}`,
        country["full"]
      ]
    }
  },
  canonicalUrl: (name, id) => {
    return `https://foursquare.com/v/${name}/${id}`
  },
  categories: (primary) => {
    let name = getRandomString(getRandomInt(15,100))
    let pluralName = getRandomString(getRandomInt(15,100))
    let shortName = getRandomString(getRandomInt(15,100))
    return {
      id: randomHexString({len: 24, upperCase:false}),
      name: name,
      pluralName: pluralName,
      shortName: shortName,
      icon: {
        prefix: "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/museum_art_",
        suffix: pickRandomValue([".png", ".jpg", ".jpeg"])
      },
      primary: primary
    }
  },
  url: () => {
    const url = getRandomString(getRandomInt(5,15))
    const domain = pickRandomValue(["com", "co.uk", "org"])
    return `www.${url}.${domain}`
  },
  likes : () => {
    const count = getRandomInt(0,99999)
    return {
      "count": count,
      "summary": `${count} Likes`
    }
  },
  rating: () => {
    return getRandomInt(0,100)/10
  },
  ratingColor: () => {
    return randomHexString({len: 6, upperCase:true})
  },
  verified: () => {
    return getRandBool()
  },
  stats: () => {
    return {
      "checkinsCount": getRandomInt(0,999999),
      "usersCount": getRandomInt(0,999999),
      "tipCount": getRandomInt(0,999),
      "visitsCount": getRandomInt(0,999999)
    }
  },
  ratingSignals: () => {
      return getRandomInt(0,99999)
  },
  beenHere: () => { 
    return {
      "count": 0,
      "unconfirmedCount": 0,
      "marked": false,
      "lastCheckinExpiredAt": 0
    }
  },
  description: () => {
    return getRandomString(getRandomInt(15,100))
  },
  storeId: () => {
    return ""
  },
  page: (url) => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return {
      "pageInfo": {
        "description": getRandomString(getRandomInt(15,50)),
        "banner": "https://is1.4sqi.net/userpix/HS2JAA2IAAAR2WZO.jpg",
        "links": {
          "count": 1,
          "items": [
            {
              "url": url
            }
          ]
        }
      },
    "user": {
      "firstName": getRandomName(),
      "lastName": characters.charAt(Math.floor(Math.random() * 
      characters.length)),
      "countryCode": randomCountry()
      },
    }
  },
  hereNow: () => {
    const types = [
      {
        "type": "others",
        "name": "Other people here",
      }
    ]
    let groups = []
    const length = getRandomInt(0,types.length)
    let final = 0
    for (var i =0; i<length; i++){
      let x = getRandomInt(0,types.length-1)
      groups.push({
        "type": types[x]["type"],
        "name": types[x]["type"],
        "count": getRandomInt(0,999),
        "items": []
      })
    }
    for (var i =0; i<groups.length;i++){
      final += groups[i]["count"]
    }
    return {
      "count": final,
      "summary": `${final} people are here`,
      "groups": groups
    }
  },
  createdAt: () => {
    return getRandomInt(1000000000,2000000000)
  },
  updatedAt: (createdAt) => {
    return createdAt + getRandomInt(10000,5000000)
  },
  shortUrl: () => {
    const url = getRandomString(6)
    return `www.http://4sq.com/${url}`
  },
  timeZone: () => {
    const zone = getRandomTimeZone()
    return zone["TZ_NAME"]
  },
  listed: () => {
    const types = [
      {
        "type": "others",
        "name": "Lists from other people",
      }
    ]
    let groups = []
    const length = getRandomInt(0,types.length)
    let final = 0
    for (var i =0; i<length; i++){
      let x = getRandomInt(0,types.length-1)
      groups.push({
        "type": types[x]["type"],
        "name": types[x]["type"],
        "count": getRandomInt(0,999),
        "items": []
      })
    }
    for (var i =0; i<groups.length;i++){
      final += groups[i]["count"]
    }
    return {
      "count": final,
      "summary": `${final} people are here`,
      "groups": groups
    }
  },
  phrases: () => {
    const text = getRandomString(getRandomInt(15,100))
    const start = getRandomInt(0,text.length-1)
    const end = getRandomInt(start, text.length-1)
    const subStr = text.substring(start, end)
    return {
      "phrase": subStr,
      "sample": {
        "entities": [
          {
            "indices": [start, end],
            "type": "keyPhrase"
          }
        ],
        "text": text
      },
      "count": getRandomInt(0,10)
    }
  },
  hours: () => {
    const minutes = ["00","15","30","45"];
    let start = getRandomInt(0,24)-1 
    let end = start + getRandomInt(0,20)-1
    if (end>=24){
      end -= 24
    }
    


    [
      start,
      end
    ].forEach((key)=>{
      if (key>=12){
        switch(key){
          case 12:
            key = `12:${pickRandomValue(minutes)} PM`
            break
          default:
            key = `${key-12}:${pickRandomValue(minutes)} PM`
            break
        }
      } else {
        switch(key){
          case 0:
            key = `12:${pickRandomValue(minutes)} AM`
            break
          default:
            key = `${key}:${pickRandomValue(minutes)} AM`
            break
        }
      }
    })
    
    return {
      "status": `Open until ${end}`,
      "isOpen": getRandBool(),
      "isLocalHoliday": getRandBool(),
      "timeframes": [
        {
          "days": "Mon–Sun",
          "includesToday": getRandBool(),
          "open": [
            {
              "renderedTime": `${start}-${end}`
            }
          ],
          "segments": []
        }
      ]
    }
  },
  popular: () => {
    const statuses = ["Likely open"]
    let start = getRandomInt(0,24)-1 
    let end = start + getRandomInt(0,20)-1
    if (end>=24){
      end -= 24
    }
    const minutes = ["00","15","30","45"];
    [
      start,
      end
    ].forEach((key)=>{
      if (key>=12){
        switch(key){
          case 12:
            key = `12:${pickRandomValue(minutes)} PM`
            break
          default:
            key = `${key-12}:${pickRandomValue(minutes)} PM`
            break
        }
      } else {
        switch(key){
          case 0:
            key = `12:${pickRandomValue(minutes)} AM`
            break
          default:
            key = `${key}:${pickRandomValue(minutes)} AM`
            break
        }
      }
    })
    return {
      status: pickRandomValue(statuses),
      isOpen: getRandBool(),
      isLocalHoliday: getRandBool(),
      timeframes: [
        {
          days: "Tue–Thu",
          open: [
            {
              renderedTime: `${start}-${end}`
            }
          ],
          segments: []
        },
      ]
    }
  },
  pageUpdates: () => {
    return {
      "count": getRandomInt(0,20)-1,
      "items": []
    }
  },
  inbox: () => {
    return {
      "count": getRandomInt(0,20)-1,
      "items": []
    }
  },
  venueChains: () => {
    return []
  },
  attributes: () => {
    return {
      "groups": [
        {
          "type": "payments",
          "name": "Credit Cards",
          "summary": "No Credit Cards",
          "count": 7,
          "items": [
            {
              "displayName": "Credit Cards",
              "displayValue": "No"
            }
          ]
        }
      ]
    }
  },
  photos: (num) => {

    let items = []
    let item = {
      "id": "5150464f52625adbe29d04c2",
      "createdAt": 1364215375,
      "source": {
        "name": "Foursquare Web",
        "url": "https://foursquare.com"
      },
      "prefix": "https://igx.4sqi.net/img/general/",
      "suffix": "/13764780_Ao02DfJpgG1ar2PfgP51hOKWsn38iai8bsSpzKd0GcM.jpg",
      "width": 800,
      "height": 542,
      "visibility": "public"
    }
    for (var i = 0; i < num; i++){
      [
        "id",
        "createdAt",
        "source",
        "prefix",
        "suffix",
        "width",
        "height",
        "user",
        "visibility"
      ].forEach((key)=>{
        switch(key){
          default:
            item[key] = PhotoDetailsModel[key]()
            break
        }
      })
      items.push(Object.assign({}, item))
    }
    const count = getRandomInt(0,100)
    return {
      "count": count + getRandomInt(0,100),
      "groups": [
        {
          "type": "venue",
          "name": "Venue photos",
          "count": count,
          "items": items
        }
      ]
    }
  },
  tips: (num) => {

    let items = []
    let item = {
      "id": "5150464ee4b02f70eb28eee4",
      "createdAt": 1364215374,
      "text": "Did you know? To create that feeling of being in the countryside, and not in the middle of a city, the four Transverse Roads were sunken down eight feet below the park’s surface.",
      "type": "user",
      "canonicalUrl": "https://foursquare.com/item/5150464ee4b02f70eb28eee4",
      "photo": {
        "id": "5150464f52625adbe29d04c2",
        "createdAt": 1364215375,
        "source": {
          "name": "Foursquare Web",
          "url": "https://foursquare.com"
        },
        "prefix": "https://igx.4sqi.net/img/general/",
        "suffix": "/13764780_Ao02DfJpgG1ar2PfgP51hOKWsn38iai8bsSpzKd0GcM.jpg",
        "width": 800,
        "height": 542,
        "visibility": "public"
      },
      "photourl": "https://igx.4sqi.net/img/general/original/13764780_Ao02DfJpgG1ar2PfgP51hOKWsn38iai8bsSpzKd0GcM.jpg",
      "lang": "en",
      "likes": {
        "count": 247,
        "groups": [
          {
            "type": "others",
            "count": 247,
            "items": []
          }
        ],
        "summary": "247 likes"
      },
      "logView": true,
      "agreeCount": 246,
      "disagreeCount": 0,
      "todo": {
        "count": 30
      },
      "user": {
        "firstName": "John",
        "lastName": "D",
        "countryCode": "US"
        },
    }
    for (var i = 0; i < num; i++){
      [
        "id",
        "createdAt",
        "text",
        "type",
        "canonicalUrl",
        "photo",
        "photourl",
        "lang",
        "likes",
        "logView",
        "agreeCount",
        "disagreeCount",
        "todo",
        "user"
      ].forEach((key)=>{
        switch(key){
          case "canonicalUrl":
            item[key] = TipDetailsModel[key](item["id"])
            break
          case "photourl":
            item[key] = TipDetailsModel[key](item["photo"]["prefix"],item["photo"]["suffix"])
            break
          default:
            item[key] = TipDetailsModel[key]()
            break
        }
      })
      items.push(Object.assign({}, item))
    }
    const count = getRandomInt(0,100)
    return {
      "count": count + getRandomInt(0,100),
      "groups": [
        {
          "type": "venue",
          "name": "Venue photos",
          "count": count,
          "items": items
        }
      ]
    }
  },
  venuePage: () => {
    return {
      id: getRandomInt(9999999,1000000000)-1
    }
    
  },
  popularityByGeo: () => {
    return getRandomInt(0,9999999999999999)/100000000000000000
  },
  type: () => {
    return "others"
  },
  editable: () => {
    return getRandBool()
  },
  public: () => {
    return getRandBool()
  },
  collaborative: () => {
    return getRandBool()
  },
  listItems: () => {
    return {
      count: getRandomInt(0,500),
      items: [
        {
          id: getRandomString(25),
          createdAt: getRandomInt(1000000000,2000000000)
        }
      ]
    }
  },
  user: () => {
    const id = getRandomInt(999999,9999999).toString()
    const name = getRandomString(getRandomInt(5,25))
    return {
      id: id,
      firstName: name,
      photo: {
        prefix: "https://igx.4sqi.net/img/user/",
        suffix: `/${id}.png`
      }
    }
  },
  followers: () => {
    return {
      count: getRandomInt(0,999)
    }
  },
  hasPerk: () => {
    return getRandBool()
  }
}

const TipDetailsModel = {
  id: () => {
    return randomHexString({len: 24, upperCase:false})
  },
  createdAt: () => {
    return getRandomInt(1000000000,2000000000)
  },
  text: () => {
    return getRandomString(getRandomInt(15,100))
  },
  type: () => {
    let types = ["user"]
    return types[getRandomInt(0,types.length-1)]
  },
  canonicalUrl: (id) => {
    return `https://foursquare.com/item/${id}`
  },
  lang: () => {
    return randomLanguage()
  },
  saves: () => {
    return {
      "count": 1,
      "groups": [],
      "summary": "1 Save"
    }
  },
  photo: () => {
    let base = {
      "id": "5150464f52625adbe29d04c2",
      "createdAt": 1364215375,
      "source": {
        "name": "Foursquare Web",
        "url": "https://foursquare.com"
      },
      "prefix": "https://igx.4sqi.net/img/general/",
      "suffix": "/13764780_Ao02DfJpgG1ar2PfgP51hOKWsn38iai8bsSpzKd0GcM.jpg",
      "width": 800,
      "height": 542,
      "visibility": "public"
    };
    [
      "id",
      "createdAt",
      "source",
      "prefix",
      "suffix",
      "width",
      "height",
      "user",
      "visibility"
    ].forEach((key)=>{
      switch(key){
        default:
          base[key] = PhotoDetailsModel[key]()
          break
      }
    })
    return base

  },
  photourl: (prefix, suffix) => {
    return `${prefix}original${suffix}`
  },
  likes: () => {
    let count = getRandomInt(0,500)
    return {
      "count": count,
      "groups": [
        {
          "type": "others",
          "count": count,
          "items": []
        }
      ],
      "summary": `${count} likes`
    }

  },
  logView: () => {
    return getRandBool()
  },
  agreeCount: () => {
    return getRandomInt(0,500)
  },
  disagreeCount: () => {
    return getRandomInt(0,500)
  },
  todo: () => {
    let count = getRandomInt(0,500)
    return {
      "count": count
    }
  },
  user: () => {
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    return {
      firstName: getRandomName(),
      lastName: characters.charAt(Math.floor(Math.random() * 
      characters.length)),
      countryCode: randomCountry()
    }
  }
}

const CategoriesModel = {
  id: () => {
    return randomHexString({len: 24, upperCase:false})
  },
  categories: () => {
    return []
  },
  icon: () => {
    return {
      prefix: "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/default_",
      suffix: pickRandomValue([".png", ".jpg", ".jpeg"])
    }
  },
  name: () => {
    return getRandomString(getRandomInt(15,100))
  },
  pluralName: () => {
    return getRandomString(getRandomInt(15,100))
  },
  shortName: () => {
    return getRandomString(getRandomInt(15,100))
  },
}

const RecommendationModel = {
  warning: () => {
    return {
      text: getRandomString(getRandomInt(20,70))
    }
  },
  suggestedRadius: () => {
    return getRandomInt(0,1000)
  },
  headerLocation: () => {
    return "Lower East Side"
  },
  headerFullLocation: (headerLocation) => {
    return `${headerLocation}, New York`
  },
  headerLocationGranularity: () => {
    return "neighborhood"
  },
  totalResults: () => {
    return getRandomInt(0,500)
  },
  suggestedBounds: () => {
    return {
      ne: {
        lat: 40.724216906965616,
        lng: -73.9896507407283
      },
      sw: {
        lat: 40.72151724718017,
        lng: -73.98693222860872
      }
    }
  },
  reasons: () => {
    return {
      count: 0,
      items: [
        {
          summary: "This spot is popular",
          type: "general",
          reasonName: "globalInteractionReason"
        }
      ]
    }
  }
}

const VenueListModel = {
  lists: (items) => {
    const count = getRandomInt(0,1000)
    return    {
      count: count,
      groups: [
        {
          type: "others",
          name: "Lists from other people",
          count: count,
          items: items
        }
      ]
    }
  }
}

const HoursModel = {
  timeframes: (exclude = []) => {
    const days = [1,2,3,4,5,6,7]
    var filtered = days.filter(function(item) {
      return exclude.indexOf(item) === -1;
    });
    const length = getRandomInt(0,Math.max(...filtered))
    var final = []
    for (var i = 0; i<length;){
      var index = getRandomInt(0,filtered.length-1)
      if (!final.includes(filtered[index])){
        final.push(filtered[index])
        i++;
      } 
    }
    var start = getRandomInt(0,23)-1
    var end = getRandomInt(start,24)
    if (start<10){
      start = `0${start}00`
    } else {
      start = `${start}00`
    }
    if (end<10){
      end = `0${end}00`
    } else {
      end = `${end}00`
    }
    return {
      days: final,
      open: [
        {
          start: start,
          end: end
        }
      ],
      segments: []
    }
  }
}

const LikesModel = {
  like: () => {
    return getRandBool()
  },
  likes: () => {
    const count = getRandomInt(0,500)
    return {
      count: count,
      groups: [
        {
          count: count,
          items: [],
          type: "others"
        }
      ],
      summary: `${count} Likes` 
    }
  }
}


const dataModels = {
  PhotoDetails: {
    data: MOCK.photos_details,
    mockup: PhotoDetailsModel
  },
  TipDetails: {
    data: MOCK.tips_details,
    mockup: TipDetailsModel
  },
  VenuesDetails: {
    data: MOCK.venues_details,
    mockup: VenueModel
  },
  VenuesCategories: {
    data: MOCK.venues_categories,
    mockup: CategoriesModel
  },
  VenueRecommendations: {
    data: MOCK.venues_getRecommendations,
    mockup: RecommendationModel
  },
  VenueList: {
    data: MOCK.venues_getVenueList,
    mockup: VenueListModel
  },
  VenueHours: {
    data: MOCK.venues_hours,
    mockup: HoursModel
  },
  VenueLikes: {
    data: MOCK.venues_likes,
    mockup: LikesModel
  },
  NextVenues: {
    data: MOCK.venues_nextVenues,
    mockup: VenueModel
  },
  VenuePhotos: {
    data: MOCK. venues_photos,
    mockup: PhotoDetailsModel
  },
  VenuesSearch: {
    data: MOCK.venues_search,
    mockup: VenueModel
  },
  SimilarVenues: {
    data: MOCK.venues_similarVenues,
    mockup: VenueModel
  },
  VenueSuggestions: {
    data: MOCK.venues_suggestSearch,
    mockup: VenueModel
  },
  VenueTips: {
    data: MOCK.venues_tips,
    mockup: TipDetailsModel
  },
  VenueTrending: {
    data: MOCK.venues_trending,
    mockup: VenueModel
  }
};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getPhotoDetailsMockupData(dataType, dataModel, dataDate) {
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
    "meta",
    "id",
    "createdAt",
    "source",
    "prefix",
    "suffix",
    "width",
    "height",
    "user",
    "visibility",
    "venueID",
    "name",
    "contact",
    "location",
    "categories"
  ].forEach((key, i)=>{
    switch(key){
      case "venueID":
        mockupData["response"]["photo"]["venue"][key] = VenueModel["id"]()
        break
      case "location":
      case "name":
        mockupData["response"]["photo"]["venue"][key] = VenueModel[key]()
      case "contact":
        mockupData["response"]["photo"]["venue"][key] = VenueModel[key](mockupData["response"]["photo"]["venue"]["name"])
        break
      case "categories":
        mockupData["response"]["photo"]["venue"][key] = {}
        break
      case "meta":
        mockupData[key] = metaModel[key]()
        break
      default:
        mockupData["response"]["photo"][key] = mockupModel[key]()
        break
    }
  })
  
  return mockupData;
}

export function getTipDetailsMockupData(dataType, dataModel, dataDate) {
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
    "meta",
    "id",
    "createdAt",
    "text",
    "type",
    "canonicalUrl",
    "lang",
    "saves",
    "venueID",
    "name",
    "location",
    "venuePage",
    "categories"
  ].forEach((key, i)=>{
    switch(key){
      case "venueID":
        mockupData["response"]["tip"]["venue"]["id"] = VenueModel["id"]()
        break
      case "location":
      case "name":
      case "venuePage":
        mockupData["response"]["tip"]["venue"][key] = VenueModel[key]()
        break
      case "categories":
        let primary = true
        let randomCats = 1
        mockupData["response"]["tip"]["venue"][key] = []
        for (var index = 0; index< randomCats; index++){
          mockupData["response"]["tip"]["venue"][key].push(VenueModel[key](primary))
          switch(primary){
            case true:
              primary = false
              break
          }
        }
        break
      case "meta":
        mockupData[key] = metaModel[key]()
        break
      default:
        mockupData["response"]["tip"][key] = mockupModel[key]()
        break
    }
  })
  
  return mockupData;
}

export function getVenuesDetailsMockupData(dataType, dataModel, dataDate) {
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
    "contact",
    "location",
    "canonicalUrl",
    "categories",
    "url",
    "likes",
    "rating",
    "ratingColor",
    "verified",
    "stats",
    "ratingSignals",
    "beenHere",
    "photos" ,
    "description",
    "storeId",
    "page",
    "hereNow",
    "createdAt",
    "tips",
    "shortUrl",
    "timeZone",
    "listed",
    "phrases",
    "hours",
    "popular",
    "pageUpdates",
    "inbox",
    "venueChains",
    "attributes"   ,
    "bestPhoto" 
  ].forEach((key, i)=>{
    switch(key){
      case "contact":
        mockupData["response"]["venue"][key] = mockupModel[key](mockupData["response"]["venue"]["name"])
        break
      case "categories":
        let primary = true
        let randomCats = 1
        mockupData["response"]["venue"][key] = []
        for (var index = 0; index< randomCats; index++){
          mockupData["response"]["venue"][key].push(mockupModel[key](primary))
          switch(primary){
            case true:
              primary = false
              break
          }
        }
        break
      case "canonicalUrl":
        mockupData["response"]["venue"][key] = mockupModel[key](mockupData["response"]["venue"]["name"],mockupData["response"]["venue"]["id"])
        break
      case "meta":
        mockupData[key] = metaModel[key]()
        break
      case "photos":
      case "tips":
        mockupData["response"]["venue"][key] = mockupModel[key](1)
        break
      case "bestPhoto":
        mockupData["response"]["venue"][key] = pickRandomValue(mockupData["response"]["venue"]["photos"]["groups"][0]["items"])
        break
      default:
        mockupData["response"]["venue"][key] = mockupModel[key]()
        break
    }
  })
  
  return mockupData;
}

export function getVenuesCategoriesMockupData(dataType, dataModel, dataDate) {
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
  mockupData["response"]["categories"][0]["categories"] = [mockupData["response"]["categories"][0]["categories"][0]]
  const numOfCategories = 1;
  [
    "meta",
    "notifications"
  ].forEach((key,i)=>{
    switch(key){
      case "notifications":
        mockupData[key] = NotificationsModel[key]()
        break
      case "meta":
        mockupData[key] = metaModel[key]()
        break
    }
  })
  for (var index = 0; index<numOfCategories; index++){
    [
      "categories",
      "icon",
      "id",
      "name",
      "pluralName",
      "shortName"
    ].forEach((key, i)=>{
      switch(key){
        default:
          mockupData["response"]["categories"][0]["categories"][index][key] = mockupModel[key]()
          break
      }
    })
  }
  
  
  return mockupData;
}

export function getVenueRecommendationsMockupData(dataType, dataModel, dataDate) {
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
    "warning",
    "suggestedRadius",
    "headerLocation",
    "headerFullLocation",
    "headerLocationGranularity",
    "totalResults",
    "suggestedBounds",
    "reasons",
    "id",
    "name",
    "location",
    "categories",
    "popularityByGeo",
    "venuePage"
  ].forEach((key, i)=>{
    switch(key){
      case "location":
        mockupData["response"]["groups"][0]["items"][0]["venue"][key] = VenueModel[key]()
        mockupData["response"]["groups"][0]["items"][0]["venue"][key]["labeledLatLngs"] = [
          {
            label: "display",
            lat: mockupData["response"]["groups"][0]["items"][0]["venue"][key]["lat"],
            lng: mockupData["response"]["groups"][0]["items"][0]["venue"][key]["lng"]
          }
        ]
        break
      case "categories":
        mockupData["response"]["groups"][0]["items"][0]["venue"][key][0] = VenueModel[key](true)
        break
      case "venuePage":
      case "popularityByGeo":
      case "name":
      case "id":
        mockupData["response"]["groups"][0]["items"][0]["venue"][key] = VenueModel[key]()
        break
      case "reasons":
        mockupData["response"]["groups"][0]["items"][0][key] = mockupModel[key]()
        break
      case "headerFullLocation":
        mockupData["response"][key] = mockupModel[key](mockupData["response"]["headerLocation"])
        break
      case "meta":
        mockupData[key] = metaModel[key]()
        break
      default:
        mockupData["response"][key] = mockupModel[key]()
        break
    }
  })
  
  return mockupData;
}

export function getVenueListMockupData(dataType, dataModel, dataDate) {
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

  mockupData["meta"] = metaModel["meta"]()
  mockupData["response"]["lists"] = mockupModel["lists"]([mockupData["response"]["lists"]["groups"][0]["items"][0]]);

  for (var index = 0; index< mockupData["response"]["lists"]["groups"][0]["items"].length;index++){
    [
      "id",
      "name",
      "type",
      "user",
      "editable",
      "public",
      "collaborative",
      "url",
      "canonicalUrl",
      "createdAt",
      "updatedAt",
      "photo",
      "followers",
      "listItems"
    ].forEach((key, i)=>{
      switch(key){
        case "updatedAt":
          mockupData["response"]["lists"]["groups"][0]["items"][index][key] = VenueModel[key](mockupData["response"]["lists"]["groups"][0]["items"][index]["createdAt"])
          break
        case "canonicalUrl":
          mockupData["response"]["lists"]["groups"][0]["items"][index][key] = VenueModel[key](mockupData["response"]["lists"]["groups"][0]["items"][index]["name"],mockupData["response"]["lists"]["groups"][0]["items"][index]["id"])
          break
        case "photo":
          mockupData["response"]["lists"]["groups"][0]["items"][index][key] = VenueModel["photos"](1)[0]
          break
        default:
          mockupData["response"]["lists"]["groups"][0]["items"][index][key] = VenueModel[key]()
          break
      }
    })
  }

  
  
  return mockupData;
}

export function getVenueHoursMockupData(dataType, dataModel, dataDate) {
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
  mockupData["meta"] = metaModel["meta"]();
  [
    "hours",
    "popular"
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData["response"][key]["timeframes"] = [mockupData["response"][key]["timeframes"][0]]
        mockupData["response"][key]["timeframes"][0] = mockupModel["timeframes"]()
        break
    }
  })
  
  return mockupData;
}

export function getVenueLikesMockupData(dataType, dataModel, dataDate) {
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
  mockupData["meta"] = metaModel["meta"]();
  mockupData["notifications"] = NotificationsModel["notifications"]();
  [
    "like",
    "likes"
  ].forEach((key, i)=>{
    switch(key){
      default:
        mockupData["response"][key] = mockupModel[key]()
        break
    }
  })
  
  return mockupData;
}

export function getNextVenueMockupData(dataType, dataModel, dataDate) {
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
  mockupData["meta"] = metaModel["meta"]();
  mockupData["response"]["nextVenues"]["items"] = [mockupData["response"]["nextVenues"]["items"][0]];
  mockupData["response"]["nextVenues"]["count"] = 1;
  for (var index =0;index<mockupData["response"]["nextVenues"]["items"].length;index++){
    [
      "id",
      "name",
      "location",
      "categories"
    ].forEach((key, i)=>{
      switch(key){
        case "categories":
        let primary = true
        let randomCats = 1
        mockupData["response"]["nextVenues"]["items"][index][key] = []
        for (var index2 = 0; index2< randomCats; index2++){
          mockupData["response"]["nextVenues"]["items"][index][key].push(mockupModel[key](primary))
          switch(primary){
            case true:
              primary = false
              break
          }
        }
        break
        default:
          mockupData["response"]["nextVenues"]["items"][index][key] = mockupModel[key]()
          break
      }
    })
  }

  
  return mockupData;
}

export function getVenuePhotosMockupData(dataType, dataModel, dataDate) {
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
  for(var index = 0; index< mockupData["response"]["photos"]["items"].length;index++){
    [
      "meta",
      "id",
      "createdAt",
      "source",
      "prefix",
      "suffix",
      "width",
      "height",
      "user",
      "checkin",
      "visibility"
    ].forEach((key, i)=>{
      switch(key){
        case "meta":
          mockupData[key] = metaModel[key]()
          break
        default:
          mockupData["response"]["photos"]["items"][index][key] = mockupModel[key]()
          break
      }
    })
  }

  
  return mockupData;
}

export function getVenuesSearchMockupData(dataType, dataModel, dataDate) {
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
  mockupData["meta"] = metaModel["meta"]()
  for( var index = 0; index< mockupData["response"]["venues"].length; index++){
    [
      "id",
      "name",
      "location",
      "categories",
      "venuePage"
    ].forEach((key, i)=>{
      switch(key){
        case "location":
          mockupData["response"]["venues"][index][key] = mockupModel[key]()
          mockupData["response"]["venues"][index][key]["labeledLatLngs"] = [
            {
              label: "display",
              lat: mockupData["response"]["venues"][index][key]["lat"],
              lng: mockupData["response"]["venues"][index][key]["lng"]
            }
          ]
          break
        case "categories":
          mockupData["response"]["venues"][index][key][0] = mockupModel[key](true)
          break
        default:
          mockupData["response"]["venues"][index][key] = mockupModel[key]()
          break
      }
    })
  }

  
  return mockupData;
}

export function getSimilarVenuesMockupData(dataType, dataModel, dataDate) {
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
  mockupData["meta"] = metaModel["meta"]()
  mockupData["notifications"] = NotificationsModel["notifications"]()
  mockupData["response"]["similarVenues"]["items"] = [mockupData["response"]["similarVenues"]["items"][0]]
  for( var index = 0; index< mockupData["response"]["similarVenues"]["items"].length; index++){
    [
      "id",
      "contact",
      "name",
      "location",
      "categories",
      "venuePage"
    ].forEach((key, i)=>{
      switch(key){
        case "location":
          mockupData["response"]["similarVenues"]["items"][index][key] = mockupModel[key]()
          mockupData["response"]["similarVenues"]["items"][index][key]["labeledLatLngs"] = [
            {
              label: "display",
              lat: mockupData["response"]["similarVenues"]["items"][index][key]["lat"],
              lng: mockupData["response"]["similarVenues"]["items"][index][key]["lng"]
            }
          ]
          break
        case "categories":
          mockupData["response"]["similarVenues"]["items"][index][key][0] = mockupModel[key](true)
          break
        default:
          mockupData["response"]["similarVenues"]["items"][index][key] = mockupModel[key]()
          break
      }
    })
  }

  
  return mockupData;
}

export function getVenueSuggestionsMockupData(dataType, dataModel, dataDate) {
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
  mockupData["meta"] = metaModel["meta"]()
  mockupData["response"]["minivenues"] = [mockupData["response"]["minivenues"][0]]
  for( var index = 0; index< mockupData["response"]["minivenues"].length; index++){
    [
      "id",
      "name",
      "location",
      "categories",
      "hasPerk"
    ].forEach((key, i)=>{
      switch(key){
        case "categories":
          mockupData["response"]["minivenues"][index][key][0] = mockupModel[key](true)
          break
        default:
          mockupData["response"]["minivenues"][index][key] = mockupModel[key]()
          break
      }
    })
  }

  
  return mockupData;
}

export function getVenueTipsMockupData(dataType, dataModel, dataDate) {
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
  mockupData["meta"] = metaModel["meta"]()
  mockupData["response"]["tips"]["items"] = [mockupData["response"]["tips"]["items"][0]]
  for (var index = 0; index< mockupData["response"]["tips"]["items"].length;index++){
    [
      "id",
      "createdAt",
      "text",
      "type",
      "canonicalUrl",
      "photo",
      "photourl",
      "lang",
      "likes",
      "logView",
      "agreeCount",
      "disagreeCount",
      "todo"
    ].forEach((key, i)=>{
      switch(key){
        case "likes":
          mockupData["response"]["tips"]["items"][index][key] = {
            count: 0,
            groups: []
          }
          break
        case "photourl":
          mockupData["response"]["tips"]["items"][index][key] = mockupModel[key](mockupData["response"]["tips"]["items"][index]["photo"]["prefix"],mockupData["response"]["tips"]["items"][index]["photo"]["suffix"])
          break
        case "canonicalUrl": 
          mockupData["response"]["tips"]["items"][index][key] = mockupModel[key](mockupData["response"]["tips"]["items"][index]["id"])
          break
        default:
          mockupData["response"]["tips"]["items"][index][key] = mockupModel[key]()
          break
      }
    })
  }
  
  return mockupData;
}

export function getVenueTrendingMockupData(dataType, dataModel, dataDate) {
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
  mockupData["meta"] = metaModel["meta"]()
  mockupData["response"]["venues"] = [mockupData["response"]["venues"][0]]
  for( var index = 0; index< mockupData["response"]["venues"].length; index++){
    [
      "id",
      "name",
      "location",
      "categories",
    ].forEach((key, i)=>{
      switch(key){
        case "categories":
          mockupData["response"]["venues"][index][key][0] = mockupModel[key](true)
          break
        default:
          mockupData["response"]["venues"][index][key] = mockupModel[key]()
          break
      }
    })
  }

  
  return mockupData;
}