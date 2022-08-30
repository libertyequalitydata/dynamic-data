export const HMAccessory = {
  "delegate": null, //Optional
  "name": "Example Accessory 1",
  "uniqueIdentifier": "e7e227f6-279f-4a6c-9012-13fe637759a4",
  "category": {
    "categoryType": "HMAccessoryCategoryTypeOutlet",
    "localizedDescription": "An outlet accessory."
  },
  "room": "a00a9cb9-4c71-4431-a6bb-d47004141f52", //Optional | Callback?
  "profiles": [
    {
      "accessory": "e7e227f6-279f-4a6c-9012-13fe637759a4", //Optional | Callback?
      "services": [
        {
        "characteristics": [
          {
            "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
            "localizedDescription": "",
            "properties": ["HMCharacteristicPropertyReadable"],
            "characteristicType": "HMCharacteristicTypeBatteryLevel",
            "value": 20,
            "metadata": { //Optional
              "manufacturerDescription": "",//Optional
              "validValues": [20,30,0],//Optional
              "minimumValue": -100,//Optional
              "maximumValue": 100,//Optional
              "stepValue": 0.1,//Optional
              "maxLength": 200,//Optional
              "format": "HMCharacteristicMetadataFormatBool",//Optional
              "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
            }, 
            "isNotificationEnabled": true,
            "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
          }
        ],
        "name": "Service 1",
        "uniqueIdentifier": "46010240-a55d-4627-8fe7-2a317787097d",
        "serviceType": "HMServiceTypeLightbulb",
        "localizedDescription": "A light bulb service.",
        "isPrimaryService": true,
        "isUserInteractive": true,
        "associatedServiceType": null, //Optional
        "linkedServices": [
          "8c8ec873-320c-441b-9a10-4036e9b4e0fd",
        ], //Optional
        "accessory": "e7e227f6-279f-4a6c-9012-13fe637759a4", //Optional | Callback?
        }
      ],
      "uniqueIdentifier": "de27bda3-5463-4197-ab7e-3274d241d747",

    }
  ],
  "cameraProfiles": [ //Optional
    {
      "settingsControl": { //Optional
        "currentHorizontalTilt": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        },
        "targetHorizontalTilt": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        },
        "currentVerticalTilt": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        },
        "targetVerticalTilt": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        },
        "opticalZoom": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        },
        "digitalZoom": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        },
        "imageMirroring": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        },
        "imageRotation": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        },
        "nightVision": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        },
      },
      "microphoneControl": { //Optional
        "mute": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        },
        "volume": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        }
      },
      "speakerControl": { //Optional
        "mute": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        },
        "volume": { //Optional
          "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
          "localizedDescription": "",
          "properties": ["HMCharacteristicPropertyReadable"],
          "characteristicType": "HMCharacteristicTypeBatteryLevel",
          "value": 20,
          "metadata": { //Optional
            "manufacturerDescription": "",//Optional
            "validValues": [20,30,0],//Optional
            "minimumValue": -100,//Optional
            "maximumValue": 100,//Optional
            "stepValue": 0.1,//Optional
            "maxLength": 200,//Optional
            "format": "HMCharacteristicMetadataFormatBool",//Optional
            "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
          }, 
          "isNotificationEnabled": true,
          "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
        }
      },
      "streamControl": { //Optional
        "cameraStream": { //Optional
          "aspectRatio": 0.000000000,
          "audioStreamSetting": 1
        },
        "streamState": 2,
        "delegate": null
      },
      "snapshotControl": { //Optional
        "mostRecentSnapshot": { //Optional
          "aspectRatio": 0.000000000,
          "date": 1659363019
        }, 
        "delegate": null
      },
    }
  ], //Optional
  "isReachable": true,
  "isBlocked": true,
  "supportsIdentify": true,
  "services": [
    {
    "characteristics": [
      {
        "uniqueIdentifier": "b7c9d6ca-b90d-4f4b-9905-b2718ec84b50",
        "localizedDescription": "",
        "properties": ["HMCharacteristicPropertyReadable"],
        "characteristicType": "HMCharacteristicTypeBatteryLevel",
        "value": 20,
        "metadata": { //Optional
          "manufacturerDescription": "",//Optional
          "validValues": [20,30,0],//Optional
          "minimumValue": -100,//Optional
          "maximumValue": 100,//Optional
          "stepValue": 0.1,//Optional
          "maxLength": 200,//Optional
          "format": "HMCharacteristicMetadataFormatBool",//Optional
          "units": "HMCharacteristicMetadataUnitsPercentage",//Optional
        }, 
        "isNotificationEnabled": true,
        "service": "46010240-a55d-4627-8fe7-2a317787097d" //Optional
      }
    ],
    "name": "Service 1",
    "uniqueIdentifier": "46010240-a55d-4627-8fe7-2a317787097d",
    "serviceType": "HMServiceTypeLightbulb",
    "localizedDescription": "A light bulb service.",
    "isPrimaryService": true,
    "isUserInteractive": true,
    "associatedServiceType": null, //Optional
    "linkedServices": [
      "8c8ec873-320c-441b-9a10-4036e9b4e0fd",
    ], //Optional
    "accessory": "e7e227f6-279f-4a6c-9012-13fe637759a4", //Optional | Callback?
    }
  ],
  "isBridged": true,
  "uniqueIdentifierForBridgedAccessories": ["5c7597f8-18ad-447d-aa2d-f3ccc6945946"], //Optional
  "firmwareVersion": "1.0.0", //Optional
  "manufacturer": "Manufacturer Name", //Optional
  "model": "Model Name" //Optional

}