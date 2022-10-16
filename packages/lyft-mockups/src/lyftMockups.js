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
  getRandomDateTime,
  randomUUID,
  randomCurrency
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/lyft-data";

const RideModel = {
  display_name: (ride_type) => {
    switch (ride_type){
      case "lyft":
        return "Lyft"
      case "lyft_line":
        return "Lyft Line"
      case "lyft_plus":
        return "Lyft Plus"
      case "lyft_luxsuv":
        return "Lyft Lux SUV"
      case "lyft_premier":
        return "Lyft Premier"
      case "lyft_lux":
        return "Lyft Lux"
      default: 
        return getRandomString(getRandomInt(5,15))
    }
  },
  ride_type: () => {
    return pickRandomValue(["lyft","lyft_line","lyft_plus", "lyft_luxsuv", "lyft_lux", "lyft_premier"])
  },
  eta_seconds: () => {
    return getRandomInt(0,1000)
  },
  estimated_cost_cents_max: () => {
    return getRandomInt(10,500)
  },
  estimated_cost_cents_min: () => {
    return getRandomInt(10,500)
  },
  estimated_distance_miles: () => {
    return getRandomInt(10,5000)
  },
  estimated_duration_seconds: () => {
    return getRandomInt(10,500)
  },
  cost_token: () => {
    return randomUUID()
  },
  is_valid_estimate: () => {
    return getRandBool()
  }
}

const RideTypesModel = {
  display_name: (ride_type) => {
    switch (ride_type){
      case "lyft":
        return "Lyft"
      case "lyft_line":
        return "Lyft Line"
      case "lyft_plus":
        return "Lyft Plus"
      case "lyft_luxsuv":
        return "Lyft Lux SUV"
      case "lyft_premier":
        return "Lyft Premier"
      case "lyft_lux":
        return "Lyft Lux"
      default: 
        return getRandomString(getRandomInt(5,15))
    }
  },
  ride_type: () => {
    return pickRandomValue(["lyft","lyft_line","lyft_plus", "lyft_luxsuv", "lyft_lux", "lyft_premier"])
  },
  image_url: () => {
    return "https://cdn.lyft.com/assets/car_plus.png"
  },
  pricing_details: () => {

    return {
      base_charge: getRandomInt(0,1000),
      cost_per_mile: getRandomInt(0,100),
      cost_per_minute: getRandomInt(0,100),
      cost_minimum: getRandomInt(0,700),
      trust_and_service: getRandomInt(0,300),
      currency: randomCurrency("SIMPLE WEST ISO-4217").code,
      cancel_penalty_amount: getRandomInt(0,1000)
    }
  },
  seats: () => {
    return getRandomInt(0,6)
  }
}

const NearbyDriversModel = {
  locations: () => {
    return {
      lat: 37.7746225247,
      lng: -122.455451083
    }
  },
  ride_type: () => {
    return pickRandomValue(["lyft","lyft_line","lyft_plus"])
  },
}

const dataModels = {
  DriverETA: {
    data: MOCK.driverETA,
    mockup: RideModel
  },
  NearbyDrivers: {
    data: MOCK.nearby_drivers,
    mockup: NearbyDriversModel
  },
  RideEstimates: {
    data: MOCK.rideEstimates,
    mockup: RideModel
  },
  RideTypes: {
    data: MOCK.rideTypes,
    mockup: RideTypesModel
  },
};

export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getDriverETAMockupData(dataType, dataModel, dataDate) {
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
  mockupData["eta_estimates"] = [mockupData["eta_estimates"][0]]
  for (var index = 0; index<mockupData["eta_estimates"].length;index++){
    [
      "ride_type",
      "display_name",
      "eta_seconds",
      "is_valid_estimate"
    ].forEach((key, i)=>{
      switch(key){
        case "display_name":
          mockupData["eta_estimates"][index][key] = mockupModel[key](mockupData["eta_estimates"][index]["ride_type"])
          break
        default:
          mockupData["eta_estimates"][index][key] = mockupModel[key]()
          break
      }
    })
  }

  
  return mockupData;
}

export function getNearbyDriversMockupData(dataType, dataModel, dataDate) {
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
  mockupData["nearby_drivers"] = [mockupData["nearby_drivers"][0]]
  mockupData["nearby_drivers"][0]["drivers"] = [mockupData["nearby_drivers"][0]["drivers"][0]]
  for (var index = 0; index<mockupData["nearby_drivers"][0]["drivers"].length;index++){
    [
      "locations", 
      "ride_type"
    ].forEach((key, i)=>{
      switch(key){
        case "locations":
          mockupData["nearby_drivers"][0]["drivers"][index][key] = [mockupData["nearby_drivers"][0]["drivers"][index][key][0]]
          mockupData["nearby_drivers"][0]["drivers"][index][key][0] = mockupModel[key]()
          break
        default:
          mockupData["nearby_drivers"][0]["drivers"][index][key] = mockupModel[key]()
          break
      }
    })
  }

  
  return mockupData;
}

export function getRideEstimatesMockupData(dataType, dataModel, dataDate) {
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
  mockupData["cost_estimates"] = [mockupData["cost_estimates"][0]]
  for (var index = 0; index<mockupData["cost_estimates"].length;index++){
    [
      "ride_type",
      "display_name",
      "estimated_cost_cents_max",
      "estimated_cost_cents_min",
      "estimated_distance_miles",
      "estimated_duration_seconds",
      "cost_token",
      "is_valid_estimate"
    ].forEach((key, i)=>{
      switch(key){
        case "display_name":
          mockupData["cost_estimates"][index][key] = mockupModel[key](mockupData["cost_estimates"][index]["ride_type"])
          break
        default:
          mockupData["cost_estimates"][index][key] = mockupModel[key]()
          break
      }
    })
  }

  
  return mockupData;
}

export function getRideTypesMockupData(dataType, dataModel, dataDate) {
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
  mockupData["ride_types"] = [mockupData["ride_types"][0]]
  for (var index = 0; index<mockupData["ride_types"].length;index++){
    [
      "ride_type",
      "display_name",
      "image_url",
      "pricing_details",
      "seats"
    ].forEach((key, i)=>{
      switch(key){
        case "display_name":
          mockupData["ride_types"][index][key] = mockupModel[key](mockupData["ride_types"][index]["ride_type"])
          break
        default:
          mockupData["ride_types"][index][key] = mockupModel[key]()
          break
      }
    })
  }

  
  return mockupData;
}
