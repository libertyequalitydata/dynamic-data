import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/sensor-bno055-data";

const RawDataModel = {
  Time: (prevValue, index, counter) => {
        switch (counter) {
          case 1:
            switch (getRandomInt(0,10)) {
              case 2:
              case 3:
              case 4:
              case 5:
              case 6:
              case 7:
              case 8:
              case 9:
              case 10:
                return prevValue
            }
          case 2:
            let date = new Date(0);
            let str = prevValue.split(":");
            date.setHours(str[0])
            date.setMinutes(str[1])
            date.setSeconds(str[2].split(".")[0])
            date.setMilliseconds(str[2].split(".")[1])
            date.setTime(date.getTime() + getRandomInt(20, 80))
            return date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "." + date.getMilliseconds()
          default:
            return prevValue
        }
  },
  
  QX: (prevValue) => {
    let add = (getRandomInt(-664, 616))/10000
    if (prevValue+add>= 0.3043){
      if (prevValue === 0.3043){
        return parseFloat(Number(prevValue + (getRandomInt(-664, 0))/10000).toFixed(4));
      } else {
        return 0.3043
      }
    } else if (prevValue+add<= -0.5874){
      if (prevValue === -0.5874){
        return parseFloat(Number(prevValue + (getRandomInt(0, 616))/10000).toFixed(4));
      } else {
        return -0.5874
      }
    } else {
      return parseFloat(Number(prevValue + add).toFixed(4));
    }
  },
  QY: (prevValue) => {
    let add = (getRandomInt(-664, 616))/10000
    if (prevValue+add>= 0.3367){
      if (prevValue === 0.3367){
        return parseFloat(Number(prevValue + (getRandomInt(-664, 0))/10000).toFixed(4));
      } else {
        return 0.3367
      }
    } else if (prevValue+add<= -0.3602){
      if (prevValue === -0.3602){
        return parseFloat(Number(prevValue + (getRandomInt(0, 616))/10000).toFixed(4));
      } else {
        return -0.3602
      }
    } else {
      return parseFloat(Number(prevValue + add).toFixed(4));
    }
  },
  QZ: (prevValue) => {
    let add = (getRandomInt(-664, 616))/10000
    if (prevValue+add>= 0.9376){
      if (prevValue === 0.9376){
        return parseFloat(Number(prevValue + (getRandomInt(-664, 0))/10000).toFixed(4));
      } else {
        return 0.9376
      }
    } else if (prevValue+add<= 0.5724){
      if (prevValue === 0.5724){
        return parseFloat(Number(prevValue + (getRandomInt(0, 616))/10000).toFixed(4));
      } else {
        return 0.5724
      }
    } else {
      return parseFloat(Number(prevValue + add).toFixed(4));
    }
  },
  QW: (prevValue) => {
    let add = (getRandomInt(-664, 616))/10000
    if (prevValue+add>= 0.8148){
      if (prevValue === 0.8148){
        return parseFloat(Number(prevValue + (getRandomInt(-664, 0))/10000).toFixed(4));
      } else {
        return 0.8148
      }
    } else if (prevValue+add<= 0.3270){
      if (prevValue === 0.3270){
        return parseFloat(Number(prevValue + (getRandomInt(0, 616))/10000).toFixed(4));
      } else {
        return 0.3270
      }
    } else {
      return parseFloat(Number(prevValue + add).toFixed(4));
    }
  },
  AX: (prevValue) => {
    let add = (getRandomInt(-371, 384))/100
    if (prevValue+add>= 8.61){
      if (prevValue === 8.61){
        return parseFloat(Number(prevValue + (getRandomInt(-371, 0))/100).toFixed(2));
      } else {
        return 8.61
      }
    } else if (prevValue+add<= -12.89){
      if (prevValue === -12.89){
        return parseFloat(Number(prevValue + (getRandomInt(0, 384))/100).toFixed(2));
      } else {
        return -12.89
      }
    } else {
      return parseFloat(Number(prevValue + add).toFixed(2));
    }
  },
  AY: (prevValue) => {
    let add = (getRandomInt(-416, 433))/100
    if (prevValue+add>= 11.29){
      if (prevValue === 11.29){
        return parseFloat(Number(prevValue + (getRandomInt(-416, 0))/100).toFixed(2));
      } else {
        return 11.29
      }
    } else if (prevValue+add<= -4.3){
      if (prevValue === -4.3){
        return parseFloat(Number(prevValue + (getRandomInt(0, 433))/100).toFixed(2));
      } else {
        return -4.3
      }
    } else {
      return parseFloat(Number(prevValue + add).toFixed(2));
    }
  },
  AZ: (prevValue) => {
    let add = (getRandomInt(-610, 584))/100
    if (prevValue+add>= 10.12){
      if (prevValue === 10.12){
        return parseFloat(Number(prevValue + (getRandomInt(-610, 0))/100).toFixed(2));
      } else {
        return 10.12
      }
    } else if (prevValue+add<= -5.2){
      if (prevValue === -5.2){
        return parseFloat(Number(prevValue + (getRandomInt(0, 584))/100).toFixed(2));
      } else {
        return -5.2
      }
    } else {
      return parseFloat(Number(prevValue + add).toFixed(2));
    }
  },
}

const RawDataSetupModel = {
  Time: () => {
    let hours = getRandomInt(0,24)-1
    let minutes = getRandomInt(0,60)-1
    let seconds = getRandomInt(0,60000)-1
    return hours + ":" + minutes + ":" + Number(seconds/1000).toFixed(3)
  },
  QX: () => {
    return parseFloat(Number(getRandomInt(-5874,3043)/10000).toFixed(4))
  },
  QY: () => {
    return parseFloat(Number(getRandomInt(-3602,3367)/10000).toFixed(4))
  },
  QZ: () => {
    return parseFloat(Number(getRandomInt(5724,9376)/10000).toFixed(4))
  },
  QW: () => {
    return parseFloat(Number(getRandomInt(3270,8148)/10000).toFixed(4))
  },
  AX: () => {
    return parseFloat(Number(getRandomInt(-1289,861)/100).toFixed(2))
  },
  AY: () => {
    return parseFloat(Number(getRandomInt(-430,1129)/100).toFixed(2))
  },
  AZ: () => {
    return parseFloat(Number(getRandomInt(-520,1012)/100).toFixed(2))
  },
}

const dataModels = {
  RawDataSync: {
    data: MOCK.RawSync,
    mockup: RawDataModel
  },
  RawDataAsync: {
    data: MOCK.RawAsync,
    mockup: RawDataModel
  },
};



export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getRawData(dataType, dataModel, dataDate) {
  let mockupData = [{}];
  const mockupModel = dataModels[dataModel].mockup;
  if (dataType === "SYNC") {
    mockupData = dataModels[dataModel].data;
  }
  if (dataType === "ASYNC") {
    const mockupDataRow = dataModels[dataModel].data[1].split("\t");
    const mockupDataHeader = dataModels[dataModel].data[0].split("\t");
    mockupDataHeader.forEach((k, i) => {
      switch (k) {
        case "Time":
          mockupData[0][k] = mockupDataRow[i];
          break;
        default:
          mockupData[0][k] = parseFloat(mockupDataRow[i]);
          break;
      }
    });
  }
  let counter = 0;
  let prevValue = {};
  for (var i = 0; i<300;i++){
    mockupData.push(Object.assign({}, mockupData[0]))
  }
  
  mockupData.forEach((record, i)=>{
    if (i> 0){
      prevValue = mockupData[i-1];
      
      [
        "Time",
        "QX",
        "QY",
        "QZ",
        "QW",
        "AX",
        "AY",
        "AZ"
      ].forEach((key) => {
          
          switch (key) {
            case "Time":
              record[key] = mockupModel[key](prevValue["Time"], i, counter);
              break;
            default:
              record[key] = mockupModel[key](prevValue[key]);
              break;
          }
        });
        if (prevValue["Time"] === record["Time"]){
          counter += 1;
        } else {
          counter = 0
        }
      
      } else {
        [
          "Time",
          "QX",
          "QY",
          "QZ",
          "QW",
          "AX",
          "AY",
          "AZ"
        ].forEach((key) => {
            switch (key) {
              default:
                record[key] = RawDataSetupModel[key]();
                break;
            }
          });
      }
    });

    return mockupData;
  }