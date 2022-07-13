"use strict";

const MOCK = require("@dynamic-data/movesense-data");

const { AccConfig,AccData,AccInfo,AdvSettings,AdvState,AppInfo,BleConfig,BondList,BondingSettings,CalibrationData,CalibrationMatrix,DebugLogConfig,DebugLogResult,DebugMessage,DebugMessageConfig,DeviceInfo,ECGConfig,ECGData,ECGInfo,EepromData,EepromInfo,FaultInfo,GyroConfig,GyroData,GyroInfo,HRData,HRInfo,IMU6Data,IMU6MData,IMU9Data,IMUConfig,IMUInfo,LedState,Leds,MagnConfig,MagnData,MagnInfo,Memory,ModuleStatus,PeerChange,PeerList,ProductData,ResetReason,ScanResult,State,StateChange,StepsDone,SystemModeStatus,TempInfo,TemperatureValue,VisualIndState, } = require("@dynamic-data/movesense-data");

describe("Movesense", () => {
  //test.todo("needs tests");
  it("Mockup datamodels from default", () => {
    console.log("MOCK ", MOCK);
    expect(typeof MOCK).toBe("object");
  });
  it("Expanded RawDataObject datamodel from default", () => {
    console.log("MOCK ", JSON.stringify(MOCK, undefined, 2));
    expect(typeof MOCK).toBe("object");
  });
  it("AccConfig datamodel from default", () => {
    console.log("AccConfig ", JSON.stringify(AccConfig, undefined, 2));
    expect(typeof AccConfig).toBe("object");
  });
  it("AccData datamodel from default", () => {
    console.log("AccData ", JSON.stringify(AccData, undefined, 2));
    expect(typeof AccData).toBe("object");
  });
  it("AccInfo datamodel from default", () => {
    console.log("AccInfo ", JSON.stringify(AccInfo, undefined, 2));
    expect(typeof AccInfo).toBe("object");
  });
  it("AdvSettings datamodel from default", () => {
    console.log("AdvSettings ", JSON.stringify(AdvSettings, undefined, 2));
    expect(typeof AdvSettings).toBe("object");
  });
  it("AdvState datamodel from default", () => {
    console.log("AdvState ", JSON.stringify(AdvState, undefined, 2));
    expect(typeof AdvState).toBe("object");
  });
  it("AppInfo datamodel from default", () => {
    console.log("AppInfo ", JSON.stringify(AppInfo, undefined, 2));
    expect(typeof AppInfo).toBe("object");
  });
  it("BleConfig datamodel from default", () => {
    console.log("BleConfig ", JSON.stringify(BleConfig, undefined, 2));
    expect(typeof BleConfig).toBe("object");
  });
  it("BondList datamodel from default", () => {
    console.log("BondList ", JSON.stringify(BondList, undefined, 2));
    expect(typeof BondList).toBe("object");
  });
  it("BondingSettings datamodel from default", () => {
    console.log("BondingSettings ", JSON.stringify(BondingSettings, undefined, 2));
    expect(typeof BondingSettings).toBe("object");
  });
  it("CalibrationData datamodel from default", () => {
    console.log("CalibrationData ", JSON.stringify(CalibrationData, undefined, 2));
    expect(typeof CalibrationData).toBe("object");
  });
  it("CalibrationMatrix datamodel from default", () => {
    console.log("CalibrationMatrix ", JSON.stringify(CalibrationMatrix, undefined, 2));
    expect(typeof CalibrationMatrix).toBe("object");
  });
  it("DebugLogConfig datamodel from default", () => {
    console.log("DebugLogConfig ", JSON.stringify(DebugLogConfig, undefined, 2));
    expect(typeof DebugLogConfig).toBe("object");
  });
  it("DebugLogResult datamodel from default", () => {
    console.log("DebugLogResult ", JSON.stringify(DebugLogResult, undefined, 2));
    expect(typeof DebugLogResult).toBe("object");
  });

  it("DebugMessage datamodel from default", () => {
    console.log("DebugMessage ", JSON.stringify(DebugMessage, undefined, 2));
    expect(typeof DebugMessage).toBe("object");
  });
  it("DebugMessageConfig datamodel from default", () => {
    console.log("DebugMessageConfig ", JSON.stringify(DebugMessageConfig, undefined, 2));
    expect(typeof DebugMessageConfig).toBe("object");
  });
  it("DeviceInfo datamodel from default", () => {
    console.log("DeviceInfo ", JSON.stringify(DeviceInfo, undefined, 2));
    expect(typeof DeviceInfo).toBe("object");
  });
  it("ECGConfig datamodel from default", () => {
    console.log("ECGConfig ", JSON.stringify(ECGConfig, undefined, 2));
    expect(typeof ECGConfig).toBe("object");
  });
  it("ECGData datamodel from default", () => {
    console.log("ECGData ", JSON.stringify(ECGData, undefined, 2));
    expect(typeof ECGData).toBe("object");
  });
  it("ECGInfo datamodel from default", () => {
    console.log("ECGInfo ", JSON.stringify(ECGInfo, undefined, 2));
    expect(typeof ECGInfo).toBe("object");
  });
  it("EepromData datamodel from default", () => {
    console.log("EepromData ", JSON.stringify(EepromData, undefined, 2));
    expect(typeof EepromData).toBe("object");
  });
  it("EepromInfo datamodel from default", () => {
    console.log("EepromInfo ", JSON.stringify(EepromInfo, undefined, 2));
    expect(typeof EepromInfo).toBe("object");
  });
  it("FaultInfo datamodel from default", () => {
    console.log("FaultInfo ", JSON.stringify(FaultInfo, undefined, 2));
    expect(typeof FaultInfo).toBe("object");
  });
  it("GyroConfig datamodel from default", () => {
    console.log("GyroConfig ", JSON.stringify(GyroConfig, undefined, 2));
    expect(typeof GyroConfig).toBe("object");
  });
  it("GyroData datamodel from default", () => {
    console.log("GyroData ", JSON.stringify(GyroData, undefined, 2));
    expect(typeof GyroData).toBe("object");
  });
  it("GyroInfo datamodel from default", () => {
    console.log("GyroInfo ", JSON.stringify(GyroInfo, undefined, 2));
    expect(typeof GyroInfo).toBe("object");
  });
  it("GyroData datamodel from default", () => {
    console.log("GyroData ", JSON.stringify(GyroData, undefined, 2));
    expect(typeof GyroData).toBe("object");
  });
  it("HRData datamodel from default", () => {
    console.log("HRData ", JSON.stringify(HRData, undefined, 2));
    expect(typeof HRData).toBe("object");
  });
  it("HRInfo datamodel from default", () => {
    console.log("HRInfo ", JSON.stringify(HRInfo, undefined, 2));
    expect(typeof HRInfo).toBe("object");
  });
  it("IMU6Data datamodel from default", () => {
    console.log("IMU6Data ", JSON.stringify(IMU6Data, undefined, 2));
    expect(typeof IMU6Data).toBe("object");
  });
  it("IMU6MData datamodel from default", () => {
    console.log("IMU6MData ", JSON.stringify(IMU6MData, undefined, 2));
    expect(typeof IMU6MData).toBe("object");
  });
  it("IMU9Data datamodel from default", () => {
    console.log("IMU9Data ", JSON.stringify(IMU9Data, undefined, 2));
    expect(typeof IMU9Data).toBe("object");
  });
  it("IMUConfig datamodel from default", () => {
    console.log("IMUConfig ", JSON.stringify(IMUConfig, undefined, 2));
    expect(typeof IMUConfig).toBe("object");
  });
  it("IMUInfo datamodel from default", () => {
    console.log("IMUInfo ", JSON.stringify(IMUInfo, undefined, 2));
    expect(typeof IMUInfo).toBe("object");
  });
  it("LedState datamodel from default", () => {
    console.log("LedState ", JSON.stringify(LedState, undefined, 2));
    expect(typeof LedState).toBe("object");
  });
  it("Leds datamodel from default", () => {
    console.log("Leds ", JSON.stringify(Leds, undefined, 2));
    expect(typeof Leds).toBe("object");
  });
  it("MagnConfig datamodel from default", () => {
    console.log("MagnConfig ", JSON.stringify(MagnConfig, undefined, 2));
    expect(typeof MagnConfig).toBe("object");
  });
  it("MagnData datamodel from default", () => {
    console.log("MagnData ", JSON.stringify(MagnData, undefined, 2));
    expect(typeof MagnData).toBe("object");
  });
  it("MagnInfo datamodel from default", () => {
    console.log("MagnInfo ", JSON.stringify(MagnInfo, undefined, 2));
    expect(typeof MagnInfo).toBe("object");
  });
  it("Memory datamodel from default", () => {
    console.log("Memory ", JSON.stringify(Memory, undefined, 2));
    expect(typeof Memory).toBe("object");
  });
  it("ModuleStatus datamodel from default", () => {
    console.log("ModuleStatus ", JSON.stringify(ModuleStatus, undefined, 2));
    expect(typeof ModuleStatus).toBe("object");
  });
  it("PeerChange datamodel from default", () => {
    console.log("PeerChange ", JSON.stringify(PeerChange, undefined, 2));
    expect(typeof PeerChange).toBe("object");
  });
  it("PeerList datamodel from default", () => {
    console.log("PeerList ", JSON.stringify(PeerList, undefined, 2));
    expect(typeof PeerList).toBe("object");
  });
  it("ProductData datamodel from default", () => {
    console.log("ProductData ", JSON.stringify(ProductData, undefined, 2));
    expect(typeof ProductData).toBe("object");
  });
  it("ResetReason datamodel from default", () => {
    console.log("ResetReason ", JSON.stringify(ResetReason, undefined, 2));
    expect(typeof ResetReason).toBe("object");
  });
  it("ScanResult datamodel from default", () => {
    console.log("ScanResult ", JSON.stringify(ScanResult, undefined, 2));
    expect(typeof ScanResult).toBe("object");
  });
  it("State datamodel from default", () => {
    console.log("State ", JSON.stringify(State, undefined, 2));
    expect(typeof State).toBe("number");
  });
  it("StateChange datamodel from default", () => {
    console.log("StateChange ", JSON.stringify(StateChange, undefined, 2));
    expect(typeof StateChange).toBe("object");
  });
  it("StepsDone datamodel from default", () => {
    console.log("StepsDone ", JSON.stringify(StepsDone, undefined, 2));
    expect(typeof StepsDone).toBe("object");
  });
  it("SystemModeStatus datamodel from default", () => {
    console.log("SystemModeStatus ", JSON.stringify(SystemModeStatus, undefined, 2));
    expect(typeof SystemModeStatus).toBe("object");
  });
  it("TempInfo datamodel from default", () => {
    console.log("TempInfo ", JSON.stringify(TempInfo, undefined, 2));
    expect(typeof TempInfo).toBe("object");
  });
  it("TemperatureValue datamodel from default", () => {
    console.log("TemperatureValue ", JSON.stringify(TemperatureValue, undefined, 2));
    expect(typeof TemperatureValue).toBe("object");
  });
  it("VisualIndState datamodel from default", () => {
    console.log("VisualIndState ", JSON.stringify(VisualIndState, undefined, 2));
    expect(typeof VisualIndState).toBe("object");
  });
 
});
