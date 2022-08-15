export const HMCharacteristic = {
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