import {
  toIsoString,
  getRandomInt,
  getNewDate,
  getSleepDate,
} from "@dynamic-data/utils";

import MOCK from "@dynamic-data/movesense-data";


const ModuleStatusModel = {
  name: () => {
    return "Eeprom"
  },
  enabled: () => {
    return true
  },
}

const AppInfoModel = {
  name: () => {
    return "Running app"
  },
  version: () => {
    return "1.0.0"
  },
  company: () => {
    return "Suunto"
  },
  modules: () => {
    let array = []
    array.push({
      name: "Eeprom",
      enabled: true
    })
    return array
  },
}

const DeviceInfoModel = {
  manufacturerName: () => {
    return "Amer Sports"
  },
  brandName: () => {
    return "Suunto"
  },
  productName: () => {
    return "Movesense Swim Sensor"
  },
  variant: () => {
    return "Avocado"
  },
  design: () => {
    return "black"
  },
  hwCompatibilityId: () => {
    return "A"
  },
  serial: () => {
    return "155110123456"
  },
  pcbaSerial: () => {
    return "01234112345678901234567894444N2YYWW"
  },
  sw: () => {
    return "1.0.0"
  },
  hw: () => {
    return "1740G1"
  },
  additionalVersionInfo: () => {
    let array = []
    array.push({
      name: "",
      version: ""
    })
    return array
  },
  addressInfo: () => {
    let array = []
    let name = ""
    switch(getRandomInt(1,2)){
      case 1:
        name = "WIFI"
        break
      case 2:
        name = "BLE"
        break
    }
    array.push({
      name: name,
      address: "80-1F-02-4E-F1-70",
    })
    return array
  },
  apiLevel: () => {
    return "2"
  },
}

const BleConfigModel = {
  DeviceName: () => {
    return "Movesense 1234567890"
  },
}

const AdvStateModel = {
  isAdvertising: () => {
    return true
  },
  PeerAddr: () => {
    return "00:14:22:01:23:45"
  },
}

const AdvSettingsModel = {
  AdvPacket: () => {
    return [0]
  },
  ScanRespPacket: () => {
    return [0]
  },
  Interval: () => {
    return 32
  },
  Timeout: () => {
    return 0
  },
  Properties: () => {
    return {
      Connectable: true,
      Scannable: true,
      Anonymous: true,
    }
  },
}

const PeerListModel = {
  Address: () => {
    return "00:14:22:01:23:45"
  },
  Name: () => {
    return "Movesense 1234567890"
  },
  handle: () => {
    return 0
  },
}

const PeerChangeModel = {
  State: () => {
    let array = []
    switch(getRandomInt(1,2)){
      case 1:
        array.push(0)
        array.push("DISCONNECTED")
        break
      case 2:
        array.push(1)
        array.push("CONNECTED")
        break
    }
    return array
  },
}

const ScanResultModel = {
  address: () => {
    return "00:14:22:01:23:45"
  },
  isScanResponse: () => {
    return true
  },
  rssi: () => {
    return 0
  },
  dataPacket: () => {
    return 0
  },
  name: () => {
    return "Movesense 1234567890"
  },
}

const BondListModel = {
  BondedDevices: () => {
    let array = []
    array.push({
      Address: "00:14:22:01:23:45",
    })
    return array
  },
}

const BondingSettingsModel = {
  Policy: () => {
    let array = []
    let number = getRandomInt(0,4)-1
    array.push(number)
    switch(number){
      case 0:
        array.push("BondingEnabled")
        break
      case 1:
        array.push("BondingDisabled")
        break
      case 2:
        array.push("BondingOnce")
        break
      case 3:
        array.push("BondingSameMac")
        break
    }
    return array
  },
  RecoveryTime: () => {
    return 0
  }
}

const ResetReasonModel = {
  RawValue: () => {
    return 0
  },
  EnumValue: () => {
    let array = []
    let number = getRandomInt(0,8)-1
    array.push(number)
    switch(number){
      case 0:
        array.push("NONE")
        break
      case 1:
        array.push("ASSERT")
        break
      case 2:
        array.push("HARD_FAULT")
        break
      case 3:
        array.push("MEM_FAULT")
        break
      case 4:
        array.push("BUS_FAULT")
        break
      case 5:
        array.push("USAGE_FAULT")
        break
      case 6:
        array.push("WATCHDOG")
        break
      case 7:
        array.push("DIV_BY_ZERO")
        break  
    }
    return array
  },
}

const FaultInfoModel = {
  HFSR: () => {
    return 0
  },
  CFSR: () => {
    return 0
  },
  MMFAR: () => {
    return 0
  },
  BFAR: () => {
    return 0
  },
  R0: () => {
    return 0
  },
  R1: () => {
    return 0
  },
  R2: () => {
    return 0
  },
  R3: () => {
    return 0
  },
  R12: () => {
    return 0
  },
  LR: () => {
    return 0
  },
  PC: () => {
    return 0
  },
  PSR: () => {
    return 0
  },
}

const DebugMessageConfigModel = {
  SystemMessages: () => {
    return false
  },
  UserMessages: () => {
    return false
  },
}

const DebugMessageModel = {
  Id: () => {
    return 0
  },
  Timestamp: () => {
    let x = new Date().getTime()
    x += getRandomInt(-157680000000,157680000000)
    return x
  },
  Level: () => {
    let array = []
    let number = getRandomInt(0,5)-1
    array.push(number)
    switch(number){
      case 0:
        array.push("Fatal")
        break
      case 1:
        array.push("Error")
        break
      case 2:
        array.push("Warning")
        break
      case 3:
        array.push("Info")
        break
      case 4:
        array.push("Verbose")
        break
    }
    return array
  },
  Tag: () => {
    return ""
  },
  Message: () => {
    return ""
  },
}

const DebugLogConfigModel = {
  MinimalLevel: () => {
    let array = []
    let number = getRandomInt(0,5)-1
    array.push(number)
    switch(number){
      case 0:
        array.push("Fatal")
        break
      case 1:
        array.push("Error")
        break
      case 2:
        array.push("Warning")
        break
      case 3:
        array.push("Info")
        break
      case 4:
        array.push("Verbose")
        break
    }
    return array
  }
}

const MemoryModel = {
  Size: () => {
    return 0
  },
  Free: () => {
    return 0
  },
  Used: () => {
    return 0
  },
  LowestFree: () => {
    return 0
  },
  SufficiencyTestResult: () => {
    let array = []
    let number = getRandomInt(0,3)-1
    array.push(number)
    switch(number){
      case 0:
        array.push("NotTested")
        break
      case 1:
        array.push("Passed")
        break
      case 2:
        array.push("Failed")
        break
    }
    return array
  },
}

const ModeModel = {
  current: () => {
    let array = []
    let number = -1
    while (![0,1,2,3,4,5,10,11,12].includes(number)){
      number = getRandomInt(0,13)-1
    }
    
    array.push(number)
    switch(number){
      case 0:
        array.push("Unknown")
        break
      case 1:
        array.push("FullPowerOff")
        break
      case 2:
        array.push("SystemFailure")
        break
      case 3:
        array.push("PowerOff")
        break
      case 4:
        array.push("WaitForCharge")
        break
      case 5:
        array.push("Application")
        break
      case 10:
        array.push("FactoryCalibration")
        break
      case 11:
        array.push("BleTestMode")
        break
      case 12:
        array.push("FwUpdateMode")
        break
    }
    return array
  },
  next: () => {
    let array = []
    let number = -1
    while (![0,1,2,3,4,5,10,11,12].includes(number)){
      number = getRandomInt(0,13)-1
    }
    
    array.push(number)
    switch(number){
      case 0:
        array.push("Unknown")
        break
      case 1:
        array.push("FullPowerOff")
        break
      case 2:
        array.push("SystemFailure")
        break
      case 3:
        array.push("PowerOff")
        break
      case 4:
        array.push("WaitForCharge")
        break
      case 5:
        array.push("Application")
        break
      case 10:
        array.push("FactoryCalibration")
        break
      case 11:
        array.push("BleTestMode")
        break
      case 12:
        array.push("FwUpdateMode")
        break
    }
    return array
  },
}

const StateModel = {
  Timestamp: () => {
    let x = new Date().getTime()
    x += getRandomInt(-157680000000,157680000000)
    return x
  },
  StateId: () => {
    let array = []
    let number = -1
    number = getRandomInt(0,6)-1
    
    array.push(number)
    switch(number){
      case 0:
        array.push("Movement")
        break
      case 1:
        array.push("BatteryStatus")
        break
      case 2:
        array.push("Connector")
        break
      case 3:
        array.push("DoubleTap")
        break
      case 4:
        array.push("Tap")
        break
      case 5:
        array.push("Freefall")
        break
    }
    return array
  },
  NewState: () => {
    return 0
  },

}

const AccInfoModel = {
  SampleRates: () => {
    return [0]
  },
  Ranges: () => {
    return [0]
  },
}

const AccConfigModel = {
  GRange: () => {
    return 0
  },

}

const AccDataModel = {
  Timestamp: () => {
    let x = new Date().getTime()
    x += getRandomInt(-157680000000,157680000000)
    return x
  },
  ArrayAcc: () => {
    return [{
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }]
  },

}

const GyroInfoModel = {
  SampleRates: () => {
    return [0]
  },
  Ranges: () => {
    return [0]
  },
}

const GyroConfigModel = {
  DPSRange: () => {
    return 0
  },

}

const GyroDataModel = {
  Timestamp: () => {
    let x = new Date().getTime()
    x += getRandomInt(-157680000000,157680000000)
    return x
  },
  ArrayGyro: () => {
    return [{
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }]
  },

}

const MagnInfoModel = {
  SampleRates: () => {
    return [0]
  },
  Ranges: () => {
    return [0]
  },
}

const MagnConfigModel = {
  Scale: () => {
    return 0
  },

}

const MagnDataModel = {
  Timestamp: () => {
    let x = new Date().getTime()
    x += getRandomInt(-157680000000,157680000000)
    return x
  },
  ArrayMagn: () => {
    return [{
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }]
  },

}

const IMUInfoModel = {
  SampleRates: () => {
    return [0]
  },
  AccRanges: () => {
    return [0]
  },
  GyroRanges: () => {
    return [0]
  },
  MagnRanges: () => {
    return [0]
  },
}

const IMUConfigModel = {
  AccRange: () => {
    return 0
  },
  GyroRange: () => {
    return 0
  },
  MagnRange: () => {
    return 0
  },
}

const IMU9DataModel = {
  Timestamp: () => {
    let x = new Date().getTime()
    x += getRandomInt(-157680000000,157680000000)
    return x
  },
  ArrayAcc: () => {
    return [{
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }]
  },
  ArrayGyro: () => {
    return [{
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }]
  },
  ArrayMagn: () => {
    return [{
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }]
  },
}

const IMU6DataModel = {
  Timestamp: () => {
    let x = new Date().getTime()
    x += getRandomInt(-157680000000,157680000000)
    return x
  },
  ArrayAcc: () => {
    return [{
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }]
  },
  ArrayGyro: () => {
    return [{
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }]
  },
}


const IMU6MDataModel = {
  Timestamp: () => {
    let x = new Date().getTime()
    x += getRandomInt(-157680000000,157680000000)
    return x
  },
  ArrayAcc: () => {
    return [{
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }]
  },
  ArrayMagn: () => {
    return [{
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }]
  },
}

const ECGInfoModel = {
  CurrentSampleRate: () => {
    return 512
  },
  AvailableSampleRates: () => {
    return [0]
  },
  ArraySize: () => {
    return 16
  },
  LowPass: () => {
    return [0]
  },
  HighPass: () => {
    return [0.0]
  },
}

const ECGConfigModel = {
  LowPass: () => {
    return 0
  },
  HighPass: () => {
    return 0.0
  },
}

const ECGDataModel = {
  Timestamp: () => {
    let x = new Date().getTime()
    x += getRandomInt(-157680000000,157680000000)
    return x
  },
  Samples: () => {
    return [0]
  },
}

const HRInfoModel = {
  Min: ()=>{
    return 10
  },
  Max: ()=>{
    return 250
  },
  Accuracy: ()=>{
    return 8.0
  },
}

const HRDataModel = {
  average: ()=>{
    return 0.0
  },
  rrData: ()=>{
    return [240]
  },
}

const TempInfoModel = {
  Min: ()=>{
    return 10
  },
  Max: ()=>{
    return 250
  },
  Accuracy: ()=>{
    return 8.0
  },
}

const TemperatureValueModel = {
  Timestamp: () => {
    let x = new Date().getTime()
    x += getRandomInt(-157680000000,157680000000)
    return x
  },
  Measurement: () => {
    return 0.0
  },
}

const ProductDataModel = {
  manufacturerName: ()=>{
    return "Suunto"
  },
  productName: ()=>{
    return "Movesense Sensor"
  },
  variant: ()=>{
    return "Avocado"
  },
  design: ()=>{
    return "black"
  },
  hwCompatibilityId: ()=>{
    return "A5"
  },
  serial: ()=>{
    return "155110123456"
  },
  pcbaSerial: ()=>{
    return "01234112345678901234567894444N2YYW"
  },
  hw: ()=>{
    return "1740G1"
  },
  addressInfo: ()=>{
    return {
      name: "BLE",
      address: "80-1F-02-4E-F1-70"
    }
  },
}

const CalibrationDataModel = {
  acc_matrix: ()=>{
    return {
      data: [
        {
          "x": 0.00000000000000000,
          "y": 0.00000000000000000,
          "z": 0.00000000000000000,
        },
        {
          "x": 0.00000000000000000,
          "y": 0.00000000000000000,
          "z": 0.00000000000000000,
        },
        {
          "x": 0.00000000000000000,
          "y": 0.00000000000000000,
          "z": 0.00000000000000000,
        },
      ]
    }
  },
  acc_bias: ()=>{
    return {
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }
  },
  gyro_matrix: ()=>{
    return {
      data: [
        {
          "x": 0.00000000000000000,
          "y": 0.00000000000000000,
          "z": 0.00000000000000000,
        },
        {
          "x": 0.00000000000000000,
          "y": 0.00000000000000000,
          "z": 0.00000000000000000,
        },
        {
          "x": 0.00000000000000000,
          "y": 0.00000000000000000,
          "z": 0.00000000000000000,
        },
      ]
    }
  },
  magn_matrix: ()=>{
    return {
      data: [
        {
          "x": 0.00000000000000000,
          "y": 0.00000000000000000,
          "z": 0.00000000000000000,
        },
        {
          "x": 0.00000000000000000,
          "y": 0.00000000000000000,
          "z": 0.00000000000000000,
        },
        {
          "x": 0.00000000000000000,
          "y": 0.00000000000000000,
          "z": 0.00000000000000000,
        },
      ]
    }
  },
  magn_bias: ()=>{
    return {
      "x": 0.00000000000000000,
      "y": 0.00000000000000000,
      "z": 0.00000000000000000,
    }
  },
}

const CalibrationMatrixModel = {
  data: ()=>{
    return [
      {
        "x": 0.00000000000000000,
        "y": 0.00000000000000000,
        "z": 0.00000000000000000,
      },
      {
        "x": 0.00000000000000000,
        "y": 0.00000000000000000,
        "z": 0.00000000000000000,
      },
      {
        "x": 0.00000000000000000,
        "y": 0.00000000000000000,
        "z": 0.00000000000000000,
      },
    ]
  },
}

const StepsDoneModel = {
  steps: ()=>{
    return [
      {
        stepNum: 0
      }
    ]
  },
}

const EepromInfoModel = {
  Model: () => {
    return ""
  },
  Size: () => {
    return 0
  },
}

const EepromDataModel = {
  bytes: () => {
    return [0]
  },
}

const LedStateModel = {
  IsOn: () => {
    return true
  },
  LedColor: () => {
    let array = []
    let number = getRandomInt(0,3)-1
    array.push(number)
    switch(number){
      case 0:
        array.push("Red")
        break
      case 1:
        array.push("Green")
        break
      case 2:
        array.push("Blue")
        break
    }
    return array
  },
}

const VisualIndStateModel = {
  state: () => {
    let array = []
    let number = getRandomInt(0,3)-1
    array.push(number)
    switch(number){
      case 0:
        array.push("NO_VISUAL_INDICATIONS")
        break
      case 1:
        array.push("CONTINUOUS_VISUAL_INDICATION")
        break
      case 2:
        array.push("SHORT_VISUAL_INDICATION")
        break
    }
    return array
  },
}

const dataModels = {
  ModuleStatus: {
    data: MOCK.ModuleStatus,
    mockup: ModuleStatusModel
  },
  AppInfo: {
    data: MOCK.AppInfo,
    mockup: AppInfoModel
  },
  DeviceInfo: {
    data: MOCK.DeviceInfo,
    mockup: DeviceInfoModel
  },
  BleConfig: {
    data: MOCK.BleConfig,
    mockup: BleConfigModel
  },
  AdvState: {
    data: MOCK.AdvState,
    mockup: AdvStateModel
  },
  AdvSettings: {
    data: MOCK.AdvSettings,
    mockup: AdvSettingsModel
  },
  PeerList: {
    data: MOCK.PeerList,
    mockup: PeerListModel
  },
  PeerChange: {
    data: MOCK.PeerChange,
    mockup: PeerChangeModel
  },
  ScanResult: {
    data: MOCK.ScanResult,
    mockup: ScanResultModel
  },
  BondList: {
    data: MOCK.BondList,
    mockup: BondListModel
  },
  BondingSettings: {
    data: MOCK.BondingSettings,
    mockup: BondingSettingsModel
  },
  ResetReason: {
    data: MOCK.ResetReason,
    mockup: ResetReasonModel
  },
  FaultInfo: {
    data: MOCK.FaultInfo,
    mockup: FaultInfoModel
  },
  DebugMessageConfig: {
    data: MOCK.DebugMessageConfig,
    mockup: DebugMessageConfigModel
  },
  DebugMessage: {
    data: MOCK.DebugMessage,
    mockup: DebugMessageModel
  },
  DebugLogResult: {
    data: MOCK.DebugLogResult,
    mockup: DebugMessageModel
  },
  DebugLogConfig: {
    data: MOCK.DebugLogConfig,
    mockup: DebugLogConfigModel
  },
  Memory: {
    data: MOCK.Memory,
    mockup: MemoryModel
  },
  Mode: {
    data: MOCK.SystemModeStatus,
    mockup: ModeModel
  },
  State: {
    data: MOCK.StateChange,
    mockup: StateModel
  },
  AccInfo: {
    data: MOCK.AccInfo,
    mockup: AccInfoModel
  },
  AccConfig: {
    data: MOCK.AccConfig,
    mockup: AccConfigModel
  },
  AccData: {
    data: MOCK.AccData,
    mockup: AccDataModel
  },
  GyroInfo: {
    data: MOCK.GyroInfo,
    mockup: GyroInfoModel
  },
  GyroConfig: {
    data: MOCK.GyroConfig,
    mockup: GyroConfigModel
  },
  GyroData: {
    data: MOCK.GyroData,
    mockup: GyroDataModel
  },
  MagnInfo: {
    data: MOCK.MagnInfo,
    mockup: MagnInfoModel
  },
  MagnConfig: {
    data: MOCK.MagnConfig,
    mockup: MagnConfigModel
  },
  MagnData: {
    data: MOCK.MagnData,
    mockup: MagnDataModel
  },
  IMUInfo: {
    data: MOCK.IMUInfo,
    mockup: IMUInfoModel
  },
  IMUConfig: {
    data: MOCK.IMUConfig,
    mockup: IMUConfigModel
  },
  IMU9Data: {
    data: MOCK.IMU9Data,
    mockup: IMU9DataModel
  },
  IMU6Data: {
    data: MOCK.IMU6Data,
    mockup: IMU6DataModel
  },
  IMU6MData: {
    data: MOCK.IMU6MData,
    mockup: IMU6MDataModel
  },
  ECGInfo: {
    data: MOCK.ECGInfo,
    mockup: ECGInfoModel
  },
  ECGConfig: {
    data: MOCK.ECGConfig,
    mockup: ECGConfigModel
  },
  ECGData: {
    data: MOCK.ECGData,
    mockup: ECGDataModel
  },
  HRInfo: {
    data: MOCK.HRInfo,
    mockup: HRInfoModel
  },
  HRData: {
    data: MOCK.HRData,
    mockup: HRDataModel
  },
  TempInfo: {
    data: MOCK.TempInfo,
    mockup: TempInfoModel
  },
  TemperatureValue: {
    data: MOCK.TemperatureValue,
    mockup: TemperatureValueModel
  },
  ProductData: {
    data: MOCK.ProductData,
    mockup: ProductDataModel
  },
  CalibrationData: {
    data: MOCK.CalibrationData,
    mockup: CalibrationDataModel
  },
  CalibrationMatrix: {
    data: MOCK.CalibrationMatrix,
    mockup: CalibrationMatrixModel
  },
  StepsDone: {
    data: MOCK.StepsDone,
    mockup: StepsDoneModel
  },
  EepromInfo: {
    data: MOCK.EepromInfo,
    mockup: EepromInfoModel
  },
  EepromData: {
    data: MOCK.EepromData,
    mockup: EepromDataModel
  },
  LedState: {
    data: MOCK.LedState,
    mockup: LedStateModel
  },
  Leds: {
    data: MOCK.Leds,
    mockup: LedStateModel
  },
  VisualIndState: {
    data: MOCK.VisualIndState,
    mockup: VisualIndStateModel
  },
};





export function getModelCSVHeader(dataModel) {
  return dataModels[dataModel].data[0].split("\t");
}

export function getModuleStatus(dataType, dataModel, dataDate) {
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
      "enabled"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

  return mockupData;
}
export function getAppInfo(dataType, dataModel, dataDate) {
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
      "version",
      "company",
      "modules"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

  return mockupData;
}
export function getDeviceInfo(dataType, dataModel, dataDate) {
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
      "manufacturerName",
      "brandName",
      "productName",
      "variant",
      "design",
      "hwCompatibilityId",
      "serial",
      "pcbaSerial",
      "sw",
      "hw",
      "additionalVersionInfo",
      "addressInfo",
      "apiLevel",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

  return mockupData;
}

export function getBleConfig(dataType, dataModel, dataDate) {
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
      "DeviceName",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

  return mockupData;
}

export function getAdvState(dataType, dataModel, dataDate) {
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
      "isAdvertising",
      "PeerAddr"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

  return mockupData;
}

export function getAdvSettings(dataType, dataModel, dataDate) {
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
      "AdvPacket",
      "ScanRespPacket",
      "Interval",
      "Timeout",
      "Properties"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

  return mockupData;
}

export function getPeerList(dataType, dataModel, dataDate) {
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
  mockupData.forEach((peer)=> {
    [
      "Address",
      "Name",
      "handle"
    ].forEach((key, i) => {
      switch (key) {
        default:
          peer[key] = mockupModel[key]();
          break;
      }
    });
  })
    

  return mockupData;
}

export function getPeerChange(dataType, dataModel, dataDate) {
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
      "Peer",
      "State"
    ].forEach((key, i) => {
      switch (key) {
        case "Peer":
          [
            "Address",
            "Name",
            "handle"
          ].forEach((key2, i) => {
            switch (key2) {
              default:
                mockupData[key][key2] = PeerListModel[key2]();
                break;
            }
          });
          break;
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getScanResult(dataType, dataModel, dataDate) {
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
      "address",
      "isScanResponse",
      "rssi",
      "dataPacket",
      "name"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getBondList(dataType, dataModel, dataDate) {
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
      "BondedDevices"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getBondingSettings(dataType, dataModel, dataDate) {
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
      "Policy",
      "RecoveryTime",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getResetReason(dataType, dataModel, dataDate) {
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
      "RawValue",
      "EnumValue",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getFaultInfo(dataType, dataModel, dataDate) {
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
      "HFSR",
      "CFSR",
      "MMFAR",
      "BFAR",
      "R0",
      "R1",
      "R2",
      "R3",
      "R12",
      "LR",
      "PC",
      "PSR",    
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getDebugMessageConfig(dataType, dataModel, dataDate) {
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
      "SystemMessages",
      "UserMessages",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getDebugMessage(dataType, dataModel, dataDate) {
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
      "Id",
      "Timestamp",
      "Level",
      "Tag",
      "Message"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getDebugLogResult(dataType, dataModel, dataDate) {
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
   mockupData["Messages"].forEach((obj)=>{
    [
      "Id",
      "Timestamp",
      "Level",
      "Tag",
      "Message"
    ].forEach((key, i) => {
      switch (key) {
        default:
          obj[key] = mockupModel[key]();
          break;
      }
    });
   })

    

  return mockupData;
}

export function getDebugLogConfig(dataType, dataModel, dataDate) {
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
      "MinimalLevel"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getMemory(dataType, dataModel, dataDate) {
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
      "Size",
      "Free",
      "Used",
      "LowestFree",
      "SufficiencyTestResult"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getSystemModeStatus(dataType, dataModel, dataDate) {
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
      "current",
      "next",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getState(dataType, dataModel, dataDate) {
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
      "Timestamp",
      "StateId",
      "NewState",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getAccInfo(dataType, dataModel, dataDate) {
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
      "SampleRates",
      "Ranges",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getAccConfig(dataType, dataModel, dataDate) {
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
      "GRange",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getAccData(dataType, dataModel, dataDate) {
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
      "Timestamp",
      "ArrayAcc",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getGyroInfo(dataType, dataModel, dataDate) {
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
      "SampleRates",
      "Ranges",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getGyroConfig(dataType, dataModel, dataDate) {
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
      "DPSRange",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getGyroData(dataType, dataModel, dataDate) {
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
      "Timestamp",
      "ArrayGyro",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getMagnInfo(dataType, dataModel, dataDate) {
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
      "SampleRates",
      "Ranges",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getMagnConfig(dataType, dataModel, dataDate) {
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
      "Scale",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getMagnData(dataType, dataModel, dataDate) {
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
      "Timestamp",
      "ArrayMagn",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getIMUInfo(dataType, dataModel, dataDate) {
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
      "SampleRates",
      "AccRanges",
      "GyroRanges",
      "MagnRanges",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getIMUConfig(dataType, dataModel, dataDate) {
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
      "AccRange",
      "GyroRange",
      "MagnRange",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getIMU9Data(dataType, dataModel, dataDate) {
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
      "Timestamp",
      "ArrayAcc",
      "ArrayGyro",
      "ArrayMagn",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getIMU6Data(dataType, dataModel, dataDate) {
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
      "Timestamp",
      "ArrayAcc",
      "ArrayGyro",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getIMU6MData(dataType, dataModel, dataDate) {
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
      "Timestamp",
      "ArrayAcc",
      "ArrayMagn",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getECGInfo(dataType, dataModel, dataDate) {
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
      "CurrentSampleRate",
      "AvailableSampleRates",
      "ArraySize",
      "LowPass",
      "HighPass",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getECGConfig(dataType, dataModel, dataDate) {
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
      "LowPass",
      "HighPass",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getECGData(dataType, dataModel, dataDate) {
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
      "Timestamp",
      "Samples",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getHRInfo(dataType, dataModel, dataDate) {
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
      "Min",
      "Max",
      "Accuracy",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getHRData(dataType, dataModel, dataDate) {
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
      "average",
      "rrData",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getTempInfo(dataType, dataModel, dataDate) {
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
      "Min",
      "Max",
      "Accuracy",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getTemperatureValue(dataType, dataModel, dataDate) {
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
      "Timestamp",
      "Measurement",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getProductData(dataType, dataModel, dataDate) {
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
      "manufacturerName",
      "productName",
      "variant",
      "design",
      "hwCompatibilityId",
      "serial",
      "pcbaSerial",
      "hw",
      "addressInfo"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getCalibrationData(dataType, dataModel, dataDate) {
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
      "acc_matrix",
      "acc_bias",
      "gyro_matrix",
      "magn_matrix",
      "magn_bias",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getCalibrationMatrix(dataType, dataModel, dataDate) {
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
      "data",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getStepsDone(dataType, dataModel, dataDate) {
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
      "steps",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getEepromInfo(dataType, dataModel, dataDate) {
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
      "Model",
      "Size",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getEepromData(dataType, dataModel, dataDate) {
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
      "bytes",
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });

    

  return mockupData;
}

export function getLeds(dataType, dataModel, dataDate) {
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
  if (dataModel === "Leds"){
    mockupData["LedStates"].forEach((obj)=>{
      [
        "IsOn",
        "LedColor"
      ].forEach((key, i) => {
        switch (key) {
          default:
            obj[key] = mockupModel[key]();
            break;
        }
      });
    })
  } else {
    [
      "IsOn",
      "LedColor"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
  }
    

    

  return mockupData;
}

export function getVisualIndState(dataType, dataModel, dataDate) {
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
  if (dataModel === "Leds"){
    mockupData["LedStates"].forEach((obj)=>{
      [
        "IsOn",
        "LedColor"
      ].forEach((key, i) => {
        switch (key) {
          default:
            obj[key] = mockupModel[key]();
            break;
        }
      });
    })
  } else {
    [
      "state"
    ].forEach((key, i) => {
      switch (key) {
        default:
          mockupData[key] = mockupModel[key]();
          break;
      }
    });
  }
    

    

  return mockupData;
}