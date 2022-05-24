function getRandomInt(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

const Activity = ["p_timestamp\tp_datetime\tp_type\tp_confidence", "1417576831121\t2014-12-03T03:20:31.121Z\tSTILL\t87", "1417576831121\t2014-12-03T03:20:31.121Z\tUNKNOWN\t10", "1417576831121\t2014-12-03T03:20:31.121Z\tIN_VEHICLE\t3", "1417577043477\t2014-12-03T03:24:03.477Z\tSTILL\t100", "1417577223507\t2014-12-03T03:27:03.507Z\tSTILL\t100", "1417577403479\t2014-12-03T03:30:03.479Z\tSTILL\t100", "1417577584083\t2014-12-03T03:33:04.083Z\tSTILL\t100"];

const Location = ["p_timestamp\tp_datetime\tp_latitude\tp_longitude\tp_accuracy\tp_altitude\tp_verticalaccuracy\tp_heading", "1417576828681\t2014-12-03T03:20:28.681Z\t602447266\t247573079\t32\t111\t1\t230", "1417579369426\t2014-12-03T04:02:49.426Z\t602446995\t247574923\t64\t111\t1\t200"];

const Places = {
  latitudeE7: 606224118,
  longitudeE7: 248047081,
  address: "Mäkikuumolantie 3\n05800 Hyvinkää\nSuomi",
  name: "Lidl Sveitsin Portaali",
  locationConfidence: 80,
  placeConfidence: "HIGH_CONFIDENCE",
  visitConfidence: 88,
  placeVisitType: "SINGLE_PLACE",
  placeVisitImportance: "MAIN",
  startTimestamp: "2022-02-01T09:24:24.250Z",
  endTimestamp: "2022-02-01T09:40:22.633Z"
};

const Routes = {
  startLocation: {
    latitudeE7: 605841426,
    longitudeE7: 248303862
  },
  endLocation: {
    latitudeE7: 606216471,
    longitudeE7: 248040694
  },
  distance: 4410,
  confidence: "HIGH",
  activityType: "IN_PASSENGER_VEHICLE",
  startTimestamp: "2022-02-01T09:12:21.890Z",
  endTimestamp: "2022-02-01T09:24:24.250Z"
};

const ActivityObject = [{
  p_timestamp: 1417576831121,
  p_datetime: "2014-12-03T03:20:31.121Z",
  p_type: "STILL",
  p_confidence: 87
}, {
  p_timestamp: 1417576831121,
  p_datetime: "2014-12-03T03:20:31.121Z",
  p_type: "UNKNOWN",
  p_confidence: 10
}, {
  p_timestamp: 1417576831121,
  p_datetime: "2014-12-03T03:20:31.121Z",
  p_type: "IN_VEHICLE",
  p_confidence: 3
}, {
  p_timestamp: 1417577043477,
  p_datetime: "2014-12-03T03:24:03.477Z",
  p_type: "STILL",
  p_confidence: 100
}, {
  p_timestamp: 1417577223507,
  p_datetime: "2014-12-03T03:27:03.507Z",
  p_type: "STILL",
  p_confidence: 100
}, {
  p_timestamp: 1417577403479,
  p_datetime: "2014-12-03T03:30:03.479Z",
  p_type: "STILL",
  p_confidence: 100
}, {
  p_timestamp: 1417577584083,
  p_datetime: "2014-12-03T03:33:04.083Z",
  p_type: "STILL",
  p_confidence: 100
}];

const LocationObject = [{
  p_timestamp: 1417576828681,
  p_datetime: "2014-12-03T03:20:28.681Z",
  p_latitude: 602447266,
  p_longitude: 247573079,
  p_accuracy: 32,
  p_altitude: 111,
  p_verticalaccuracy: 1,
  p_heading: 230
}, {
  p_timestamp: 1417579369426,
  p_datetime: "2014-12-03T04:02:49.426Z",
  p_latitude: 602446995,
  p_longitude: 247574923,
  p_accuracy: 64,
  p_altitude: 111,
  p_verticalaccuracy: 1,
  p_heading: 200
}];

//
const Data = {
  Activity,
  Location,
  Places,
  Routes,
  ActivityObject,
  LocationObject
};

var RoutesModel = {
  startLocation: function startLocation() {
    return {
      latitudeE7: getRandomInt(-900000000, 900000000),
      longitudeE7: getRandomInt(-1800000000, 1800000000)
    };
  },
  endLocation: function endLocation() {
    return {
      latitudeE7: getRandomInt(-900000000, 900000000),
      longitudeE7: getRandomInt(-1800000000, 1800000000)
    };
  },
  distance: function distance() {
    return getRandomInt(0, 9999);
  },
  confidence: function confidence() {
    var categories = ["LOW", "MEDIUM", "HIGH"];
    return categories[getRandomInt(0, categories.length) - 1];
  },
  activityType: function activityType() {
    var types = ["IN_PASSENGER_VEHICLE", "IN_BUS", "IN_TRAIN"];
    return types[getRandomInt(0, types.length) - 1];
  },
  startTimestamp: function startTimestamp() {
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
  endTimestamp: function endTimestamp(startTime) {
    var x = parseISOString(startTime);
    x.setMilliseconds(x.getSeconds() + getRandomInt(0, 36000000));
    return x.toISOString();
  }
};

function parseISOString(s) {
  var b = s.split(/\D+/);
  return new Date(Date.UTC(b[0], --b[1], b[2], b[3], b[4], b[5], b[6]));
}

var PlacesModel = {
  latitudeE7: function latitudeE7() {
    return getRandomInt(-900000000, 900000000);
  },
  longitudeE7: function longitudeE7() {
    return getRandomInt(-1800000000, 1800000000);
  },
  address: function address() {
    //Needs Improvement
    var string = "";
    var digits = "0123456789";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var digitLength = getRandomInt(1, 3);

    for (var i = 0; i < digitLength; i++) {
      string += digits.charAt(Math.floor(Math.random() * digits.length));
    }

    string += " ";

    for (var y = 0; y < 3; y++) {
      var x = getRandomInt(5, 20);

      for (var i = 0; i < x; i++) {
        string += letters.charAt(Math.floor(Math.random() * letters.length));

        if (i === 10 && x > 14) {
          string += " ";
        }
      }

      if (y + 1 !== 3) {
        string += "\n";
      }
    }

    var words = string.split("\n");

    for (var i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].toString().substring(1);
    }

    words = words.join("\n");
    words = words.split(" ");

    for (var i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].toString().substring(1);
    }

    string = words.join(" ");
    return string;
  },
  name: function name() {
    var string = "";
    var letters = "abcdefghijklmnopqrstuvwxyz";
    var x = getRandomInt(5, 20);

    for (var i = 0; i < x; i++) {
      string += letters.charAt(Math.floor(Math.random() * letters.length));

      if (i === 10 && x > 14) {
        string += " ";
      }
    }

    var words = string.split(" ");

    for (var _i = 0; _i < words.length; _i++) {
      words[_i] = words[_i][0].toUpperCase() + words[_i].substring(1);
    }

    string = words.join(" ");
    return string;
  },
  locationConfidence: function locationConfidence() {
    return getRandomInt(0, 100);
  },
  placeConfidence: function placeConfidence() {
    var confidence = ['HIGH_CONFIDENCE', "MEDIUM_CONFIDENCE", "LOW_CONFIDENCE"];
    return confidence[getRandomInt(0, confidence.length) - 1];
  },
  visitConfidence: function visitConfidence() {
    return getRandomInt(0, 100);
  },
  placeVisitType: function placeVisitType() {
    var types = ['SINGLE_PLACE', "TYPE_PLACE_2", "TYPE_PLACE_3"];
    return types[getRandomInt(0, types.length) - 1];
  },
  placeVisitImportance: function placeVisitImportance() {
    var importance = ['MAIN', "PLACE_IMPORTANCE_2", "PLACE_IMPORTANCE_3"];
    return importance[getRandomInt(0, importance.length - 1)];
  },
  startTimestamp: function startTimestamp() {
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
  endTimestamp: function endTimestamp(startTime) {
    var x = parseISOString(startTime);
    x.setMilliseconds(x.getSeconds() + getRandomInt(0, 36000000));
    return x.toISOString();
  }
};
var LocationsModel = {
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
  p_latitude: function p_latitude() {
    return getRandomInt(-900000000, 900000000);
  },
  p_longitude: function p_longitude() {
    return getRandomInt(-1800000000, 1800000000);
  },
  p_accuracy: function p_accuracy() {
    return getRandomInt(0, 100);
  },
  p_altitude: function p_altitude() {
    return getRandomInt(0, 1500);
  },
  p_verticalaccuracy: function p_verticalaccuracy() {
    return getRandomInt(0, 100);
  },
  p_heading: function p_heading() {
    return getRandomInt(0, 359);
  }
};
var ActivityModel = {
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
  p_type: function p_type() {
    var types = ["STILL", "TYPE_2", "TYPE_3"];
    return types[getRandomInt(0, types.length) - 1];
  },
  p_confidence: function p_confidence() {
    return getRandomInt(0, 100);
  }
};
var dataModels = {
  ActivityObject: {
    data: Data.ActivityObject,
    mockup: ActivityModel
  },
  Activity: {
    data: Data.Activity,
    mockup: ActivityModel
  },
  LocationObject: {
    data: Data.LocationObject,
    mockup: LocationsModel
  },
  Location: {
    data: Data.Location,
    mockup: LocationsModel
  },
  Places: {
    data: Data.Places,
    mockup: PlacesModel
  },
  Routes: {
    data: Data.Routes,
    mockup: RoutesModel
  }
};
function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}
function getActivityMockupData(dataType, dataModel, dataDate) {
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var length = dataModels[dataModel].data.length;
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    var final = [];

    for (var i = 1; i < length; i++) {
      var mockupDataRow = dataModels[dataModel].data[1].split("\t");
      mockupDataHeader.forEach(function (k, i) {
        mockupData[k] = mockupDataRow[i];
      });
      final.push(Object.assign({}, mockupData));
    }

    mockupData = final;
  }

  mockupData.forEach(function (object) {
    ["p_confidence", "p_type", "p_datetime", "p_timestamp"].forEach(function (key, i) {
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
  });
  return mockupData;
}
function getLocationMockupData(dataType, dataModel, dataDate) {
  var mockupData = {};
  var mockupModel = dataModels[dataModel].mockup;

  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }

  if (dataType === "ASYNC") {
    var length = dataModels[dataModel].data.length;
    var mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    var final = [];

    for (var i = 1; i < length; i++) {
      var mockupDataRow = dataModels[dataModel].data[1].split("\t");
      mockupDataHeader.forEach(function (k, i) {
        mockupData[k] = mockupDataRow[i];
      });
      final.push(Object.assign({}, mockupData));
    }

    mockupData = final;
  }

  console.log(mockupData);
  mockupData.forEach(function (object) {
    ["p_latitude", "p_longitude", "p_accuracy", "p_altitude", "p_verticalaccuracy", "p_heading", "p_datetime", "p_timestamp"].forEach(function (key, i) {
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
  });
  return mockupData;
}
function getPlacesMockupData(dataType, dataModel, dataDate) {
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

  ["latitudeE7", "longitudeE7", "address", "name", "locationConfidence", "placeConfidence", "visitConfidence", "placeVisitType", "placeVisitImportance", "startTimestamp", "endTimestamp"].forEach(function (key, i) {
    switch (key) {
      case "endTimestamp":
        mockupData[key] = mockupModel[key](mockupData["startTimestamp"]);
        break;

      case "latitudeE7":
      case "longitudeE7":
      case "address":
      case "name":
      case "locationConfidence":
      case "placeConfidence":
      case "visitConfidence":
      case "placeVisitType":
      case "placeVisitImportance":
      case "startTimestamp":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}
function getRoutesMockupData(dataType, dataModel, dataDate) {
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

  ["activityType", "distance", "confidence", "endLocation", "startLocation", "startTimestamp", "endTimestamp"].forEach(function (key, i) {
    switch (key) {
      case "endTimestamp":
        mockupData[key] = mockupModel[key](mockupData["startTimestamp"]);
        break;

      case "activityType":
      case "distance":
      case "confidence":
      case "endLocation":
      case "startLocation":
      case "startTimestamp":
        mockupData[key] = mockupModel[key]();
        break;
    }
  });
  return mockupData;
}

export { getActivityMockupData, getLocationMockupData, getModelCSVHeader, getPlacesMockupData, getRoutesMockupData };
