export const BleConfig = {
  DeviceName: "Movesense 1234567890",
}

export const AdvState = {
  isAdvertising: true,
  PeerAddr: "00:14:22:01:23:45",
}

export const AdvSettings = {
  AdvPacket: [0],
  ScanRespPacket: [0],
  Interval: 32,
  Timeout: 0,
  Properties: {
    Connectable: true,
    Scannable: true,
    Anonymous: true,
  }
}

export const PeerList = [{
  Address: "00:14:22:01:23:45",
  Name: "Movesense 1234567890",
  handle: 0,
}]

export const PeerChange = {
  Peer: {
    Address: "00:14:22:01:23:45",
    Name: "Movesense 1234567890",
    handle: 0,
  },
  State: "DISCONNECTED"||"CONNECTED"
}

export const ScanResult = {
  address: "00:14:22:01:23:45",
  isScanResponse: true,
  rssi: 0,
  dataPacket: 0,
  name: "Movesense 123456789",
}

export const BondList = {
  BondedDevices: [{
    Address: "00:14:22:01:23:45",
  }],
}

export const BondingSettings = {
  Policy: "BondingEnabled"||"BondingDisabled"||"BondingOnce"||"BondingSameMac",
  RecoveryTime: 0
}

