import {
  getRandomString,
  getRandomDateTime,
  pickRandomValue,
  getRandBool,
  getRandomInt,
  getRandomFloat,
  parseSecondsToString,
  
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/runkeeper-data";

const CardioActivityModel = {
  activityId: () => {
    return `${getRandomString(8)}-${getRandomString(4)}-${getRandomString(4)}-${getRandomString(4)}-${getRandomString(12)}`;
  },
  date: () => {
    return getRandomDateTime('YYYY-MM-DD HH:MM:SS');
  },
  type: () => {
    const activityTypes = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Strength Training', 'Circuit Training', 'Core Strength', 'Arc Trainer', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Yoga', 'Pilates', 'CrossFit', 'Spinning', 'Zumba', 'Barre', 'Group Workout', 'Dance', 'Bootcamp', 'Boxing / MMA', 'Meditation', 'Stairmaster / Stepwell', 'Sports', 'Other'];
    return pickRandomValue(activityTypes);
  },
  routeName: () => {
    const firstTitle = ['daily', 'favourite', 'country', 'scenic'];
    const secondTitle = ['hike', 'trail', 'track', 'street'];
    return getRandBool()? `${getRandomInt(1, 9999)} ${pickRandomValue(firstTitle)} ${pickRandomValue(secondTitle)}` : null;
  },
  distance: (activityType) => {
    const ActivitySubType = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Other'];
    if(ActivitySubType.includes(activityType)) {
      return getRandomFloat(1, 20);
    } else {
      return 0;
    }
  },
  duration: (activityType, totalDistance, averagePace) => {
    const ActivitySubType = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Other'];
    if(ActivitySubType.includes(activityType)) {
      const paceSplit = averagePace.split(':');
      const convertedPace = (parseInt(paceSplit[0]) * 60) + parseInt(paceSplit[1]);
      return parseSecondsToString(totalDistance * convertedPace);
    } else {
      return parseSecondsToString(getRandomInt(600, 9000));
    }
  },
  averagePace: (activityType) => {
    const ActivitySubType = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Other'];
    if(ActivitySubType.includes(activityType)) {
      return parseSecondsToString(getRandomInt(336, 720));
    } else {
      return null;
    }
  },
  averageSpeed: (activityType, totalDistance, totalDuration) => {
    const ActivitySubType = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Other'];
    if(ActivitySubType.includes(activityType)) {
      const timeSplit = totalDuration.split(':');
      var convertedTime = 0;
      if (timeSplit.length == 3) {
        convertedTime = ((parseInt(timeSplit[0]) * 3600) + (parseInt(timeSplit[1]) * 60) + parseInt(timeSplit[2]));
      } else if (timeSplit.length == 2) {
        convertedTime = ((parseInt(timeSplit[0]) * 60) + parseInt(timeSplit[1]));
      }
      return parseFloat((totalDistance/(convertedTime/3600)).toFixed(2));
    } else {
      return null;
    }
  },
  caloriesBurned: (activityType, totalDistance, totalDuration) => {
    const ActivitySubType = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Other'];
    if(ActivitySubType.includes(activityType)) {
      return Math.ceil(getRandomInt(60, 110) * totalDistance);
    } else {
      const timeSplit = totalDuration.split(':');
      var convertedTime = 0;
      if (timeSplit.length == 3) {
        convertedTime = ((parseInt(timeSplit[0]) * 3600) + (parseInt(timeSplit[1]) * 60) + parseInt(timeSplit[2]));
      } else if (timeSplit.length == 2) {
        convertedTime = ((parseInt(timeSplit[0]) * 60) + parseInt(timeSplit[1]));
      }
      return Math.ceil(getRandomInt(60, 110) * (convertedTime/1800));
    }
  },
  climb: (activityType) => {
    const ActivitySubType = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Other'];
    if(ActivitySubType.includes(activityType)) {
      return getRandomInt(0, 40);
    } else {
      return 0;
    }
  },
  averageHeartRate: () => {
    return getRandomInt(100, 180);
  },
  friendsTagged: () => {
    return null;
  },
  Notes: () => {
    return getRandomString(25);
  },
  GPXFile: (activityType, startDate) => {
    const ActivitySubType = ['Running', 'Walking', 'Cycling', 'Swimming', 'Elliptical', 'Rowing', 'Hiking', 'Mountain Biking', 'Skating', 'Nordic Walking', 'Cross-Country Skiing', 'Downhill Skiing', 'Snowboarding', 'Wheelchair', 'Other'];
    if(ActivitySubType.includes(activityType)) {
      return `${startDate.split(' ')[0]}-${startDate.split(' ')[1].split(':').join('')}.gpx`;
    } else {
      return null;
    }
  },
};

const dataModels = {
  CardioActivity: {
    data: MOCK['cardioActivity'],
    mockup: CardioActivityModel,
  }
};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
};

export function getCardioActivityMockupData(dataType, dataModel, dataDate) {
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

  console.log(mockupData);
  [
    "date",
    "activityId",
    "type",
    "routeName",
    "distance",
    "averagePace",
    "duration",
    "averageSpeed",
    "caloriesBurned",
    "climb",
    "averageHeartRate",
    "friendsTagged",
    "Notes",
    "GPXFile"
  ].forEach((key, i) => {
    switch (key) {
      case "activityId":
        mockupData[key] = mockupModel[key]();
        break;
      case "date":
        mockupData[key] = dataDate + ' 12:59:59';
        break;
      case "type":
        mockupData[key] = mockupModel[key]();
        break;
      case "routeName":
        mockupData[key] = mockupModel[key]();
        break;
      case "distance":
        mockupData[key] = mockupModel[key](
          mockupData['type']
        );
        break;
      case "averagePace":
        mockupData[key] = mockupModel[key](
          mockupData['type']
        );
        break;
      case "duration":
        mockupData[key] = mockupModel[key](
          mockupData['type'], 
          mockupData['distance'], 
          mockupData['averagePace']
        );
        break;
      case "averageSpeed":
        mockupData[key] = mockupModel[key](
          mockupData['type'], 
          mockupData['distance'], 
          mockupData['duration']
        );
        break;
      case "caloriesBurned":
        mockupData[key] = mockupModel[key](
          mockupData['type'], 
          mockupData['distance'],
          mockupData['duration']
        );
        break;
      case "climb":
        mockupData[key] = mockupModel[key](
          mockupData['type']
        );
        break;
      case "averageHeartRate":
        mockupData[key] = mockupModel[key]();
        break;
      case "friendsTagged":
        mockupData[key] = mockupModel[key]();
        break;
      case "Notes":
        mockupData[key] = mockupModel[key]();
        break;
      case "GPXFile":
        mockupData[key] = mockupModel[key](
          mockupData['type'], 
          mockupData['date']
        );
        break;
    }
  });

  return mockupData;
}