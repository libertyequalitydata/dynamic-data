export const ResetReason = {
  RawValue: 0,
  EnumValue: "NONE"||"ASSERT"||"HARD_FAULT"||"MEM_FAULT"||"BUS_FAULT"||"USAGE_FAULT"||"WATCHDOG"||"DIV_BY_ZERO"
}

export const FaultInfo = {
  HFSR: 0,
  CFSR: 0,
  MMFAR: 0,
  BFAR: 0,
  R0: 0,
  R1: 0,
  R2: 0,
  R3: 0,
  R12: 0,
  LR: 0,
  PC: 0,
  PSR: 0,
}

export const DebugMessageConfig = {
  SystemMessages: false,
  UserMessages: false,
}

export const DebugMessage = {
  Id: 0,
  Timestamp: 0,
  Level: "Fatal"||"Error"||"Warning"||"Info"||"Verbose",
  Tag: "",
  Message: ""
}

export const DebugLogResult = {
  Messages: [{
    Id: 0,
    Timestamp: 0,
    Level: "Fatal"||"Error"||"Warning"||"Info"||"Verbose",
    Tag: "",
    Message: ""
  }

  ]
}
export const DebugLogConfig = {
  MinimalLevel:  "Fatal"||"Error"||"Warning"||"Info"||"Verbose",
}