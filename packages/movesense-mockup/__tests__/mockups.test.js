"use strict";


const MOCK = require("@dynamic-data/movesense-data");

const {
  getModuleStatus,
  getAppInfo,
  getDeviceInfo,
  getBleConfig,
  getAdvState,
  getAdvSettings,
  getPeerList,
  getPeerChange,
  getScanResult,
  getBondList,
  getBondingSettings,
  getResetReason,
  getFaultInfo,
  getDebugMessageConfig,
  getDebugMessage,
  getDebugLogResult,
  getDebugLogConfig,
  getMemory,
  getSystemModeStatus,
  getState,
  getAccInfo,
  getAccConfig,
  getAccData,
  getGyroInfo,
  getGyroConfig,
  getGyroData,
  getMagnInfo,
  getMagnConfig,
  getMagnData,
  getIMUInfo,
  getIMUConfig,
  getIMU9Data,
  getIMU6Data,
  getIMU6MData,
  getECGInfo,
  getECGConfig,
  getECGData,
  getHRInfo,
  getHRData,
  getTempInfo,
  getTemperatureValue,
  getProductData,
  getCalibrationData,
  getCalibrationMatrix,
  getStepsDone,
  getEepromInfo,
  getEepromData,
  getLeds,
  getVisualIndState
} = require("@dynamic-data/movesense-mockups");


describe("Movesense", () => {
  //test.todo("needs tests");
  it("getModuleStatus", () => {
    const result = getModuleStatus (
      "SYNC",
      "ModuleStatus",
      "2022-04-03"
    );
    console.log("ModuleStatus",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getAppInfo", () => {
    const result = getAppInfo (
      "SYNC",
      "AppInfo",
      "2022-04-03"
    );
    console.log("AppInfo",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getDeviceInfo", () => {
    const result = getDeviceInfo (
      "SYNC",
      "DeviceInfo",
      "2022-04-03"
    );
    console.log("DeviceInfo",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getBleConfig", () => {
    const result = getBleConfig (
      "SYNC",
      "BleConfig",
      "2022-04-03"
    );
    console.log("BleConfig",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getAdvState", () => {
    const result = getAdvState (
      "SYNC",
      "AdvState",
      "2022-04-03"
    );
    console.log("AdvState",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getAdvSettings", () => {
    const result = getAdvSettings (
      "SYNC",
      "AdvSettings",
      "2022-04-03"
    );
    console.log("AdvSettings",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getPeerList", () => {
    const result = getPeerList (
      "SYNC",
      "PeerList",
      "2022-04-03"
    );
    console.log("PeerList",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getPeerChange", () => {
    const result = getPeerChange (
      "SYNC",
      "PeerChange",
      "2022-04-03"
    );
    console.log("PeerChange",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getScanResult", () => {
    const result = getScanResult (
      "SYNC",
      "ScanResult",
      "2022-04-03"
    );
    console.log("ScanResult",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getBondList", () => {
    const result = getBondList (
      "SYNC",
      "BondList",
      "2022-04-03"
    );
    console.log("BondList",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getBondingSettings", () => {
    const result = getBondingSettings (
      "SYNC",
      "BondingSettings",
      "2022-04-03"
    );
    console.log("BondingSettings",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getResetReason", () => {
    const result = getResetReason (
      "SYNC",
      "ResetReason",
      "2022-04-03"
    );
    console.log("ResetReason",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getFaultInfo", () => {
    const result = getFaultInfo (
      "SYNC",
      "FaultInfo",
      "2022-04-03"
    );
    console.log("FaultInfo",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getDebugMessageConfig", () => {
    const result = getDebugMessageConfig (
      "SYNC",
      "DebugMessageConfig",
      "2022-04-03"
    );
    console.log("DebugMessageConfig",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getDebugMessage", () => {
    const result = getDebugMessage (
      "SYNC",
      "DebugMessage",
      "2022-04-03"
    );
    console.log("DebugMessage",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getDebugLogResult", () => {
    const result = getDebugLogResult (
      "SYNC",
      "DebugLogResult",
      "2022-04-03"
    );
    console.log("DebugLogResult",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getDebugLogConfig", () => {
    const result = getDebugLogConfig (
      "SYNC",
      "DebugLogConfig",
      "2022-04-03"
    );
    console.log("DebugLogConfig",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getMemory", () => {
    const result = getMemory (
      "SYNC",
      "Memory",
      "2022-04-03"
    );
    console.log("Memory",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getSystemModeStatus", () => {
    const result = getSystemModeStatus (
      "SYNC",
      "Mode",
      "2022-04-03"
    );
    console.log("Mode",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getState", () => {
    const result = getState (
      "SYNC",
      "State",
      "2022-04-03"
    );
    console.log("State",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getAccInfo", () => {
    const result = getAccInfo (
      "SYNC",
      "AccInfo",
      "2022-04-03"
    );
    console.log("AccInfo",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getAccConfig", () => {
    const result = getAccConfig (
      "SYNC",
      "AccConfig",
      "2022-04-03"
    );
    console.log("AccConfig",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getAccData", () => {
    const result = getAccData (
      "SYNC",
      "AccData",
      "2022-04-03"
    );
    console.log("AccData",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getGyroInfo", () => {
    const result = getGyroInfo (
      "SYNC",
      "GyroInfo",
      "2022-04-03"
    );
    console.log("GyroInfo",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getGyroConfig", () => {
    const result = getGyroConfig (
      "SYNC",
      "GyroConfig",
      "2022-04-03"
    );
    console.log("GyroConfig",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getGyroData", () => {
    const result = getGyroData (
      "SYNC",
      "GyroData",
      "2022-04-03"
    );
    console.log("GyroData",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getMagnInfo", () => {
    const result = getMagnInfo (
      "SYNC",
      "MagnInfo",
      "2022-04-03"
    );
    console.log("MagnInfo",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getMagnConfig", () => {
    const result = getMagnConfig (
      "SYNC",
      "MagnConfig",
      "2022-04-03"
    );
    console.log("MagnConfig",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getMagnData", () => {
    const result = getMagnData (
      "SYNC",
      "MagnData",
      "2022-04-03"
    );
    console.log("MagnData",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getIMUInfo", () => {
    const result = getIMUInfo (
      "SYNC",
      "IMUInfo",
      "2022-04-03"
    );
    console.log("IMUInfo",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getIMUConfig", () => {
    const result = getIMUConfig (
      "SYNC",
      "IMUConfig",
      "2022-04-03"
    );
    console.log("IMUConfig",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getIMU9Data", () => {
    const result = getIMU9Data (
      "SYNC",
      "IMU9Data",
      "2022-04-03"
    );
    console.log("IMU9Data",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getIMU6Data", () => {
    const result = getIMU6Data (
      "SYNC",
      "IMU6Data",
      "2022-04-03"
    );
    console.log("IMU6Data",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getIMU6MData", () => {
    const result = getIMU6MData (
      "SYNC",
      "IMU6MData",
      "2022-04-03"
    );
    console.log("IMU6MData",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getECGInfo", () => {
    const result = getECGInfo (
      "SYNC",
      "ECGInfo",
      "2022-04-03"
    );
    console.log("ECGInfo",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getECGConfig", () => {
    const result = getECGConfig (
      "SYNC",
      "ECGConfig",
      "2022-04-03"
    );
    console.log("ECGConfig",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getECGData", () => {
    const result = getECGData (
      "SYNC",
      "ECGData",
      "2022-04-03"
    );
    console.log("ECGData",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHRInfo", () => {
    const result = getHRInfo (
      "SYNC",
      "HRInfo",
      "2022-04-03"
    );
    console.log("HRInfo",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getHRData", () => {
    const result = getHRData (
      "SYNC",
      "HRData",
      "2022-04-03"
    );
    console.log("HRData",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getTempInfo", () => {
    const result = getTempInfo (
      "SYNC",
      "TempInfo",
      "2022-04-03"
    );
    console.log("TempInfo",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getTemperatureValue", () => {
    const result = getTemperatureValue (
      "SYNC",
      "TemperatureValue",
      "2022-04-03"
    );
    console.log("TemperatureValue",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getProductData", () => {
    const result = getProductData (
      "SYNC",
      "ProductData",
      "2022-04-03"
    );
    console.log("ProductData",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getCalibrationData", () => {
    const result = getCalibrationData (
      "SYNC",
      "CalibrationData",
      "2022-04-03"
    );
    console.log("CalibrationData",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getCalibrationMatrix", () => {
    const result = getCalibrationMatrix (
      "SYNC",
      "CalibrationMatrix",
      "2022-04-03"
    );
    console.log("CalibrationMatrix",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getStepsDone", () => {
    const result = getStepsDone (
      "SYNC",
      "StepsDone",
      "2022-04-03"
    );
    console.log("StepsDone",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getEepromInfo", () => {
    const result = getEepromInfo (
      "SYNC",
      "EepromInfo",
      "2022-04-03"
    );
    console.log("EepromInfo",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getEepromData", () => {
    const result = getEepromData (
      "SYNC",
      "EepromData",
      "2022-04-03"
    );
    console.log("EepromData",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getLeds", () => {
    const result = getLeds (
      "SYNC",
      "Leds",
      "2022-04-03"
    );
    console.log("Leds",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getLeds", () => {
    const result = getLeds (
      "SYNC",
      "LedState",
      "2022-04-03"
    );
    console.log("LedState",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
  it("getVisualIndState", () => {
    const result = getVisualIndState (
      "SYNC",
      "VisualIndState",
      "2022-04-03"
    );
    console.log("VisualIndState",JSON.stringify(result, undefined, 2));
    expect(typeof result).toBe("object");
  });
});
