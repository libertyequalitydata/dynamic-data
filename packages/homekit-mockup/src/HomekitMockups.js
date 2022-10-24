import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/homekit-data";
//https://www.geneheritage.com/blog/what-is-raw-dna-data.html

const HomeModel = {
  delegate: () => {
    return null
  },
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  uniqueIdentifier: () => {
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
  isPrimary: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  supportsAddingNetworkRouter: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  homeHubState: () => {
    return getRandomInt(0,2)
  },
  
}

const RoomModel = {
  name: ()=> {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  uniqueIdentifier: ()=> {
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
  } 
}

const ZonesModel = {
  name: ()=> {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  uniqueIdentifier: ()=> {
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
  } ,
}

const AccessoryModel = {
  delegate: () => {
    return null
  }, 
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  uniqueIdentifier: () => {
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
  category: () => {
    let categories = [
      {
        "category": "HMAccessoryCategoryTypeLightbulb",
        "descENG": "A lightbulb accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeOutlet",
        "descENG": "An outlet accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeProgrammableSwitch",
        "descENG": "A programmable switch accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeSwitch",
        "descENG": "A switch accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeFan",
        "descENG": "A fan accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeAirPurifier",
        "descENG": "An air purifier accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeThermostat",
        "descENG": "A thermostat accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeAirConditioner",
        "descENG": "An air conditioner accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeAirDehumidifier",
        "descENG": "A dehumidifier accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeAirHeater",
        "descENG": "An air heater accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeAirHumidifier",
        "descENG": "A humidifier accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeWindow",
        "descENG": "A window accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeWindowCovering",
        "descENG": "A window covering accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeDoor",
        "descENG": "A door accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeDoorLock",
        "descENG": "A door lock accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeGarageDoorOpener",
        "descENG": "A garage door opener accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeVideoDoorbell",
        "descENG": "A video doorbell accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeSensor",
        "descENG": "A sensor accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeSecuritySystem",
        "descENG": "A security system accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeIPCamera",
        "descENG": "A networked camera accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeSprinkler",
        "descENG": "A sprinkler system accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeFaucet",
        "descENG": "A faucet accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeShowerHead",
        "descENG": "A shower head accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeBridge",
        "descENG": "A bridge accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeRangeExtender",
        "descENG": "A range extender accessory."
      },
      {
        "category": "HMAccessoryCategoryTypeOther",
        "descENG": "An uncategorized accessory."
      }
    ]
    let index = getRandomInt(0,categories.length-1)
    return {
      "categoryType": categories[index]["category"],
      "localizedDescription": categories[index]["descENG"]
    }
  },
  isReachable: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  isBlocked: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  supportsIdentify: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  isBridged: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  uniqueIdentifierForBridgedAccessories: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return null
      case 2:
        return []
    }
  },
  firmwareVersion: () => {
    return getRandomInt(0,10).toString() + "." + getRandomInt(0,10).toString() + "." +getRandomInt(0,10).toString()
  }, //Optional
  manufacturer: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  }, //Optional
  model: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  }
}

const ProfileModel = {
  uniqueIdentifier: () => {
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
  }
} 

const ServicesModel = {
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  uniqueIdentifier: () => {
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
  serviceType: () => {
    let types = ["HMServiceTypeLightbulb",
    "HMServiceTypeLightSensor",
    "HMServiceTypeSwitch",
    "HMServiceTypeBattery",
    "HMServiceTypeOutlet",
    "HMServiceTypeStatefulProgrammableSwitch",
    "HMServiceTypeStatelessProgrammableSwitch",
    "HMServiceTypeAirPurifier",
    "HMServiceTypeAirQualitySensor",
    "HMServiceTypeCarbonDioxideSensor",
    "HMServiceTypeCarbonMonoxideSensor",
    "HMServiceTypeSmokeSensor",
    "HMServiceTypeHeaterCooler",
    "HMServiceTypeTemperatureSensor",
    "HMServiceTypeThermostat",
    "HMServiceTypeFan",
    "HMServiceTypeFilterMaintenance",
    "HMServiceTypeHumidifierDehumidifier",
    "HMServiceTypeHumiditySensor",
    "HMServiceTypeVentilationFan",
    "HMServiceTypeWindow",
    "HMServiceTypeWindowCovering",
    "HMServiceTypeSlats",
    "HMServiceTypeFaucet",
    "HMServiceTypeValve",
    "HMServiceTypeIrrigationSystem",
    "HMServiceTypeLeakSensor",
    "HMServiceTypeDoor",
    "HMServiceTypeDoorbell",
    "HMServiceTypeGarageDoorOpener",
    "HMServiceTypeLockManagement",
    "HMServiceTypeLockMechanism",
    "HMServiceTypeMotionSensor",
    "HMServiceTypeOccupancySensor",
    "HMServiceTypeSecuritySystem",
    "HMServiceTypeContactSensor",
    "HMServiceTypeCameraControl",
    "HMServiceTypeCameraRTPStreamManagement",
    "HMServiceTypeMicrophone",
    "HMServiceTypeSpeaker",
    "HMServiceTypeLabel",
    "HMServiceTypeAccessoryInformation"
  ]
  return types[getRandomInt(0,types.length-1)]
  },
  localizedDescription: (serviceType) => {
    switch(serviceType){
    case "HMServiceTypeLightbulb":
      return "A light bulb service." 
    case "HMServiceTypeLightSensor":
      return "A light sensor service."
    case "HMServiceTypeSwitch":
      return "A switch service."
    case "HMServiceTypeBattery":
      return "A battery service."
    case "HMServiceTypeOutlet":
      return "An outlet service."
    case "HMServiceTypeStatefulProgrammableSwitch":
      return "A stateful programmable switch service."
    case "HMServiceTypeStatelessProgrammableSwitch":
      return "A stateless programmable switch service."
    case "HMServiceTypeAirPurifier":
      return "An air purifier service."
    case "HMServiceTypeAirQualitySensor":
      return "An air quality sensor service."
    case "HMServiceTypeCarbonDioxideSensor":
      return "A carbon dioxide sensor service."
    case "HMServiceTypeCarbonMonoxideSensor":
      return "A carbon monoxide sensor service."
    case "HMServiceTypeSmokeSensor":
      return "A smoke sensor service."
    case "HMServiceTypeHeaterCooler":
      return "A heater or cooler service."
    case "HMServiceTypeTemperatureSensor":
      return "A temperature sensor service."
    case "HMServiceTypeThermostat":
      return "A thermostat service."
    case "HMServiceTypeFan":
      return "A fan service."
    case "HMServiceTypeFilterMaintenance":
      return "A filter maintenance service."
    case "HMServiceTypeHumidifierDehumidifier":
      return "A humidifier or dehumidifier service."
    case "HMServiceTypeHumiditySensor":
      return "A humidity sensor service."
    case "HMServiceTypeVentilationFan":
      return "A ventilation fan service."
    case "HMServiceTypeWindow":
      return "A window service."
    case "HMServiceTypeWindowCovering":
      return "A window covering service."
    case "HMServiceTypeSlats":
      return "A slats service."
    case "HMServiceTypeFaucet":
      return "A faucet service."
    case "HMServiceTypeValve":
      return "A valve service."
    case "HMServiceTypeIrrigationSystem":
      return "An irrigation system service."
    case "HMServiceTypeLeakSensor":
      return "A leak sensor service."
    case "HMServiceTypeDoor":
      return "A door service."
    case "HMServiceTypeDoorbell":
      return "A doorbell service."
    case "HMServiceTypeGarageDoorOpener":
      return "A garage door opener service."
    case "HMServiceTypeLockManagement":
      return "A lock management service."
    case "HMServiceTypeLockMechanism":
      return "A lock mechanism service."
    case "HMServiceTypeMotionSensor":
      return "A motion sensor service."
    case "HMServiceTypeOccupancySensor":
      return "An occupancy sensor service."
    case "HMServiceTypeSecuritySystem":
      return "A security system service."
    case "HMServiceTypeContactSensor":
      return "A contact sensor service."
    case "HMServiceTypeCameraControl":
      return "A camera control service."
    case "HMServiceTypeCameraRTPStreamManagement":
      return "A stream management service."
    case "HMServiceTypeMicrophone":
      return "A microphone service."
    case "HMServiceTypeSpeaker":
      return "An audio speaker service."
    case "HMServiceTypeLabel":
      return "A label namespace service used when an accessory supports multiple services of the same type."
    case "HMServiceTypeAccessoryInformation":
      return "An accessory information service."
    }
  },
  isUserInteractive: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  associatedServiceType: () => {
    return null
  }, //Optional
  linkedServices: () => {
    return null
  }, //Optional
}

const CharacteristicsModel = {
  uniqueIdentifier: () => {
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
  localizedDescription: (characteristicType) => {
    switch(characteristicType){
      case "HMCharacteristicTypeCurrentLightLevel":
        return "The current light level."
      case "HMCharacteristicTypeHue":
        return "The hue of the color used by a light."
      case "HMCharacteristicTypeBrightness":
        return "The brightness of a light."
      case "HMCharacteristicTypeSaturation":
        return "The saturation of the color used by a light."
      case "HMCharacteristicTypeColorTemperature":
        return "The color temperature of a light."
      case "HMCharacteristicTypeBatteryLevel":
        return "The battery level of the accessory."
      case "HMCharacteristicTypeChargingState":
        return "The charging state of a battery."
      case "HMCharacteristicTypeContactState":
        return "The state of a contact sensor."
      case "HMCharacteristicTypeOutletInUse":
        return "The state of an outlet."
      case "HMCharacteristicTypePowerState":
        return "The power state of the accessory."
      case "HMCharacteristicTypeStatusLowBattery":
        return "A low battery indicator."
      case "HMCharacteristicTypeOutputState":
        return "The output state of a programmable switch."  
      case "HMCharacteristicTypeInputEvent":
        return "The input event of a programmable switch."
      case "HMCharacteristicTypeCurrentTemperature":
        return "The current temperature measured by the accessory."
      case "HMCharacteristicTypeTargetTemperature":
        return "The target temperature for the accessory to achieve."
      case "HMCharacteristicTypeTemperatureUnits":
        return "The units of temperature currently active on the accessory."
      case "HMCharacteristicTypeTargetHeatingCooling":
        return "The target heating or cooling mode for a thermostat."
      case "HMCharacteristicTypeCurrentHeatingCooling":
        return "The current heating or cooling mode for a thermostat."
      case "HMCharacteristicTypeTargetHeaterCoolerState":
        return "The target state for a device that heats or cools, like an oven or a refrigerator."
      case "HMCharacteristicTypeCurrentHeaterCoolerState":
        return "The current state for a device that heats or cools, like an oven or a refrigerator."
      case "HMCharacteristicTypeCoolingThreshold":
        return "The temperature above which cooling will be active."
      case "HMCharacteristicTypeHeatingThreshold":
        return "The temperature below which heating will be active."
      case "HMCharacteristicTypeCurrentRelativeHumidity":
        return "The current relative humidity measured by the accessory."
      case "HMCharacteristicTypeTargetRelativeHumidity":
        return "The target relative humidity for the accessory to achieve."
      case "HMCharacteristicTypeCurrentHumidifierDehumidifierState":
        return "The current state of a humidifier or dehumidifier accessory"
      case "HMCharacteristicTypeTargetHumidifierDehumidifierState":
        return "The state that a humidifier or dehumidifier accessory should try to achieve."
      case "HMCharacteristicTypeHumidifierThreshold":
        return "The humidity below which a humidifier should begin to work."
      case "HMCharacteristicTypeDehumidifierThreshold":
        return "The humidity above which a dehumidifier should begin to work."
      case "HMCharacteristicTypeAirQuality":
        return "The air quality."
      case "HMCharacteristicTypeAirParticulateDensity":
        return "The density of air-particulate matter."
      case "HMCharacteristicTypeAirParticulateSize":
        return "The size of the air-particulate matter."
      case "HMCharacteristicTypeSmokeDetected":
        return "A smoke detection indicator."
      case "HMCharacteristicTypeCarbonDioxideDetected":
        return "An indicator of abnormally high levels of carbon dioxide."
      case "HMCharacteristicTypeCarbonDioxideLevel":
        return "The measured carbon dioxide level."
      case "HMCharacteristicTypeCarbonDioxidePeakLevel":
        return "The highest recorded level of carbon dioxide."
      case "HMCharacteristicTypeCarbonMonoxideDetected":
        return "An indicator of abnormally high levels of carbon monoxide."
      case "HMCharacteristicTypeCarbonMonoxideLevel":
        return "The measured carbon monoxide level."
      case "HMCharacteristicTypeCarbonMonoxidePeakLevel":
        return "The highest recorded level of carbon monoxide."
      case "HMCharacteristicTypeNitrogenDioxideDensity":
        return "The measured density of nitrogen dioxide."
      case "HMCharacteristicTypeOzoneDensity":
        return "The measured density of ozone."
      case "HMCharacteristicTypePM10Density":
        return "The measured density of air-particulate matter of size 10 micrograms."
      case "HMCharacteristicTypePM2_5Density":
        return "The measured density of air-particulate matter of size 2.5 micrograms."
      case "HMCharacteristicTypeSulphurDioxideDensity":
        return "The measured density of sulphur dioxide."
      case "HMCharacteristicTypeVolatileOrganicCompoundDensity":
        return "The measured density of volatile organic compounds."
      case "HMCharacteristicTypeCurrentFanState":
        return "The current state of a fan."
      case "HMCharacteristicTypeTargetFanState":
        return "The target state of a fan."
      case "HMCharacteristicTypeRotationDirection":
        return "The rotation direction of an accessory like a fan."
      case "HMCharacteristicTypeRotationSpeed":
        return "The rotation speed of an accessory like a fan."
      case "HMCharacteristicTypeSwingMode":
        return "An indicator of whether a fan swings back and forth during operation."
      case "HMCharacteristicTypeCurrentAirPurifierState":
        return "The current air purifier state."
      case "HMCharacteristicTypeTargetAirPurifierState":
        return "The target air purifier state."
      case "HMCharacteristicTypeFilterLifeLevel":
        return "The amount of useful life remaining in a filter."
      case "HMCharacteristicTypeFilterChangeIndication":
        return "A filter’s change indicator."
      case "HMCharacteristicTypeFilterResetChangeIndication":
        return "A reset control for a filter change notification."
      case "HMCharacteristicTypeWaterLevel":
        return "The water level measured by an accessory."
      case "HMCharacteristicTypeValveType":
        return "The type of automated valve that controls fluid flow."
      case "HMCharacteristicTypeLeakDetected":
        return "A leak detection indicator."
      case "HMCharacteristicTypeCurrentDoorState":
        return "The current door state."
      case "HMCharacteristicTypeTargetDoorState":
        return "The target door state."
      case "HMCharacteristicTypeCurrentPosition":
        return "The current position of a door, window, awning, or window covering."
      case "HMCharacteristicTypeTargetPosition":
        return "The target position of a door, window, awning, or window covering."
      case "HMCharacteristicTypePositionState":
        return "The position of an accessory like a door, window, awning, or window covering."
      case "HMCharacteristicTypeStatusJammed":
        return "An indicator of whether an accessory is jammed."
      case "HMCharacteristicTypeHoldPosition":
        return "A control for holding the position of an accessory like a door or window."
      case "HMCharacteristicTypeSlatType":
        return "The type of slat on an accessory like a window or a fan."
      case "HMCharacteristicTypeCurrentSlatState":
        return "The current state of slats on an accessory like a window or a fan."
      case "HMCharacteristicTypeCurrentHorizontalTilt":
        return "The current tilt angle of a horizontal slat for an accessory like a window or a fan."
      case "HMCharacteristicTypeTargetHorizontalTilt":
        return "The target tilt angle of a horizontal slat for an accessory like a window or a fan."
      case "HMCharacteristicTypeCurrentVerticalTilt":
        return "The current tilt angle of a vertical slat for an accessory like a window or a fan."
      case "HMCharacteristicTypeTargetVerticalTilt":
        return "The target tilt angle of a vertical slat for an accessory like a window or a fan."
      case "HMCharacteristicTypeCurrentTilt":
        return "The current tilt angle of a slat for an accessory like a window or a fan."
      case "HMCharacteristicTypeTargetTilt":
        return "The target tilt angle of a slat for an accessory like a window or a fan."
      case "HMCharacteristicTypeLockManagementAutoSecureTimeout":
        return "The automatic timeout for a lockable accessory that supports automatic lockout."
      case "HMCharacteristicTypeLockManagementControlPoint":
        return "A control that accepts vendor-specific actions for lock management."
      case "HMCharacteristicTypeLockMechanismLastKnownAction":
        return "The last known action of the locking mechanism."
      case "HMCharacteristicTypeLockPhysicalControls":
        return "The lock’s physical control state."
      case "HMCharacteristicTypeMotionDetected":
        return "An indicator of whether the accessory has detected motion."
      case "HMCharacteristicTypeCurrentLockMechanismState":
        return "The current state of the locking mechanism."
      case "HMCharacteristicTypeTargetLockMechanismState":
        return "The target state for the locking mechanism."
      case "HMCharacteristicTypeCurrentSecuritySystemState":
        return "The current security system state."
      case "HMCharacteristicTypeTargetSecuritySystemState":
        return "The target security system state."
      case "HMCharacteristicTypeObstructionDetected":
        return "An indicator of whether an obstruction is detected, as when something prevents a garage door from closing."
      case "HMCharacteristicTypeOccupancyDetected":
        return "An indicator of whether the home is occupied."
      case "HMCharacteristicTypeSecuritySystemAlarmType":
        return "The alarm trigger state."
      case "HMCharacteristicTypeSupportedRTPConfiguration":
        return "The supported Real-time Transport Protocol (RTP) configuration."
      case "HMCharacteristicTypeDigitalZoom":
        return "The digital zoom of a video Real-time Transport Protocol (RTP) service"
      case "HMCharacteristicTypeOpticalZoom":
        return "The optical zoom setting of the camera sourcing a video Real-time Transport Protocol (RTP) service."
      case "HMCharacteristicTypeImageMirroring":
        return "An indicator of whether the image should be flipped about the vertical axis."
      case "HMCharacteristicTypeImageRotation":
        return "The angle of rotation for an image."
      case "HMCharacteristicTypeNightVision":
        return "An indicator of whether night vision is enabled on a video Real-time Transport Protocol (RTP) service."
      case "HMCharacteristicTypeStreamingStatus":
        return "A description of the status of the Real-time Transport Protocol (RTP) stream management service."
      case "HMCharacteristicTypeSupportedVideoStreamConfiguration":
        return "The video stream's configuration."
      case "HMCharacteristicTypeSupportedAudioStreamConfiguration":
        return "The audio stream;s configuration.."
      case "HMCharacteristicTypeSelectedStreamConfiguration":
        return "The selected stream's configuration."
      case "HMCharacteristicTypeSetupStreamEndpoint":
        return "The stream's endpoint configuration."
      case "HMCharacteristicTypeAudioFeedback":
        return "An indicator of whether audio feedback, like a beep or other external sound mechanism, is enabled."
      case "HMCharacteristicTypeVolume":
        return "The input or output volume of an audio device."
      case "HMCharacteristicTypeMute":
        return "A control for muting audio."
      case "HMCharacteristicTypeActive":
        return "The current status of an accessory."
      case "HMCharacteristicTypeStatusTampered":
        return "An indicator of whether an accessory has been tampered with."
      case "HMCharacteristicTypeStatusFault":
        return "An indicator of whether the accessory has experienced a fault."
      case "HMCharacteristicTypeStatusActive":
        return "An indicator of whether the service is working."
      case "HMCharacteristicTypeInUse":
        return "The current usage state of an accessory."
      case "HMCharacteristicTypeIsConfigured":
        return "The configuration state of an accessory."
      case "HMCharacteristicTypeRemainingDuration":
        return "The number of seconds remaining for the activity being carried out by the accessory."
      case "HMCharacteristicTypeSetDuration":
        return "The duration of the activity being carried out by the accessory."
      case "HMCharacteristicTypeProgramMode":
        return "The current mode of the accessor's scheduled programs."
      case "HMCharacteristicTypeName":
        return "The name of the accessory."
      case "HMCharacteristicTypeIdentify":
        return "A control you can use to ask the accessory to identify itself."
      case "HMCharacteristicTypeVersion":
        return "The version of the accessory."
      case "HMCharacteristicTypeLogs":
        return "Log data for the accessory."
      case "HMCharacteristicTypeAdminOnlyAccess":
        return "An indicator of whether the accessory accepts only administrator access."
      case "HMCharacteristicTypeHardwareVersion":
        return "The hardware version of the accessory."
      case "HMCharacteristicTypeSoftwareVersion":
        return "The software version of the accessory."
      case "HMCharacteristicTypeLabelIndex":
        return "The index of the label for the service on an accessory with multiple instances of the same service."
      case "HMCharacteristicTypeLabelNamespace":
        return "The naming schema used to label the services on an accessory with multiple services of the same type."
    }
  },
  properties: () => {
    let properties = ["HMCharacteristicPropertyReadable","HMCharacteristicPropertyWritable","HMCharacteristicPropertySupportsEvent","HMCharacteristicPropertyHidden"]
    let length = getRandomInt(1,properties.length)
    let final = []
    switch(length){
      case 1:
        return [properties[getRandomInt(0,properties.length-1)]]
      case 2:
        for (var i = 0;i<2;){
          let index = getRandomInt(0,properties.length-1)
          if (!final.includes(properties[index])){
            final.push(properties[index])
            i++
          }
        }
        return final
      case 3:
        for (var i = 0;i<3;){
          let index = getRandomInt(0,properties.length-1)
          if (!final.includes(properties[index])){
            final.push(properties[index])
            i++
          }
        }
        return final
      default:
        return properties
    }
  }, 
  characteristicType: () => {
    let types= [
      "HMCharacteristicTypeCurrentLightLevel",
      "HMCharacteristicTypeHue",
      "HMCharacteristicTypeBrightness",
      "HMCharacteristicTypeSaturation",
      "HMCharacteristicTypeColorTemperature",
      "HMCharacteristicTypeBatteryLevel",
      "HMCharacteristicTypeChargingState",
      "HMCharacteristicTypeContactState",
      "HMCharacteristicTypeOutletInUse",
      "HMCharacteristicTypePowerState",
      "HMCharacteristicTypeStatusLowBattery",
      "HMCharacteristicTypeOutputState",
      "HMCharacteristicTypeInputEvent",
      "HMCharacteristicTypeCurrentTemperature",
      "HMCharacteristicTypeTargetTemperature",
      "HMCharacteristicTypeTemperatureUnits",
      "HMCharacteristicTypeTargetHeatingCooling",
      "HMCharacteristicTypeCurrentHeatingCooling",
      "HMCharacteristicTypeTargetHeaterCoolerState",
      "HMCharacteristicTypeCurrentHeaterCoolerState",
      "HMCharacteristicTypeCoolingThreshold",
      "HMCharacteristicTypeHeatingThreshold",
      "HMCharacteristicTypeCurrentRelativeHumidity",
      "HMCharacteristicTypeTargetRelativeHumidity",
      "HMCharacteristicTypeCurrentHumidifierDehumidifierState",
      "HMCharacteristicTypeTargetHumidifierDehumidifierState",
      "HMCharacteristicTypeHumidifierThreshold",
      "HMCharacteristicTypeDehumidifierThreshold",
      "HMCharacteristicTypeAirQuality",
      "HMCharacteristicTypeAirParticulateDensity",
      "HMCharacteristicTypeAirParticulateSize",
      "HMCharacteristicTypeSmokeDetected",
      "HMCharacteristicTypeCarbonDioxideDetected",
      "HMCharacteristicTypeCarbonDioxideLevel",
      "HMCharacteristicTypeCarbonDioxidePeakLevel",
      "HMCharacteristicTypeCarbonMonoxideDetected",
      "HMCharacteristicTypeCarbonMonoxideLevel",
      "HMCharacteristicTypeCarbonMonoxidePeakLevel",
      "HMCharacteristicTypeNitrogenDioxideDensity",
      "HMCharacteristicTypeOzoneDensity",
      "HMCharacteristicTypePM10Density",
      "HMCharacteristicTypePM2_5Density",
      "HMCharacteristicTypeSulphurDioxideDensity",
      "HMCharacteristicTypeVolatileOrganicCompoundDensity",
      "HMCharacteristicTypeCurrentFanState",
      "HMCharacteristicTypeTargetFanState",
      "HMCharacteristicTypeRotationDirection",
      "HMCharacteristicTypeRotationSpeed",
      "HMCharacteristicTypeSwingMode",
      "HMCharacteristicTypeCurrentAirPurifierState",
      "HMCharacteristicTypeTargetAirPurifierState",
      "HMCharacteristicTypeFilterLifeLevel",
      "HMCharacteristicTypeFilterChangeIndication",
      "HMCharacteristicTypeFilterResetChangeIndication",
      "HMCharacteristicTypeWaterLevel",
      "HMCharacteristicTypeValveType",
      "HMCharacteristicTypeLeakDetected",
      "HMCharacteristicTypeCurrentDoorState",
      "HMCharacteristicTypeTargetDoorState",
      "HMCharacteristicTypeCurrentPosition",
      "HMCharacteristicTypeTargetPosition",
      "HMCharacteristicTypePositionState",
      "HMCharacteristicTypeStatusJammed",
      "HMCharacteristicTypeHoldPosition",
      "HMCharacteristicTypeSlatType",
      "HMCharacteristicTypeCurrentSlatState",
      "HMCharacteristicTypeCurrentHorizontalTilt",
      "HMCharacteristicTypeTargetHorizontalTilt",
      "HMCharacteristicTypeCurrentVerticalTilt",
      "HMCharacteristicTypeTargetVerticalTilt",
      "HMCharacteristicTypeCurrentTilt",
      "HMCharacteristicTypeTargetTilt",
      "HMCharacteristicTypeLockManagementAutoSecureTimeout",
      "HMCharacteristicTypeLockManagementControlPoint",
      "HMCharacteristicTypeLockMechanismLastKnownAction",
      "HMCharacteristicTypeLockPhysicalControls",
      "HMCharacteristicTypeMotionDetected",
      "HMCharacteristicTypeCurrentLockMechanismState",
      "HMCharacteristicTypeTargetLockMechanismState",
      "HMCharacteristicTypeCurrentSecuritySystemState",
      "HMCharacteristicTypeTargetSecuritySystemState",
      "HMCharacteristicTypeObstructionDetected",
      "HMCharacteristicTypeOccupancyDetected",
      "HMCharacteristicTypeSecuritySystemAlarmType",
      "HMCharacteristicTypeSupportedRTPConfiguration",
      "HMCharacteristicTypeDigitalZoom",
      "HMCharacteristicTypeOpticalZoom",
      "HMCharacteristicTypeImageMirroring",
      "HMCharacteristicTypeImageRotation",
      "HMCharacteristicTypeNightVision",
      "HMCharacteristicTypeStreamingStatus",
      "HMCharacteristicTypeSupportedVideoStreamConfiguration",
      "HMCharacteristicTypeSupportedAudioStreamConfiguration",
      "HMCharacteristicTypeSelectedStreamConfiguration",
      "HMCharacteristicTypeSetupStreamEndpoint",
      "HMCharacteristicTypeAudioFeedback",
      "HMCharacteristicTypeVolume",
      "HMCharacteristicTypeMute",
      "HMCharacteristicTypeActive",
      "HMCharacteristicTypeStatusTampered",
      "HMCharacteristicTypeStatusFault",
      "HMCharacteristicTypeStatusActive",
      "HMCharacteristicTypeInUse",
      "HMCharacteristicTypeIsConfigured",
      "HMCharacteristicTypeRemainingDuration",
      "HMCharacteristicTypeSetDuration",
      "HMCharacteristicTypeProgramMode",
      "HMCharacteristicTypeName",
      "HMCharacteristicTypeIdentify",
      "HMCharacteristicTypeVersion",
      "HMCharacteristicTypeLogs",
      "HMCharacteristicTypeAdminOnlyAccess",
      "HMCharacteristicTypeHardwareVersion",
      "HMCharacteristicTypeSoftwareVersion",
      "HMCharacteristicTypeLabelIndex",
      "HMCharacteristicTypeLabelNamespace"

    ]
    return types[getRandomInt(0,types.length-1)]
  },
  value: (characteristicType) => {
    switch(characteristicType){
      case "HMCharacteristicTypeCurrentLightLevel":
        return getRandomInt(0,1000)
      case "HMCharacteristicTypeHue":
        return (getRandomInt(0,36000000000))/100000000
      case "HMCharacteristicTypeBrightness":
        return getRandomInt(0,100)
      case "HMCharacteristicTypeSaturation":
        return (getRandomInt(0,10000000000))/100000000
      case "HMCharacteristicTypeColorTemperature":
        return 1000000/(getRandomInt(1500,7000))
      case "HMCharacteristicTypeBatteryLevel":
        return getRandomInt(0,100)
      case "HMCharacteristicTypeChargingState":
        return getRandomInt(0,2)
      case "HMCharacteristicTypeContactState":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeOutletInUse":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypePowerState":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeStatusLowBattery":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeOutputState":
        return ""
      case "HMCharacteristicTypeInputEvent":
        return getRandomInt(0,2)
      case "HMCharacteristicTypeCurrentTemperature":
        return (getRandomInt(10000,60000))/1000
      case "HMCharacteristicTypeTargetTemperature":
        return (getRandomInt(10000,60000))/1000
      case "HMCharacteristicTypeTemperatureUnits":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeTargetHeatingCooling":
        return getRandomInt(0,3)
      case "HMCharacteristicTypeCurrentHeatingCooling":
        return getRandomInt(0,3)
      case "HMCharacteristicTypeTargetHeaterCoolerState":
        return getRandomInt(0,2)
      case "HMCharacteristicTypeCurrentHeaterCoolerState":
        return getRandomInt(0,3)
      case "HMCharacteristicTypeCoolingThreshold":
        return (getRandomInt(10000,60000))/1000
      case "HMCharacteristicTypeHeatingThreshold":
        return (getRandomInt(10000,60000))/1000
      case "HMCharacteristicTypeCurrentRelativeHumidity":
        return (getRandomInt(0,10000000000))/100000000
      case "HMCharacteristicTypeTargetRelativeHumidity":
        return (getRandomInt(0,10000000000))/100000000
      case "HMCharacteristicTypeCurrentHumidifierDehumidifierState":
        return getRandomInt(0,3)
      case "HMCharacteristicTypeTargetHumidifierDehumidifierState":
        return getRandomInt(0,2)
      case "HMCharacteristicTypeHumidifierThreshold":
        return (getRandomInt(0,10000000000))/100000000
      case "HMCharacteristicTypeDehumidifierThreshold":
        return (getRandomInt(0,10000000000))/100000000
      case "HMCharacteristicTypeAirQuality":
        return getRandomInt(0,5)
      case "HMCharacteristicTypeAirParticulateDensity":
        return getRandomInt(10,70) //Air Particular Matter Density - Needs a lot more understanding 
      case "HMCharacteristicTypeAirParticulateSize":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeSmokeDetected":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeCarbonDioxideDetected":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeCarbonDioxideLevel":
        return getRandomInt(250,6000)
      case "HMCharacteristicTypeCarbonDioxidePeakLevel":
        return getRandomInt(250,6000)
      case "HMCharacteristicTypeCarbonMonoxideDetected":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeCarbonMonoxideLevel":
        return (getRandomInt(0,80))/10
      case "HMCharacteristicTypeCarbonMonoxidePeakLevel":
        return (getRandomInt(0,80))/10
      case "HMCharacteristicTypeNitrogenDioxideDensity":
        return getRandomInt(50,100)/1000
      case "HMCharacteristicTypeOzoneDensity":
        return getRandomInt(100,300)/1000
      case "HMCharacteristicTypePM10Density":
        return getRandomInt(50,150)
      case "HMCharacteristicTypePM2_5Density":
        return getRandomInt(15,35)
      case "HMCharacteristicTypeSulphurDioxideDensity":
        return getRandomInt(15,35) //Unsure
      case "HMCharacteristicTypeVolatileOrganicCompoundDensity":
        return getRandomInt(15,35) //Unsure
      case "HMCharacteristicTypeCurrentFanState":
        return getRandomInt(0,2)
      case "HMCharacteristicTypeTargetFanState":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeRotationDirection":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeRotationSpeed":
        return (getRandomInt(0,100000))/1000
      case "HMCharacteristicTypeSwingMode":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeCurrentAirPurifierState":
        return getRandomInt(0,2)
      case "HMCharacteristicTypeTargetAirPurifierState":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeFilterLifeLevel":
        return (getRandomInt(0,100000))/1000
      case "HMCharacteristicTypeFilterChangeIndication":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeFilterResetChangeIndication":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeWaterLevel":
        return (getRandomInt(0,100000))/1000
      case "HMCharacteristicTypeValveType":
        return getRandomInt(0,3)
      case "HMCharacteristicTypeLeakDetected":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeCurrentDoorState":
        return getRandomInt(0,4)
      case "HMCharacteristicTypeTargetDoorState":
        return getRandomInt(0,4)
      case "HMCharacteristicTypeCurrentPosition":
        return getRandomInt(0,100)
      case "HMCharacteristicTypeTargetPosition":
        return getRandomInt(0,100)
      case "HMCharacteristicTypePositionState":
        return getRandomInt(0,2)
      case "HMCharacteristicTypeStatusJammed":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeHoldPosition":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeSlatType":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeCurrentSlatState":
        return getRandomInt(0,2)
      case "HMCharacteristicTypeCurrentHorizontalTilt":
        return getRandomInt(0,180)-90
      case "HMCharacteristicTypeTargetHorizontalTilt":
        return getRandomInt(0,180)-90
      case "HMCharacteristicTypeCurrentVerticalTilt":
        return getRandomInt(0,180)-90
      case "HMCharacteristicTypeTargetVerticalTilt":
        return getRandomInt(0,180)-90
      case "HMCharacteristicTypeCurrentTilt":
        return getRandomInt(0,180)-90
      case "HMCharacteristicTypeTargetTilt":
        return getRandomInt(0,180)-90
      case "HMCharacteristicTypeLockManagementAutoSecureTimeout":
        return getRandomInt(0,600)
      case "HMCharacteristicTypeLockManagementControlPoint":
        return null
      case "HMCharacteristicTypeLockMechanismLastKnownAction":
        return getRandomInt(0,10)
      case "HMCharacteristicTypeLockPhysicalControls":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeMotionDetected":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeCurrentLockMechanismState":
        return getRandomInt(0,3)
      case "HMCharacteristicTypeTargetLockMechanismState":
        return getRandomInt(0,3)
      case "HMCharacteristicTypeCurrentSecuritySystemState":
        return getRandomInt(0,4)
      case "HMCharacteristicTypeTargetSecuritySystemState":
        return getRandomInt(0,3)
      case "HMCharacteristicTypeObstructionDetected":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeOccupancyDetected":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeSecuritySystemAlarmType":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeSupportedRTPConfiguration":
        return null
      case "HMCharacteristicTypeDigitalZoom":
        return null
      case "HMCharacteristicTypeOpticalZoom":
        return (getRandomInt(0,10000))/1000
      case "HMCharacteristicTypeImageMirroring":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeImageRotation":
        switch(getRandomInt(1,4)){
          case 1:
            return 0
          case 2:
            return 90
          case 3:
            return 180
          case 4:
            return 270
        }
      case "HMCharacteristicTypeNightVision":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeStreamingStatus":
        return null
      case "HMCharacteristicTypeSupportedVideoStreamConfiguration":
        return null
      case "HMCharacteristicTypeSupportedAudioStreamConfiguration":
        return null
      case "HMCharacteristicTypeSelectedStreamConfiguration":
        return null
      case "HMCharacteristicTypeSetupStreamEndpoint":
        return null
      case "HMCharacteristicTypeAudioFeedback":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeVolume":
        return getRandomInt(0,100)
      case "HMCharacteristicTypeMute":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeActive":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeStatusTampered":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeStatusFault":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeStatusActive":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeInUse":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeIsConfigured":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeRemainingDuration":
        return getRandomInt(0,600)
      case "HMCharacteristicTypeSetDuration":
        return getRandomInt(0,600)
      case "HMCharacteristicTypeProgramMode":
        return getRandomInt(0,2)
      case "HMCharacteristicTypeName":
        let string = ""
        let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let length = getRandomInt(10,32)
        for (var i = 0; i<length; i++){
          string += characters.charAt(Math.floor(Math.random() * 
          characters.length));
        }
        return string
      case "HMCharacteristicTypeIdentify":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeVersion":
        return getRandomInt(0,10).toString() + "." + getRandomInt(0,10).toString() + "." +getRandomInt(0,10).toString()
      case "HMCharacteristicTypeLogs":
        return null
      case "HMCharacteristicTypeAdminOnlyAccess":
        switch(getRandomInt(1,2)){
          case 1:
            return true
          case 2:
            return false
        }
      case "HMCharacteristicTypeIsConfigured":
        return getRandomInt(0,1)
      case "HMCharacteristicTypeHardwareVersion":
        return getRandomInt(0,10).toString() + "." + getRandomInt(0,10).toString() + "." +getRandomInt(0,10).toString()
      case "HMCharacteristicTypeSoftwareVersion":
        return getRandomInt(0,10).toString() + "." + getRandomInt(0,10).toString() + "." +getRandomInt(0,10).toString()
      case "HMCharacteristicTypeLabelIndex":
        return getRandomInt(0,10)
      case "HMCharacteristicTypeLabelNamespace":
        return getRandomInt(0,1)
    }
  },
  isNotificationEnabled: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  metadata: (characteristicType) =>{
    switch(characteristicType){
      case "HMCharacteristicTypeCurrentLightLevel":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsLux",//Optional
        }
      case "HMCharacteristicTypeHue":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 360,//Optional
          "stepValue": 0.00001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsArcDegree",//Optional
        }
      case "HMCharacteristicTypeBrightness":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeSaturation":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.00001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeColorTemperature":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 500,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeBatteryLevel":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeChargingState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 2,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeContactState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeOutletInUse":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypePowerState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeStatusLowBattery":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeOutputState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatData",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeInputEvent":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 2,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCurrentTemperature":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 60,//Optional
          "stepValue": 0.00001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsCelsius"//Optional
        }
      case "HMCharacteristicTypeTargetTemperature":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 60,//Optional
          "stepValue": 0.00001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsCelsius"//Optional
        }
      case "HMCharacteristicTypeTemperatureUnits":
        return {
        "manufacturerDescription": null,//Optional
        "validValues": null,//Optional
        "minimumValue": 0,//Optional
        "maximumValue": 1,//Optional
        "stepValue": 1,//Optional
        "maxLength": null,//Optional
        "format": "HMCharacteristicMetadataFormatInt",//Optional
        "units": null,//Optional
      }
      case "HMCharacteristicTypeTargetHeatingCooling":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 3,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCurrentHeatingCooling":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 3,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeTargetHeaterCoolerState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 2,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCurrentHeaterCoolerState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 3,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCoolingThreshold":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 70,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsCelsius",//Optional
        }
      case "HMCharacteristicTypeHeatingThreshold":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 70,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsCelsius",//Optional
        }
      case "HMCharacteristicTypeCurrentRelativeHumidity":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeTargetRelativeHumidity":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeCurrentHumidifierDehumidifierState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 3,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeTargetHumidifierDehumidifierState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 2,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeHumidifierThreshold":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeDehumidifierThreshold":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeAirQuality":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 5,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeAirParticulateDensity":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsMicrogramsPerCubicMeter",//Optional
        }
      case "HMCharacteristicTypeAirParticulateSize":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeSmokeDetected":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCarbonDioxideDetected":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCarbonDioxideLevel":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsPartsPerMillion",//Optional
        }
      case "HMCharacteristicTypeCarbonDioxidePeakLevel":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsPartsPerMillion",//Optional
        }
      case "HMCharacteristicTypeCarbonMonoxideDetected":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCarbonMonoxideLevel":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsPartsPerMillion",//Optional
        }
      case "HMCharacteristicTypeCarbonMonoxidePeakLevel":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsPartsPerMillion",//Optional
        }
      case "HMCharacteristicTypeNitrogenDioxideDensity":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsMicrogramsPerCubicMeter",//Optional
        }
      case "HMCharacteristicTypeOzoneDensity":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsMicrogramsPerCubicMeter",//Optional
        }
      case "HMCharacteristicTypePM10Density":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsMicrogramsPerCubicMeter",//Optional
        }
      case "HMCharacteristicTypePM2_5Density":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsMicrogramsPerCubicMeter",//Optional
        }
      case "HMCharacteristicTypeSulphurDioxideDensity":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsMicrogramsPerCubicMeter",//Optional
        }
      case "HMCharacteristicTypeVolatileOrganicCompoundDensity":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsMicrogramsPerCubicMeter",//Optional
        }
      case "HMCharacteristicTypeCurrentFanState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 2,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeTargetFanState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeRotationDirection":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeRotationSpeed":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.0000001,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeSwingMode":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCurrentAirPurifierState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 2,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeTargetAirPurifierState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeFilterLifeLevel":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeFilterChangeIndication":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeFilterResetChangeIndication":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeWaterLevel":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeValveType":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 3,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeLeakDetected":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCurrentDoorState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 4,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeTargetDoorState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 4,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCurrentPosition":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeTargetPosition":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypePositionState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 2,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeStatusJammed":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeHoldPosition":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeSlatType":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCurrentSlatState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 2,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCurrentHorizontalTilt":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": -90,//Optional
          "maximumValue": 90,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsArcDegree",//Optional
        }
      case "HMCharacteristicTypeTargetHorizontalTilt":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": -90,//Optional
          "maximumValue": 90,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsArcDegree",//Optional
        }
      case "HMCharacteristicTypeCurrentVerticalTilt":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": -90,//Optional
          "maximumValue": 90,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsArcDegree",//Optional
        }
      case "HMCharacteristicTypeTargetVerticalTilt":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": -90,//Optional
          "maximumValue": 90,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsArcDegree",//Optional
        }
      case "HMCharacteristicTypeCurrentTilt":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": -90,//Optional
          "maximumValue": 90,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsArcDegree",//Optional
        }
      case "HMCharacteristicTypeTargetTilt":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": -90,//Optional
          "maximumValue": 90,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsArcDegree",//Optional
        }
      case "HMCharacteristicTypeLockManagementAutoSecureTimeout":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1000,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsSeconds",//Optional
        }
      case "HMCharacteristicTypeLockManagementControlPoint":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatData",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeLockMechanismLastKnownAction":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 10,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeLockPhysicalControls":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeMotionDetected":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCurrentLockMechanismState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 3,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeTargetLockMechanismState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 3,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeCurrentSecuritySystemState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 4,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeTargetSecuritySystemState":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 3,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeObstructionDetected":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeOccupancyDetected":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeSecuritySystemAlarmType":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeSupportedRTPConfiguration":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatTLV8",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeDigitalZoom":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 1,//Optional
          "maximumValue": 10,//Optional
          "stepValue": 0.1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeOpticalZoom":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 1,//Optional
          "maximumValue": 10,//Optional
          "stepValue": 0.1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeImageMirroring":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeImageRotation":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": [0,90,180,270],//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsArcDegree",//Optional
        }
      case "HMCharacteristicTypeNightVision":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeStreamingStatus":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatTLV8",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeSupportedVideoStreamConfiguration":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatTLV8",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeSupportedAudioStreamConfiguration":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatTLV8",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeSelectedStreamConfiguration":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatTLV8",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeSetupStreamEndpoint":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatTLV8",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeAudioFeedback":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeVolume":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatFloat",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }
      case "HMCharacteristicTypeMute":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeActive":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeStatusTampered":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeStatusFault":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeStatusActive":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeInUse":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeIsConfigured":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeRemainingDuration":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 600,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsSeconds",//Optional
        }
      case "HMCharacteristicTypeSetDuration":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 600,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": "HMCharacteristicMetadataUnitsSeconds",//Optional
        }
      case "HMCharacteristicTypeProgramMode":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 2,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeName":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": 200,//Optional
          "format": "HMCharacteristicMetadataFormatString",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeIdentify":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeVersion":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": 200,//Optional
          "format": "HMCharacteristicMetadataFormatString",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeLogs":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatTLV8",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeAdminOnlyAccess":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeIsConfigured":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeHardwareVersion":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": 200,//Optional
          "format": "HMCharacteristicMetadataFormatString",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeSoftwareVersion":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": null,//Optional
          "maximumValue": null,//Optional
          "stepValue": null,//Optional
          "maxLength": 200,//Optional
          "format": "HMCharacteristicMetadataFormatString",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeLabelIndex":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 1,//Optional
          "maximumValue": null,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
      case "HMCharacteristicTypeLabelNamespace":
        return {
          "manufacturerDescription": null,//Optional
          "validValues": null,//Optional
          "minimumValue": 0,//Optional
          "maximumValue": 1,//Optional
          "stepValue": 1,//Optional
          "maxLength": null,//Optional
          "format": "HMCharacteristicMetadataFormatInt",//Optional
          "units": null,//Optional
        }
    }
  }
}

const UserModel = {
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  uniqueIdentifier: () => {
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
}

const StreamControlModel = {
  aspectRatio: () => {
    return getRandomInt(100000,300000)/100000
  },
  audioStreamSetting: () => {
    return getRandomInt(1,3)
  },
  streamState: () => {
    return getRandomInt(1,4)
  },
}

const SnapshotControlModel = {
  aspectRatio: () => {
    return getRandomInt(100000,300000)/100000
  },
  date: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 23), getRandomInt(0, 59), getRandomInt(0, 59), getRandomInt(0, 999));
    return finalDate.getTime()
  },
}

const ActionSetModel = {
  uniqueIdentifier: () => {
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
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  actionSetType: () => {
    let types = [
      "HMActionSetTypeHomeArrival",
      "HMActionSetTypeHomeDeparture",
      "HMActionSetTypeSleep",
      "HMActionSetTypeWakeUp",
      "HMActionSetTypeUserDefined",
      "HMActionSetTypeTriggerOwned"

    ]
    return types[getRandomInt(0,types.length-1)]
  },
  actions: () => {
    let length = getRandomInt(1,3)
    let array = []
    for (var i = 0; i< length; i++){
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
      array.push({
        "uniqueIdentifier":string})
    }
    return array
  },
  isExecuting: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  lastExecutionDate: () => {
    var finalDate = new Date(0);
    var maxMonthDate = new Date(0);
    finalDate.setFullYear(getRandomInt(2020, 2050));
    finalDate.setMonth(getRandomInt(0, 11));
    finalDate.setDate(1);
    maxMonthDate = finalDate;
    maxMonthDate.setMonth(maxMonthDate.getMonth() + 1);
    maxMonthDate.setDate(0);
    finalDate.setDate(getRandomInt(1, maxMonthDate.getDate()));
    finalDate.setHours(getRandomInt(0, 23), getRandomInt(0, 59), getRandomInt(0, 59), getRandomInt(0, 999));
    return finalDate.getTime()
  },
}

const TriggerModel = {
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  isEnabled: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  lastFireDate: () => {
    let randomDate = new Date()
    return randomDate.getTime() - getRandomInt(0,63072000)
  },
  uniqueIdentifier: () => {
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
  triggerActivationState: () => {
    return getRandomInt(0,5)-1
  },
  recurrences: () => {
    return {
      "weekday": getRandomInt(0,7)
    }
  },
  executeOnce: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      default:
        return false
    }
  },
  predicate: () => {
    return null
  },
}

const TimerTriggerModel = {
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  isEnabled: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return true
      case 2:
        return false
    }
  },
  lastFireDate: () => {
    let randomDate = new Date()
    return randomDate.getTime() - getRandomInt(0,63072000)
  },
  uniqueIdentifier: () => {
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
  fireDate: () => {
    let randomDate = new Date()
    return randomDate.getTime() + getRandomInt(0,63072000)
  },
  recurrence: () => {
    switch(getRandomInt(1,2)){
      case 1:
        return null
      case 2:
        return {
          "calender": null,
          "timeZone": null,
          "isValidDate": false,
          "date": null,
          "era": null,
          "year": null,
          "yearForWeekOfYear": null,
          "quarter": null,
          "month": null,
          "isLeapMonth": null,
          "weekOfMonth": null,
          "weekOfYear": null,
          "weekday": null,
          "weekdayOrdinal": null,
          "day": getRandomInt(0,34),
          "hour": getRandomInt(0,23),
          "minute": getRandomInt(0,59),
          "second": getRandomInt(0,59),
          "nanosecond": getRandomInt(0,999999999),
          "description": "",
          "debugDescription": "",
          "customMirror": "",
          "hashValue": 0
      }
    }
  },
  recurrenceCalendar: () => {
    let identifiers = ["buddhist", "chinese", "coptic", "ethiopicAmeteAlem", "ethiopicAmeteMihret", "gregorian", "hebrew", "indian", "islamic", "islamicCivil", "islamicTabular", "islamicUmmAlQura", "iso8601", "japanese", "persian", "republicOfChina"]
    return {
      "identifier": identifiers[getRandomInt(0,identifiers.length-1)]
    }
  },
  timeZone: () => {
    return null
  }
}


const EventModel = {
  HMPresenceEvent: () => {
    let uuid = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      uuid += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          uuid+="-"
      }
    }
    return {
      "uniqueIdentifier": uuid, 
      "presenceEventType": getRandomInt(0,4),
      "presenceUserType": getRandomInt(0,3), 
    }
  },
  HMCharacteristicEvent: (characteristic) => {
    let uuid = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      uuid += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          uuid+="-"
      }
    }
    let maxValue = 0
    let minValue = 0
    if (characteristic.metadata.minimumValue === null){
      minValue = 0
    } else {
      minValue = characteristic.metadata.minimumValue-1
    }
    if (characteristic.metadata.maximumValue === null){
      maxValue = 99999
    } else {
      maxValue = characteristic.metadata.maximumValue
    }
    return {
      "uniqueIdentifier": uuid, 
      "characteristic": characteristic,
      "triggerValue": getRandomInt(minValue, maxValue)
    }
  },
  HMCharacteristicThresholdRangeEvent: (characteristic) => {
    let uuid = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      uuid += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          uuid+="-"
      }
    }
    let maxValue = 0
    let minValue = 0
    let array = []
    if (characteristic.metadata.minimumValue === null){
      minValue = 0
    } else {
      minValue = characteristic.metadata.minimumValue-1
    }
    if (characteristic.metadata.maximumValue === null){
      maxValue = 99999
    } else {
      maxValue = characteristic.metadata.maximumValue
    }
    for (var i =0; i<2;){
      let randomValue = getRandomInt(minValue, maxValue)
      if (!array.includes(randomValue)){
        array.push(randomValue)
        i++
      }
    }
    array.sort(function(a, b){return a - b})
    return {
      "uniqueIdentifier": uuid, 
      "characteristic": characteristic,
      "thresholdRange": {
        "minValue": array[0],
        "maxValue": array[1]
      }
    }
  },
  HMCalendarEvent: () => {
    let uuid = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      uuid += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          uuid+="-"
      }
    }
    let randomDate = new Date()
    randomDate.setTime(randomDate.getTime() + getRandomInt(0,126144000)-63072000)
    return {
      "uniqueIdentifier": uuid, 
      "fireDateComponents": {
        "calendar": "",
        "timeZone": "",
        "isValidDate": true,
        "date": randomDate.getTime(),
        "era": randomDate.getFullYear(),
        "year": randomDate.getFullYear(),
        "yearForWeekOfYear": null,
        "quarter": Math.floor((randomDate.getMonth() + 3) / 3),
        "month": randomDate.getMonth(),
        "isLeapMonth": !(randomDate.getFullYear() & 3 || !(randomDate.getFullYear() % 25) && randomDate.getFullYear() & 15),
        "weekOfMonth": null,
        "weekOfYear": null,
        "weekday": randomDate.getDay(),
        "weekdayOrdinal": null,
        "day": randomDate.getDate(),
        "hour": randomDate.getHours(),
        "minute": randomDate.getMinutes(),
        "second": randomDate.getSeconds(),
        "nanosecond": null,
        "description": "",
        "debugDescription": "",
        "customMirror": "",
        "hashValue": 0,
      }
    }
  },
  HMSignificantTimeEvent : () => {
    let uuid = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      uuid += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          uuid+="-"
      }
    }
    let significantEvent = ""
    switch(getRandomInt(1,2)){
      case 1:
        significantEvent = "sunrise"
      case 2:
        significantEvent = "sunset"
    }
    let randomDate = new Date(getRandomInt(0,63072000))
    return {
      "uniqueIdentifier": uuid, 
      "significantEvent ": "sunrise",
      "offset" : {
        "calendar": "",
        "timeZone": "",
        "isValidDate": true,
        "date": randomDate.getTime(),
        "era": randomDate.getFullYear()-1970,
        "year": randomDate.getFullYear()-1970,
        "yearForWeekOfYear": null,
        "quarter": Math.floor((randomDate.getMonth() + 3) / 3),
        "month": randomDate.getMonth(),
        "isLeapMonth": !(randomDate.getFullYear() & 3 || !(randomDate.getFullYear() % 25) && randomDate.getFullYear() & 15),
        "weekOfMonth": null,
        "weekOfYear": null,
        "weekday": randomDate.getDay(),
        "weekdayOrdinal": null,
        "day": randomDate.getDate(),
        "hour": randomDate.getHours(),
        "minute": randomDate.getMinutes(),
        "second": randomDate.getSeconds(),
        "nanosecond": null,
        "description": "",
        "debugDescription": "",
        "customMirror": "",
        "hashValue": 0,
      }
    }
  },
  HMDurationEvent  : () => {
    let uuid = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      uuid += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          uuid+="-"
      }
    }
    return {
      "uniqueIdentifier": uuid, 
      "duration": getRandomInt(0,31557600000)
    }
  },
  HMLocationEvent   : () => {
    let uuid = ""
    let characters = "0123456789abcdef"
    for (var i = 0; i<32; i++){
      uuid += characters.charAt(Math.floor(Math.random() * 
      characters.length));
      switch (i){
        case 7:
        case 11:
        case 15:
        case 19:
          uuid+="-"
      }
    }
    let identifier = ""
    let allCharacters = "0123456789abcdefghijklmnopqrstuvwxyz "
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      identifier += allCharacters.charAt(Math.floor(Math.random() * 
      allCharacters.length));
    }
    return {
      "uniqueIdentifier": uuid, 
      "region": {
        "identifier": identifier,
        "notifyOnEntry": false,
        "notifyOnExit": false,
      }
    }
  },
}

const HMMatterHomeModel = {
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  uuid: () => {
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
  }
}

const HMMatterRoomModel = {
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  uuid: () => {
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
  }
}

const HMMatterTopologyModel = {
  name: () => {
    let string = ""
    let characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let length = getRandomInt(10,32)
    for (var i = 0; i<length; i++){
      string += characters.charAt(Math.floor(Math.random() * 
      characters.length));
    }
    return string
  },
  uuid: () => {
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
  }
}


const dataModels = {
  HMAccessory: {
    data: MOCK.HMAccessory,
    mockup: AccessoryModel
  },
  HMActionSet: {
    data: MOCK.HMActionSet,
    mockup: ActionSetModel
  },
  HMHomeManager: {
    data: MOCK.HMHomeManager,
    mockup: HomeModel
  },
  HMCharacteristic: {
    data: MOCK.HMCharacteristic,
    mockup: CharacteristicsModel
  },
  HMEventTrigger: {
    data: MOCK.HMEventTrigger,
    mockup: TriggerModel
  },
  HMMatterHome: {
    data: MOCK.HMMatterHome,
    mockup: HMMatterHomeModel
  },
  HMMatterRoom: {
    data: MOCK.HMMatterRoom,
    mockup: HMMatterRoomModel
  },
  HMMatterTopology: {
    data: MOCK.HMMatterTopology,
    mockup: HMMatterTopologyModel
  },
  HMService: {
    data: MOCK.HMService,
    mockup: ServicesModel
  },
  HMTimerTrigger: {
    data: MOCK.HMTimerTrigger,
    mockup: TimerTriggerModel
  }
};



export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getHMHomeManager(dataType, dataModel, dataDate) {
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
  let primaryUUID = null;
  [
    "authorizationStatus",
    "homes",
    "delegate",
    "primaryHome",
  ].forEach((key, i)=>{
    switch(key){
      case "authorizationStatus":
        let homeAuthorizationStatus = ["restricted", "authorized", "determined"]
        mockupData[key] = homeAuthorizationStatus[getRandomInt(0,homeAuthorizationStatus.length-1)]
        break
      case "homes": 
        mockupData[key].forEach((home)=>{
          [
            "delegate",
            "name",
            "uniqueIdentifier",
            "isPrimary",
            "zones",
            "rooms",
            "accessories",
            "supportsAddingNetworkRouter",
            "serviceGroups",
            "homeHubState",
            "triggers",
            "actionSets",
            "currentUser",
          ].forEach((key2, i)=>{
            switch(key2){
              case "rooms":
                home[key2] = []
                home["zones"].forEach((zone)=>{
                  for (var i =0; i<zone["rooms"].length;i++){
                    home[key2].push(zone["rooms"][i])
                  }
                })
                break
              case "isPrimary":
                switch(primaryUUID){
                  case null:
                    home[key2] = HomeModel[key2]()
                    primaryUUID = home["uniqueIdentifier"]
                    break
                  default:
                    home[key2] = false
                    break
                }
                break
              case "accessories":
                home[key2] = []
                home["rooms"].forEach((room)=>{
                  for (var i = 0; i<room["accessories"].length;i++){
                    home[key2].push(room["accessories"][i])
                  }
                })
                break
              case "zones":
                let zonesLength = getRandomInt(1,4)
                for (var i = 1; i<zonesLength; i++){
                  home[key2].push(Object.assign({}, home[key2][0]))
                }
                let sampleRoom = home[key2][0]["rooms"][0]
                home[key2].forEach((zone, zoneIndex)=>{
                  [
                    "name",
                    "uniqueIdentifier",
                    "rooms"
                  ].forEach((key3, i)=>{
                    switch(key3){
                      case "rooms":
                        zone[key3] = []
                        let roomsLength = getRandomInt(1,3)
                        for (var i = 0; i<roomsLength; i++){
                          zone[key3].push(JSON.parse(JSON.stringify(sampleRoom)))
                        }
                        zone[key3].forEach((room, roomIndex)=>{
                          [
                            "name",
                            "uniqueIdentifier",
                            "accessories"
                          ].forEach((key4, i)=>{
                            switch(key4){
                              case "accessories":
                                room[key4].forEach((accessory)=>{
                                  [
                                    "delegate",
                                    "name",
                                    "uniqueIdentifier",
                                    "category",
                                    "room",
                                    "profiles",
                                    "cameraProfiles",
                                    "isReachable",
                                    "isBlocked",
                                    "supportsIdentify",
                                    "services",
                                    "isBridged",
                                    "uniqueIdentifierForBridgedAccessories",
                                    "firmwareVersion",
                                    "manufacturer",
                                    "model"
                                  ].forEach((key5)=>{
                                    // console.log(key5)
                                    switch(key5){
                                      case "services":
                                        accessory[key5].forEach((service)=>{
                                          [
                                            "characteristics",
                                            "name",
                                            "uniqueIdentifier",
                                            "serviceType",
                                            "localizedDescription",
                                            "isPrimaryService",
                                            "isUserInteractive",
                                            "associatedServiceType",
                                            "linkedServices",
                                            "accessory"
                                          ].forEach((key6)=>{
                                            switch(key6){
                                              case "characteristics":
                                                service[key6].forEach((characteristic)=>{
                                                  [
                                                    "characteristicType",
                                                    "uniqueIdentifier",
                                                    "localizedDescription",
                                                    "properties",
                                                    "value",
                                                    "metadata",
                                                    "isNotificationEnabled",
                                                    "service"
                                                  ].forEach((key7)=>{
                                                      switch(key7){
                                                        case "localizedDescription":
                                                        case "value":
                                                        case "metadata":
                                                          characteristic[key7] = CharacteristicsModel[key7](characteristic["characteristicType"])
                                                          break
                                                        case "service":
                                                          characteristic[key7] = service["uniqueIdentifier"]
                                                          break
                                                        default:
                                                          characteristic[key7] = CharacteristicsModel[key7]()
                                                          break
                                                      }
                                                  })
                                                })
                                                break
                                              case "localizedDescription":
                                                service[key6] = ServicesModel[key6](service["serviceType"])
                                                break
                                              case "isPrimaryService": 
                                                service[key6] = false
                                                break
                                              case "accessory":
                                                service[key6] = accessory["uniqueIdentifier"]
                                                break
                                              default:
                                                service[key6] = ServicesModel[key6]()
                                                break
                                            }
                                          })
                                        })
                                        break
                                      case "profiles":
                                        accessory[key5].forEach((profile)=>{
                                          [
                                            "accessory",
                                            "services",
                                            "uniqueIdentifier"
                                          ].forEach((key6)=>{
                                            switch(key6){
                                              case "accessory":
                                                profile[key6] = accessory["uniqueIdentifier"]
                                                break
                                              case "services":
                                                profile[key6].forEach((service)=>{
                                                  [
                                                    "characteristics",
                                                    "name",
                                                    "uniqueIdentifier",
                                                    "serviceType",
                                                    "localizedDescription",
                                                    "isPrimaryService",
                                                    "isUserInteractive",
                                                    "associatedServiceType",
                                                    "linkedServices",
                                                    "accessory",
                                                  ].forEach((key7)=>{
                                                    switch(key7){
                                                      case "characteristics":
                                                        service[key7].forEach((characteristic) => {
                                                          [
                                                            "characteristicType",
                                                            "uniqueIdentifier",
                                                            "localizedDescription",
                                                            "properties",
                                                            "value",
                                                            "metadata",
                                                            "isNotificationEnabled",
                                                            "service"
                                                          ].forEach((key8)=>{
                                                              switch(key8){
                                                                case "localizedDescription":
                                                                case "value":
                                                                case "metadata":
                                                                  characteristic[key8] = CharacteristicsModel[key8](characteristic["characteristicType"])
                                                                  break
                                                                case "service":
                                                                  characteristic[key8] = service["uniqueIdentifier"]
                                                                  break
                                                                default:
                                                                  characteristic[key8] = CharacteristicsModel[key8]()
                                                                  break
                                                              }
                                                          })
                                                        })
                                                        break
                                                      case "isPrimaryService":
                                                        service[key7] = false
                                                        break
                                                      case "localizedDescription":
                                                        service[key7] = ServicesModel[key7](service["serviceType"])
                                                        break
                                                      case "accessory":
                                                        service[key7] = accessory["uniqueIdentifier"]
                                                        break
                                                      default:
                                                        service[key7] = ServicesModel[key7]()
                                                        break
                                                    }
                                                  })
                                                })
                                                break
                                              default:
                                                profile[key6] = ProfileModel[key6]()
                                                break

                                            }
                                          })
                                        })
                                        break
                                      case "room":
                                        accessory[key5] = room["uniqueIdentifier"]
                                        break
                                      case "cameraProfiles":
                                        accessory[key5].forEach((cameraProfile)=> {
                                          [
                                            "settingsControl",
                                            "microphoneControl",
                                            "speakerControl",
                                            "streamControl",
                                            "snapshotControl"
                                          ].forEach((key6)=> {
                                            switch(key6){
                                              case "settingsControl":
                                                [
                                                  "currentHorizontalTilt",
                                                  "targetHorizontalTilt",
                                                  "currentVerticalTilt",
                                                  "targetVerticalTilt",
                                                  "opticalZoom",
                                                  "digitalZoom",
                                                  "imageMirroring",
                                                  "imageRotation",
                                                  "nightVision"
                                                ].forEach((key7)=>{
                                                  // console.log("accessory",accessory)
                                                  // console.log("key5",key5)
                                                  // console.log("accessory[key5]",accessory[key5])
                                                  // console.log("key6",key6)
                                                  // console.log("accessory[key5][key6]",accessory[key5][key6])
                                                  // console.log("accessory[key5][key6][key7]",accessory[key5][key6][key7])
                                                  switch(key7){
                                                    default:
                                                      [
                                                        "characteristicType",
                                                        "uniqueIdentifier",
                                                        "localizedDescription",
                                                        "properties",
                                                        "value",
                                                        "metadata",
                                                        "isNotificationEnabled",
                                                        "service"
                                                      ].forEach((key8)=>{
                                                          switch(key8){
                                                            case "localizedDescription":
                                                            case "value":
                                                            case "metadata":
                                                              cameraProfile[key6][key7][key8] = CharacteristicsModel[key8](cameraProfile[key6][key7]["characteristicType"])
                                                              break
                                                            case "service":
                                                              cameraProfile[key6][key7][key8] = null
                                                              break
                                                            default:
                                                              cameraProfile[key6][key7][key8] = CharacteristicsModel[key8]()
                                                              break
                                                          }
                                                      })
                                                  }
                                                })
                                                break
                                              case "streamControl":
                                                [
                                                  "cameraStream",
                                                  "streamState",
                                                  "delegate"
                                                ].forEach((key7)=>{
                                                  switch(key7){
                                                    case "cameraStream":
                                                      [
                                                        "aspectRatio",
                                                        "audioStreamSetting"
                                                      ].forEach((key8)=>{
                                                        switch(key8){
                                                          default:
                                                            cameraProfile[key6][key7][key8] = StreamControlModel[key8]()
                                                            break
                                                        }
                                                      })
                                                      break
                                                    case "streamState":
                                                      cameraProfile[key6][key7] = StreamControlModel[key7]()
                                                      break
                                                    case "delegate":
                                                      cameraProfile[key6][key7] = null
                                                      break
                                                  }
                                                })
                                                break
                                              case "snapshotControl":
                                                [
                                                  "mostRecentSnapshot",
                                                  "delegate"
                                                ].forEach((key7)=>{
                                                  switch(key7){
                                                    case "mostRecentSnapshot":
                                                      [
                                                        "aspectRatio",
                                                        "date"
                                                      ].forEach((key8)=>{
                                                        switch(key8){
                                                          default:
                                                            cameraProfile[key6][key7][key8] = SnapshotControlModel[key8]()
                                                            break
                                                        }
                                                      })
                                                      break
                                                    case "delegate":
                                                      cameraProfile[key6][key7] = null
                                                      break
                                                  }
                                                })
                                                break
                                              case "microphoneControl":
                                              case "speakerControl":
                                                [
                                                  "mute",
                                                  "volume"
                                                ].forEach((key7)=>{
                                                  switch(key7){
                                                    default:
                                                      [
                                                        "characteristicType",
                                                        "uniqueIdentifier",
                                                        "localizedDescription",
                                                        "properties",
                                                        "value",
                                                        "metadata",
                                                        "isNotificationEnabled",
                                                        "service"
                                                      ].forEach((key8)=>{
                                                          switch(key8){
                                                            case "localizedDescription":
                                                            case "value":
                                                            case "metadata":
                                                              cameraProfile[key6][key7][key8] = CharacteristicsModel[key8](cameraProfile[key6][key7]["characteristicType"])
                                                              break
                                                            case "service":
                                                              cameraProfile[key6][key7][key8] = null
                                                              break
                                                            default:
                                                              cameraProfile[key6][key7][key8] = CharacteristicsModel[key8]()
                                                              break
                                                          }
                                                      })
                                                  }
                                                })
                                                break
                                            }
                                          })
                                        })
                                        break
                                      default:
                                        accessory[key5] = AccessoryModel[key5]()
                                        break
                                    }
                                  })
                                })
                                break
                              default:
                                room[key4] = RoomModel[key4]()
                                break
                            }
                          })
                          // console.log("room", JSON.stringify(room, undefined, 2));
                          // console.log("roomindex", roomIndex)
                        })
                        break
                      default:
                        zone[key3] = ZonesModel[key3]()
                        break
                    }
                  })
                  // console.log("zone", JSON.stringify(zone, undefined, 2));
                  // console.log("zoneindex", zoneIndex)
                })
               
                break
              case "serviceGroups":
                home[key2].forEach((serviceGroup)=>{
                  [
                    "name",
                    "uniqueIdentifier",
                    "services"
                  ].forEach((key3)=>{
                    switch(key3){
                      case "services":
                        serviceGroup[key3].forEach((service)=>{
                          [
                            "characteristics",
                            "name",
                            "uniqueIdentifier",
                            "serviceType",
                            "localizedDescription",
                            "isPrimaryService",
                            "isUserInteractive",
                            "associatedServiceType",
                            "linkedServices",
                            "accessory"
                          ].forEach((key4)=>{
                            switch(key4){
                              case "characteristics":
                                service[key4].forEach((characteristic)=>{
                                  [
                                    "characteristicType",
                                    "uniqueIdentifier",
                                    "localizedDescription",
                                    "properties",
                                    "value",
                                    "metadata",
                                    "isNotificationEnabled",
                                    "service"
                                  ].forEach((key5)=>{
                                      switch(key5){
                                        case "localizedDescription":
                                        case "value":
                                        case "metadata":
                                          characteristic[key5] = CharacteristicsModel[key5](characteristic["characteristicType"])
                                          break
                                        case "service":
                                          characteristic[key5] = service["uniqueIdentifier"]
                                          break
                                        default:
                                          characteristic[key5] = CharacteristicsModel[key5]()
                                          break
                                      }
                                  })
                                })
                                break
                              case "localizedDescription":
                                service[key4] = ServicesModel[key4](service["serviceType"])
                                break
                              case "isPrimaryService": 
                                service[key4] = false
                                break
                              case "accessory":
                                service[key4] = null
                                break
                              default:
                                service[key4] = ServicesModel[key4]()
                                break
                            }
                          })
                        })
                        break
                    }
                  })
                })
                break
              case "actionSets":
                home[key2] = []
                home["triggers"].forEach((trigger)=>{
                  trigger["actionSets"].forEach((actionSet)=>{
                    home[key2].push(actionSet)
                  })
                })
                break
              case "triggers":
                home[key2].forEach((trigger)=>{
                   [
                    "name",
                    "isEnabled",
                    "lastFireDate",
                    "uniqueIdentifier",
                    "actionSets"
                   ].forEach((key3)=>{
                    switch(key3){
                      case "actionSets":
                        trigger[key3].forEach((actionSet)=>{
                          [
                            "uniqueIdentifier",
                            "name",
                            "actionSetType",
                            "actions",
                            "isExecuting",
                            "lastExecutionDate"
                          ].forEach((key4)=>{
                            switch(key4){
                              default:
                                actionSet[key4] = ActionSetModel[key4]()
                                break
                            }
                          })
                        })
                        break
                      default:
                        trigger[key3] = TriggerModel[key3]()
                        break
                    }
                   })
                })
                break
              case "currentUser":
                [
                  "name",
                  "uniqueIdentifier"
                ].forEach((key3)=>{
                  switch(key3){
                    default:
                      home[key2][key3] = UserModel[key3]()
                      break
                  }
                })
                break
              default:
                home[key2] = HomeModel[key2]()
                break
            }
          })
        })

        break
      case "delegate":
        mockupData[key] = null
        break
      case "primaryHome":
        mockupData[key] = primaryUUID
        break

    }
  })

  return mockupData;
}

export function getHMAccessory(dataType, dataModel, dataDate) {
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
    "delegate",
    "name",
    "uniqueIdentifier",
    "category",
    "room",
    "profiles",
    "cameraProfiles",
    "isReachable",
    "isBlocked",
    "supportsIdentify",
    "services",
    "isBridged",
    "uniqueIdentifierForBridgedAccessories",
    "firmwareVersion",
    "manufacturer",
    "model"
  ].forEach((key)=>{
    switch(key){
      case "services":
        mockupData[key].forEach((service)=>{
          [
            "characteristics",
            "name",
            "uniqueIdentifier",
            "serviceType",
            "localizedDescription",
            "isPrimaryService",
            "isUserInteractive",
            "associatedServiceType",
            "linkedServices",
            "accessory"
          ].forEach((key2)=>{
            switch(key2){
              case "characteristics":
                service[key2].forEach((characteristic)=>{
                  [
                    "characteristicType",
                    "uniqueIdentifier",
                    "localizedDescription",
                    "properties",
                    "value",
                    "metadata",
                    "isNotificationEnabled",
                    "service"
                  ].forEach((key3)=>{
                      switch(key3){
                        case "localizedDescription":
                        case "value":
                        case "metadata":
                          characteristic[key3] = CharacteristicsModel[key3](characteristic["characteristicType"])
                          break
                        case "service":
                          characteristic[key3] = service["uniqueIdentifier"]
                          break
                        default:
                          characteristic[key3] = CharacteristicsModel[key3]()
                          break
                      }
                  })
                })
                break
              case "localizedDescription":
                service[key2] = ServicesModel[key2](mockupData["serviceType"])
                break
              case "isPrimaryService": 
                service[key2] = false
                break
              case "accessory":
                service[key2] = mockupData["uniqueIdentifier"]
                break
              default:
                service[key2] = ServicesModel[key2]()
                break
            }
          })
        })
        break
      case "profiles":
        mockupData[key].forEach((profile)=>{
          [
            "accessory",
            "services",
            "uniqueIdentifier"
          ].forEach((key2)=>{
            switch(key2){
              case "accessory":
                profile[key2] = mockupData["uniqueIdentifier"]
                break
              case "services":
                profile[key2].forEach((service)=>{
                  [
                    "characteristics",
                    "name",
                    "uniqueIdentifier",
                    "serviceType",
                    "localizedDescription",
                    "isPrimaryService",
                    "isUserInteractive",
                    "associatedServiceType",
                    "linkedServices",
                    "accessory",
                  ].forEach((key3)=>{
                    switch(key3){
                      case "characteristics":
                        service[key3].forEach((characteristic) => {
                          [
                            "characteristicType",
                            "uniqueIdentifier",
                            "localizedDescription",
                            "properties",
                            "value",
                            "metadata",
                            "isNotificationEnabled",
                            "service"
                          ].forEach((key4)=>{
                              switch(key4){
                                case "localizedDescription":
                                case "value":
                                case "metadata":
                                  characteristic[key4] = CharacteristicsModel[key4](characteristic["characteristicType"])
                                  break
                                case "service":
                                  characteristic[key4] = service["uniqueIdentifier"]
                                  break
                                default:
                                  characteristic[key4] = CharacteristicsModel[key4]()
                                  break
                              }
                          })
                        })
                        break
                      case "isPrimaryService":
                        service[key3] = false
                        break
                      case "localizedDescription":
                        service[key3] = ServicesModel[key3](service["serviceType"])
                        break
                      case "accessory":
                        service[key3] = mockupData["uniqueIdentifier"]
                        break
                      default:
                        service[key3] = ServicesModel[key3]()
                        break
                    }
                  })
                })
                break
              default:
                profile[key2] = ProfileModel[key2]()
                break

            }
          })
        })
        break
      case "room":
        mockupData[key] = null
        break
      case "cameraProfiles":
        mockupData[key].forEach((cameraProfile)=> {
          [
            "settingsControl",
            "microphoneControl",
            "speakerControl",
            "streamControl",
            "snapshotControl"
          ].forEach((key2)=> {
            switch(key2){
              case "settingsControl":
                [
                  "currentHorizontalTilt",
                  "targetHorizontalTilt",
                  "currentVerticalTilt",
                  "targetVerticalTilt",
                  "opticalZoom",
                  "digitalZoom",
                  "imageMirroring",
                  "imageRotation",
                  "nightVision"
                ].forEach((key3)=>{
                  // console.log("accessory",accessory)
                  // console.log("key5",key5)
                  // console.log("accessory[key5]",accessory[key5])
                  // console.log("key6",key6)
                  // console.log("accessory[key5][key6]",accessory[key5][key6])
                  // console.log("accessory[key5][key6][key7]",accessory[key5][key6][key7])
                  switch(key3){
                    default:
                      [
                        "characteristicType",
                        "uniqueIdentifier",
                        "localizedDescription",
                        "properties",
                        "value",
                        "metadata",
                        "isNotificationEnabled",
                        "service"
                      ].forEach((key4)=>{
                          switch(key4){
                            case "localizedDescription":
                            case "value":
                            case "metadata":
                              cameraProfile[key2][key3][key4] = CharacteristicsModel[key4](cameraProfile[key2][key3]["characteristicType"])
                              break
                            case "service":
                              cameraProfile[key2][key3][key4] = null
                              break
                            default:
                              cameraProfile[key2][key3][key4] = CharacteristicsModel[key4]()
                              break
                          }
                      })
                  }
                })
                break
              case "streamControl":
                [
                  "cameraStream",
                  "streamState",
                  "delegate"
                ].forEach((key3)=>{
                  switch(key3){
                    case "cameraStream":
                      [
                        "aspectRatio",
                        "audioStreamSetting"
                      ].forEach((key4)=>{
                        switch(key4){
                          default:
                            cameraProfile[key2][key3][key4] = StreamControlModel[key4]()
                            break
                        }
                      })
                      break
                    case "streamState":
                      cameraProfile[key2][key3] = StreamControlModel[key3]()
                      break
                    case "delegate":
                      cameraProfile[key2][key3] = null
                      break
                  }
                })
                break
              case "snapshotControl":
                [
                  "mostRecentSnapshot",
                  "delegate"
                ].forEach((key3)=>{
                  switch(key3){
                    case "mostRecentSnapshot":
                      [
                        "aspectRatio",
                        "date"
                      ].forEach((key4)=>{
                        switch(key4){
                          default:
                            cameraProfile[key2][key3][key4] = SnapshotControlModel[key4]()
                            break
                        }
                      })
                      break
                    case "delegate":
                      cameraProfile[key2][key3] = null
                      break
                  }
                })
                break
              case "microphoneControl":
              case "speakerControl":
                [
                  "mute",
                  "volume"
                ].forEach((key3)=>{
                  switch(key3){
                    default:
                      [
                        "characteristicType",
                        "uniqueIdentifier",
                        "localizedDescription",
                        "properties",
                        "value",
                        "metadata",
                        "isNotificationEnabled",
                        "service"
                      ].forEach((key4)=>{
                          switch(key4){
                            case "localizedDescription":
                            case "value":
                            case "metadata":
                              cameraProfile[key2][key3][key4] = CharacteristicsModel[key4](cameraProfile[key2][key3]["characteristicType"])
                              break
                            case "service":
                              cameraProfile[key2][key3][key4] = null
                              break
                            default:
                              cameraProfile[key2][key3][key4] = CharacteristicsModel[key4]()
                              break
                          }
                      })
                  }
                })
                break
            }
          })
        })
        break
      default:
        mockupData[key] = mockupModel[key]()
        break
    }
  })
  return mockupData;
}

export function getHMActionSet(dataType, dataModel, dataDate) {
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
    "uniqueIdentifier",
    "actionSetType",
    "actions",
    "isExecuting",
    "lastExecutionDate"
  ].forEach((key)=>{
    switch(key){
      default:
        mockupData[key] = mockupModel[key]()
        break
    }
  })
  return mockupData;
}

export function getHMCharacteristic(dataType, dataModel, dataDate) {
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
    "characteristicType",
    "uniqueIdentifier",
    "localizedDescription",
    "properties",
    "value",
    "metadata",
    "isNotificationEnabled",
    "service"
  ].forEach((key)=>{
      switch(key){
        case "localizedDescription":
        case "value":
        case "metadata":
          mockupData[key] = mockupModel[key](mockupData["characteristicType"])
          break
        case "service":
          mockupData[key] = null
          break
        default:
          mockupData[key] = mockupModel[key]()
          break
      }
  })
  return mockupData;
}

export function getHMEventTrigger(dataType, dataModel, dataDate) {
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
  var characteristicData = dataModels["HMCharacteristic"].data;
  [
    "name",
    "isEnabled",
    "lastFireDate",
    "uniqueIdentifier",
    "actionSets",
    "triggerActivationState",
    "events",
    "endEvents",
    "recurrences",
    "executeOnce",
    "predicate"
  ].forEach((key)=>{
      switch(key){
        case "actionSets":
          mockupData[key].forEach((actionSet)=>{
            [
              "uniqueIdentifier",
              "actionSetType",
              "actions",
              "isExecuting",
              "lastExecutionDate"
            ].forEach((key2)=>{
              switch(key2){
                default:
                  actionSet[key2] = ActionSetModel[key2]()
                  break
              }
            })
          })
          break;
        case "events":
          mockupData[key].forEach((event)=>{
            switch(getRandomInt(1,7)){
              case 1:
                event = EventModel["HMPresenceEvent"]()
                break
              case 2:
                [
                  "characteristicType",
                  "uniqueIdentifier",
                  "localizedDescription",
                  "properties",
                  "value",
                  "metadata",
                  "isNotificationEnabled",
                  "service"
                ].forEach((key2)=>{
                    switch(key2){
                      case "localizedDescription":
                      case "value":
                      case "metadata":
                        characteristicData[key2] = CharacteristicsModel[key2](characteristicData["characteristicType"])
                        break
                      case "service":
                        characteristicData[key2] = null
                        break
                      default:
                        characteristicData[key2] = CharacteristicsModel[key2]()
                        break
                    }
                })
                event = EventModel["HMCharacteristicEvent"](characteristicData)
                break
              case 3:
                [
                  "characteristicType",
                  "uniqueIdentifier",
                  "localizedDescription",
                  "properties",
                  "value",
                  "metadata",
                  "isNotificationEnabled",
                  "service"
                ].forEach((key2)=>{
                    switch(key2){
                      case "localizedDescription":
                      case "value":
                      case "metadata":
                        characteristicData[key2] = CharacteristicsModel[key2](characteristicData["characteristicType"])
                        break
                      case "service":
                        characteristicData[key2] = null
                        break
                      default:
                        characteristicData[key2] = CharacteristicsModel[key2]()
                        break
                    }
                })
                event = EventModel["HMCharacteristicThresholdRangeEvent"](characteristicData)
                break
              case 4:
                event = EventModel["HMCalendarEvent"]()
                break
              case 5:
                event = EventModel["HMSignificantTimeEvent"]()
                break
              case 6:
                event = EventModel["HMDurationEvent"]()
                break
              case 7:
                event = EventModel["HMLocationEvent"]()
                break
            }
          })
          break;
        case "endEvents":
          mockupData[key].forEach((event)=>{
            switch(getRandomInt(1,7)){
              case 1:
                event = EventModel["HMPresenceEvent"]()
                break
              case 2:
                [
                  "characteristicType",
                  "uniqueIdentifier",
                  "localizedDescription",
                  "properties",
                  "value",
                  "metadata",
                  "isNotificationEnabled",
                  "service"
                ].forEach((key)=>{
                    switch(key){
                      case "localizedDescription":
                      case "value":
                      case "metadata":
                        characteristicData[key] = CharacteristicsModel[key](characteristicData["characteristicType"])
                        break
                      case "service":
                        characteristicData[key] = null
                        break
                      default:
                        characteristicData[key] = CharacteristicsModel[key]()
                        break
                    }
                })
                event = EventModel["HMCharacteristicEvent"](characteristicData)
                break
              case 3:
                [
                  "characteristicType",
                  "uniqueIdentifier",
                  "localizedDescription",
                  "properties",
                  "value",
                  "metadata",
                  "isNotificationEnabled",
                  "service"
                ].forEach((key)=>{
                    switch(key){
                      case "localizedDescription":
                      case "value":
                      case "metadata":
                        characteristicData[key] = CharacteristicsModel[key](characteristicData["characteristicType"])
                        break
                      case "service":
                        characteristicData[key] = null
                        break
                      default:
                        characteristicData[key] = CharacteristicsModel[key]()
                        break
                    }
                })
                event = EventModel["HMCharacteristicThresholdRangeEvent"](characteristicData)
                break
              case 4:
                event = EventModel["HMCalendarEvent"]()
                break
              case 5:
                event = EventModel["HMSignificantTimeEvent"]()
                break
              case 6:
                event = EventModel["HMDurationEvent"]()
                break
              case 7:
                event = EventModel["HMLocationEvent"]()
                break
            }
          })
          break;
        default:
          mockupData[key] = mockupModel[key]()
          break
      }
  })
  return mockupData;
}

export function getHMMatterHome(dataType, dataModel, dataDate) {
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
    "uuid"
  ].forEach((key)=>{
      switch(key){
        default:
          mockupData[key] = mockupModel[key]()
          break
      }
  })
  return mockupData;
}

export function getHMMatterRoom(dataType, dataModel, dataDate) {
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
    "uuid"
  ].forEach((key)=>{
      switch(key){
        default:
          mockupData[key] = mockupModel[key]()
          break
      }
  })
  return mockupData;
}

export function getHMMatterTopology(dataType, dataModel, dataDate) {
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
    "uuid"
  ].forEach((key)=>{
      switch(key){
        default:
          mockupData[key] = mockupModel[key]()
          break
      }
  })
  return mockupData;
}

export function getHMService(dataType, dataModel, dataDate) {
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
    "characteristics",
    "name",
    "uniqueIdentifier",
    "serviceType",
    "localizedDescription",
    "isPrimaryService",
    "isUserInteractive",
    "associatedServiceType",
    "linkedServices",
    "accessory"
  ].forEach((key)=>{
    switch(key){
      case "characteristics":
        mockupData[key].forEach((characteristic)=>{
          [
            "characteristicType",
            "uniqueIdentifier",
            "localizedDescription",
            "properties",
            "value",
            "metadata",
            "isNotificationEnabled",
            "service"
          ].forEach((key2)=>{
              switch(key2){
                case "localizedDescription":
                case "value":
                case "metadata":
                  characteristic[key2] = CharacteristicsModel[key2](characteristic["characteristicType"])
                  break
                case "service":
                  characteristic[key2] = mockupData["uniqueIdentifier"]
                  break
                default:
                  characteristic[key2] = CharacteristicsModel[key2]()
                  break
              }
          })
        })
        break
      case "localizedDescription":
        mockupData[key] = mockupModel[key](mockupData["serviceType"])
        break
      case "isPrimaryService": 
        mockupData[key] = false
        break
      case "accessory":
        mockupData[key] = null
        break
      default:
        mockupData[key] = mockupModel[key]()
        break
    }
  })


  return mockupData;
}

export function getHMTimerTrigger(dataType, dataModel, dataDate) {
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
    "isEnabled",
    "lastFireDate",
    "uniqueIdentifier",
    "actionSets",
    "fireDate",
    "recurrence",
    "recurrenceCalendar",
    "timeZone"
  ].forEach((key)=>{
      switch(key){
        case "actionSets":
          mockupData[key].forEach((actionSet)=>{
            [
              "uniqueIdentifier",
              "actionSetType",
              "actions",
              "isExecuting",
              "lastExecutionDate"
            ].forEach((key2)=>{
              switch(key2){
                default:
                  actionSet[key2] = ActionSetModel[key2]()
                  break
              }
            })
          })
          break;
        default:
          mockupData[key] = mockupModel[key]()
          break
      }
  })
  return mockupData;
}