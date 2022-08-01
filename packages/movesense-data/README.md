# `movesense-data`

> Mockup datamodules for Movesense datasources

## Usage

Dataobjects:

- AccConfig
- AccData
- AccInfo
- AdvSettings
- AdvState
- AppInfo
- BleConfig
- BondList
- BondingSettings
- CalibrationData
- CalibrationMatrix
- DebugLogConfig
- DebugLogResult
- DebugMessage
- DebugMessageConfig
- DeviceInfo
- ECGConfig
- ECGData
- ECGInfo
- EepromData
- EepromInfo
- FaultInfo
- GyroConfig
- GyroData
- GyroInfo
- HRData
- HRInfo
- IMU6Data
- IMU6MData
- IMU9Data
- IMUConfig
- IMUInfo
- LedState
- Leds
- MagnConfig
- MagnData
- MagnInfo
- Memory
- ModuleStatus
- PeerChange
- PeerList
- ProductData
- ResetReason
- ScanResult
- State
- StateChange
- StepsDone
- SystemModeStatus
- TempInfo
- TemperatureValue
- VisualIndState

```
// CJS/Node

const {VisualIndState} =require("@dynamic-data/movesense-data");
const MOCK =require("@dynamic-data/movesense-data"); // All objects...

```

```
// ESM/React

import {VisualIndState} from "@dynamic-data/movesense-data";
import MOCK from "@dynamic-data/movesense-data"; // All objects...

```
