// https://developer.apple.com/documentation/healthkit/hkobject
// https://developer.apple.com/documentation/healthkit/hksample
// https://developer.apple.com/documentation/healthkit/hkworkout
export const HKWorkout  = {
  uuid: "E621E1F8-C36C-495A-93FC-0C247A3E6E5F",
  metadata: [

  ],
  //https://developer.apple.com/documentation/healthkit/hkdevice
  device: {
    udiDeviceIdentifier: "",
    firmwareVersion: "",
    hardwareVersion: "",
    localIdentifier: "",
    manufacturer: "",
    model: "",
    name: "",
    softwareVersion: "",
  },
  sourceRevision: {
    source: {
      bundleIdentifier: "E621E1F8-C36C-495A-93FC-0C247A3E6E5F",
      name: "Dylan's iPhone"
    },
    version: "9.0",
    operatingSystemVersion: {
      majorVersion : 10,
      minorVersion : 9,
      patchVersion : 3
    },
    productType: "watch2,4",
  },
  startDate: "2017-07-03T12:47:53+02:00",
  endDate: "2017-07-03T12:47:53+02:00",
  hasUndeterminedDuration: false,
  //https://developer.apple.com/documentation/healthkit/hksample/1615744-sampletype
  sampleType: {
    aggregationStyle: "cumulative"
  },
  duration: 0.0, //Seconds
  totalDistance: {
    unit: "km",
    doubleValue: 0.0
  },
  totalEnergyBurned:{
    unit: "kcal",
    doubleValue: 0.0
  },
  workoutActivityType: "archery",
  workoutEvents: [
    {
      dateInterval: {
        start: "2017-07-03T12:47:53+02:00",
        end: "2017-07-03T12:47:53+02:00",
        duration: 0.0,
      },
      type: "pause",
      metadata: [

      ],
    }
  ],
  totalFlightsClimbed: null,
  totalSwimmingStrokeCount: null,
 }