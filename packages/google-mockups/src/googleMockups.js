import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/google-data";

const RoutesModel = {
  startLocation: () => {
    return {
      latitudeE7: getRandomInt(-900000000,900000000),
      longitudeE7: getRandomInt(-1800000000,1800000000),
    }
  },
  endLocation: () => {
    return {
      latitudeE7: getRandomInt(-900000000,900000000),
      longitudeE7: getRandomInt(-1800000000,1800000000),
    }
  },
  distance: () => {
    return getRandomInt(0,9999)
  },
  confidence: () => {
    let categories = ["LOW", "MEDIUM", "HIGH"]
    return categories[getRandomInt(0,categories.length)-1]
  },
  activityType: () => {
    let types = ["IN_PASSENGER_VEHICLE", "IN_BUS", "IN_TRAIN"]
    return types[getRandomInt(0,types.length)-1]
  },
  startTimestamp: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1,23),getRandomInt(1,59),getRandomInt(1,59),getRandomInt(1,999))
    return finalDate.toISOString()

  },
  endTimestamp: (startTime) => {
    let x = parseISOString(startTime)
    x.setMilliseconds(x.getSeconds() + getRandomInt(0,36000000))
    return x.toISOString()
  },
}

function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}
const PlacesModel = {
  latitudeE7: () => {
    return  getRandomInt(-900000000,900000000)
  },
  longitudeE7: () => {
    return getRandomInt(-1800000000,1800000000)
  },

  address: () => { //Needs Improvement
    let string = ""
    let digits = "0123456789"
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let digitLength = getRandomInt(1,3)
    for (var i = 0; i<digitLength; i++){
      string += digits.charAt(Math.floor(Math.random() * 
      digits.length));
    }
    string += " "
    for (var y = 0; y<3; y++){
      let x = getRandomInt(5,20)
    for (var i = 0; i<x; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
      if (i===10&&x>14){
        string+= " "
      }
    }
    if (y+1!==3){
      string += "\n"
    }
    
    }


    let words = string.split("\n");
    for (var i = 0; i< words.length; i++){
      words[i] = words[i][0].toUpperCase() + words[i].toString().substring(1);
    }
    words = words.join("\n");
    words = words.split(" ");
    for (var i = 0; i< words.length; i++){
        words[i] = words[i][0].toUpperCase() + words[i].toString().substring(1);
      
    }
    string = words.join(" ");
    return string
    

  },
  name: () => {
    let string = ""
    let digits = "0123456789"
    let letters = "abcdefghijklmnopqrstuvwxyz"
    let digitLength = getRandomInt(1,3)
      let x = getRandomInt(5,20)
    for (var i = 0; i<x; i++){
      string += letters.charAt(Math.floor(Math.random() * 
      letters.length));
      if (i===10&&x>14){
        string+= " "
      }
    
    }
    let words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    string = words.join(" ");
    return string
  },
  locationConfidence: () => {
    return getRandomInt(0,100)
  },
  placeConfidence: () => {
    let confidence = ['HIGH_CONFIDENCE', "MEDIUM_CONFIDENCE", "LOW_CONFIDENCE"]
    return confidence[getRandomInt(0, confidence.length)-1]
  },
  visitConfidence: () => {
    return getRandomInt(0,100)
  },
  placeVisitType: () => {
    let types = ['SINGLE_PLACE', "TYPE_PLACE_2", "TYPE_PLACE_3"]
    return types[getRandomInt(0, types.length)-1]
  },
  placeVisitImportance: () => {
    let importance = ['MAIN', "PLACE_IMPORTANCE_2", "PLACE_IMPORTANCE_3"]
    return importance[getRandomInt(0, importance.length-1)]
  },
  startTimestamp: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1,23),getRandomInt(1,59),getRandomInt(1,59),getRandomInt(1,999))
    return finalDate.toISOString()

  },
  endTimestamp: (startTime) => {
    let x = parseISOString(startTime)
    x.setMilliseconds(x.getSeconds() + getRandomInt(0,36000000))
    return x.toISOString()
  },
}

const LocationsModel = {
  p_timestamp: (date) => {
    let x = new Date(date)
    return x.getTime()
  },
  p_datetime: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1,23),getRandomInt(1,59),getRandomInt(1,59),getRandomInt(1,999))
    return finalDate.toISOString()
  },
  p_latitude: () => {
    return  getRandomInt(-900000000,900000000) 
  },
  p_longitude: () => {
    return getRandomInt(-1800000000,1800000000)
  },
  p_accuracy: ()=> {
    return getRandomInt(0,100)
  },
  p_altitude: ()=> {
    return getRandomInt(0,1500)
  },
  p_verticalaccuracy: ()=> {
    return getRandomInt(0,100)
  },
  p_heading: ()=> {
    return getRandomInt(0,359)
  },
}

const ActivityModel = {
  p_timestamp: (date) => {
    let x = new Date(date)
    return x.getTime()
  },
  p_datetime: () => {
    let finalDate = new Date(0);
    let maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020,2050));
    finalDate.setMonth(getRandomInt(0,11));
    finalDate.setDate(1)
    maxMonthDate = finalDate
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0)
    finalDate.setDate(getRandomInt(1,maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(1,23),getRandomInt(1,59),getRandomInt(1,59),getRandomInt(1,999))
    return finalDate.toISOString()
  },
  p_type: () => {
    let types = ["STILL", "TYPE_2", "TYPE_3"]
    return types[getRandomInt(0,types.length)-1]
  },
  p_confidence: ()=> {
    return getRandomInt(0,100)
  },
}

const dataModels = {
  ActivityObject: {
    data: MOCK.ActivityObject,
    mockup: ActivityModel
  },
  Activity: {
    data: MOCK.Activity,
    mockup: ActivityModel
  },
  LocationObject: {
    data: MOCK.LocationObject,
    mockup: LocationsModel
  },
  Location: {
    data: MOCK.Location,
    mockup: LocationsModel
  },
  Places: {
    data: MOCK.Places,
    mockup: PlacesModel
  },
  Routes: {
    data: MOCK.Routes,
    mockup: RoutesModel
  },

};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}
export function getActivityMockupData(dataType, dataModel, dataDate) {
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
  mockupData.forEach((object)=>{
    [    
      "p_confidence",
      "p_type",
      "p_datetime",
      "p_timestamp"
    ].forEach((key, i) => {
      switch (key) {
        case "p_timestamp":
            object[key] = mockupModel[key](object["p_datetime"]);
            break;
        case "p_datetime":
        case "p_type":
        case "p_confidence":
          object[key] = mockupModel[key]();
          break;
      }
    });
  })


  
  return mockupData;
}

export function getLocationMockupData(dataType, dataModel, dataDate) {
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
  console.log(mockupData)
  mockupData.forEach((object)=>{
    [    
      "p_latitude",
      "p_longitude",
      "p_accuracy",
      "p_altitude",
      "p_verticalaccuracy",
      "p_heading",
      "p_datetime",
      "p_timestamp"
    ].forEach((key, i) => {
      switch (key) {
        case "p_timestamp":
            object[key] = mockupModel[key](object["p_datetime"]);
            break;
        case "p_datetime":
        case "p_latitude":
        case "p_longitude":
        case "p_accuracy":
        case "p_altitude":
        case "p_verticalaccuracy":
        case "p_heading":
          object[key] = mockupModel[key]();
          break;
      }
    });
  })


  
  return mockupData;
}

export function getPlacesMockupData(dataType, dataModel, dataDate) {
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
      "latitudeE7",
      "longitudeE7",
      "address",
      "name",
      "locationConfidence",
      "placeConfidence",
      "visitConfidence",
      "placeVisitType",
      "placeVisitImportance",
      "startTimestamp",
      "endTimestamp",
    ].forEach((key, i) => {
      switch (key) {
        case "endTimestamp":
          mockupData[key] = mockupModel[key](mockupData["startTimestamp"]);
            break;
        case "latitudeE7":
        case "longitudeE7":
        case "address":
        case  "name":
        case  "locationConfidence":
        case   "placeConfidence":
        case   "visitConfidence":
        case   "placeVisitType":
        case   "placeVisitImportance":
        case   "startTimestamp":
          mockupData[key] = mockupModel[key]();
          break;
      }
    });



  
  return mockupData;
}

export function getRoutesMockupData(dataType, dataModel, dataDate) {
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
      "activityType",
      "distance",
      "confidence",
      "endLocation",
      "startLocation",
      "startTimestamp",
      "endTimestamp",
    ].forEach((key, i) => {
      switch (key) {
        case "endTimestamp":
          mockupData[key] = mockupModel[key](mockupData["startTimestamp"]);
            break;
        case  "activityType":
        case   "distance":
        case   "confidence":
        case   "endLocation":
        case   "startLocation":
        case   "startTimestamp":
          mockupData[key] = mockupModel[key]();
          break;
      }
    });



  
  return mockupData;
}