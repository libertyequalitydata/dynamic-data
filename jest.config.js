/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */
const twentyThreeandMeData = require("./packages/23andme-data/package.json") 
const twentyThreeandMeMockup = require("./packages/23andme-mockup/package.json")
const ancestryData = require("./packages/ancestry-data/package.json") 
const ancestryMockup = require("./packages/ancestry-mockup/package.json") 
const fitbitData = require("./packages/fitbit-data/package.json") 
const fitbitMockup = require("./packages/fitbit-mockups/package.json") 
const foursquareData = require("./packages/foursquare-data/package.json") 
const foursquareMockup = require("./packages/foursquare-mockups/package.json") 
const garminData = require("./packages/garmin-data/package.json") 
const garminMockup = require("./packages/garmin-mockups/package.json") 
const googleData = require("./packages/google-data/package.json") 
const googleMockup = require("./packages/google-mockups/package.json") 
const homekitData = require("./packages/homekit-data/package.json") 
const homekitMockup = require("./packages/homekit-mockup/package.json") 
const huaweiData = require("./packages/huawei-data/package.json") 
const huaweiMockup = require("./packages/huawei-mockups/package.json") 
const iosHealthData = require("./packages/ios-health-data/package.json") 
const iosHealthMockup = require("./packages/ios-health-mockup/package.json") 
const lyftData = require("./packages/lyft-data/package.json") 
const lyftMockup = require("./packages/lyft-mockups/package.json") 
const movesenseData = require("./packages/movesense-data/package.json") 
const movesenseMockup = require("./packages/movesense-mockup/package.json") 
const ouraData = require("./packages/oura-data/package.json") 
const ouraMockup = require("./packages/oura-mockups/package.json") 
const pelotonData = require("./packages/peloton-data/package.json") 
const pelotonMockup = require("./packages/peloton-mockup/package.json") 
const polarData = require("./packages/polar-data/package.json") 
const polarMockup = require("./packages/polar-mockups/package.json") 
const runkeeperData = require("./packages/runkeeper-data/package.json") 
const runkeeperMockup = require("./packages/runkeeper-mockups/package.json") 
const sensorBNO055Data = require("./packages/sensor-bno055-data/package.json") 
const sensorBNO055Mockup = require("./packages/sensor-bno055-mockups/package.json") 
const stravaData = require("./packages/strava-data/package.json") 
const stravaMockup = require("./packages/strava-mockups/package.json") 
const twitchData = require("./packages/twitch-data/package.json") 
const twitchMockup = require("./packages/twitch-mockup/package.json") 
const uberData = require("./packages/uber-data/package.json") 
const uberMockup = require("./packages/uber-mockups/package.json") 
const whoopData = require("./packages/whoop-data/package.json") 
const whoopMockup = require("./packages/whoop-mockups/package.json") 
const withingsData = require("./packages/withings-data/package.json") 
const withingsMockup = require("./packages/withings-mockups/package.json") 
const utils = require("./packages/utils/package.json") 





const base = {
  clearMocks: true,

  collectCoverage: false,

  coverageDirectory: "coverage",

  coveragePathIgnorePatterns: ["/node_modules/", "/__tests__/"],
  
  coverageProvider: "babel",

  moduleDirectories: ["node_modules"],

  moduleFileExtensions: ["js", "mjs"],

  testMatch: [
    "**/__tests__/*.test.js",
    "**/__tests__/*.test.mjs",
  ],
  testEnvironment: 'node',


  testPathIgnorePatterns: ["/node_modules/"],

  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "^.+\\.mjs$": "babel-jest",
  }
}
module.exports = {
  ...base,
  projects: [
    {
      ...base,
      displayName: twentyThreeandMeData.name,

      testMatch: [
        "<rootDir>/packages/23andme-data/**/__tests__/*.test.js",
        "<rootDir>/packages/23andme-data/**/__tests__/*.test.mjs",
      ],
    },{
      ...base,

      displayName: twentyThreeandMeMockup.name,

      testMatch: [
        "<rootDir>/packages/23andme-mockup/**/__tests__/*.test.js",
        "<rootDir>/packages/23andme-mockup/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: ancestryData.name,

      testMatch: [
        "<rootDir>/packages/ancestry-data/**/__tests__/*.test.js",
        "<rootDir>/packages/ancestry-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: ancestryMockup.name,

      testMatch: [
        "<rootDir>/packages/ancestry-mockup/**/__tests__/*.test.js",
        "<rootDir>/packages/ancestry-mockup/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: fitbitData.name,

      testMatch: [
        "<rootDir>/packages/fitbit-data/**/__tests__/*.test.js",
        "<rootDir>/packages/fitbit-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: fitbitMockup.name,

      testMatch: [
        "<rootDir>/packages/fitbit-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/fitbit-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: foursquareData.name,

      testMatch: [
        "<rootDir>/packages/foursquare-data/**/__tests__/*.test.js",
        "<rootDir>/packages/foursquare-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: foursquareMockup.name,

      testMatch: [
        "<rootDir>/packages/foursquare-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/foursquare-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: garminData.name,

      testMatch: [
        "<rootDir>/packages/garmin-data/**/__tests__/*.test.js",
        "<rootDir>/packages/garmin-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: garminMockup.name,

      testMatch: [
        "<rootDir>/packages/garmin-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/garmin-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: googleData.name,

      testMatch: [
        "<rootDir>/packages/google-data/**/__tests__/*.test.js",
        "<rootDir>/packages/google-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: googleMockup.name,

      testMatch: [
        "<rootDir>/packages/google-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/google-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: homekitData.name,

      testMatch: [
        "<rootDir>/packages/homekit-data/**/__tests__/*.test.js",
        "<rootDir>/packages/homekit-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: homekitMockup.name,

      testMatch: [
        "<rootDir>/packages/homekit-mockup/**/__tests__/*.test.js",
        "<rootDir>/packages/homekit-mockup/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: huaweiData.name,

      testMatch: [
        "<rootDir>/packages/huawei-data/**/__tests__/*.test.js",
        "<rootDir>/packages/huawei-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: huaweiMockup.name,

      testMatch: [
        "<rootDir>/packages/huawei-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/huawei-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: iosHealthData.name,

      testMatch: [
        "<rootDir>/packages/ios-health-data/**/__tests__/*.test.js",
        "<rootDir>/packages/ios-health-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: iosHealthMockup.name,

      testMatch: [
        "<rootDir>/packages/ios-health-mockup/**/__tests__/*.test.js",
        "<rootDir>/packages/ios-health-mockup/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: lyftData.name,

      testMatch: [
        "<rootDir>/packages/lyft-data/**/__tests__/*.test.js",
        "<rootDir>/packages/lyft-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: lyftMockup.name,

      testMatch: [
        "<rootDir>/packages/lyft-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/lyft-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: movesenseData.name,

      testMatch: [
        "<rootDir>/packages/movesense-data/**/__tests__/*.test.js",
        "<rootDir>/packages/movesense-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: movesenseMockup.name,

      testMatch: [
        "<rootDir>/packages/movesense-mockup/**/__tests__/*.test.js",
        "<rootDir>/packages/movesense-mockup/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: ouraData.name,

      testMatch: [
        "<rootDir>/packages/oura-data/**/__tests__/*.test.js",
        "<rootDir>/packages/oura-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: ouraMockup.name,

      testMatch: [
        "<rootDir>/packages/oura-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/oura-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: pelotonData.name,

      testMatch: [
        "<rootDir>/packages/peloton-data/**/__tests__/*.test.js",
        "<rootDir>/packages/peloton-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: pelotonMockup.name,

      testMatch: [
        "<rootDir>/packages/peloton-mockup/**/__tests__/*.test.js",
        "<rootDir>/packages/peloton-mockup/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: polarData.name,

      testMatch: [
        "<rootDir>/packages/polar-data/**/__tests__/*.test.js",
        "<rootDir>/packages/polar-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: polarMockup.name,

      testMatch: [
        "<rootDir>/packages/polar-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/polar-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: polarData.name,

      testMatch: [
        "<rootDir>/packages/polar-data/**/__tests__/*.test.js",
        "<rootDir>/packages/polar-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: polarMockup.name,

      testMatch: [
        "<rootDir>/packages/polar-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/polar-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: runkeeperData.name,

      testMatch: [
        "<rootDir>/packages/runkeeper-data/**/__tests__/*.test.js",
        "<rootDir>/packages/runkeeper-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: runkeeperMockup.name,

      testMatch: [
        "<rootDir>/packages/runkeeper-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/runkeeper-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: sensorBNO055Data.name,

      testMatch: [
        "<rootDir>/packages/sensor-bno055-data/**/__tests__/*.test.js",
        "<rootDir>/packages/sensor-bno055-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: sensorBNO055Mockup.name,

      testMatch: [
        "<rootDir>/packages/sensor-bno055-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/sensor-bno055-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: stravaData.name,

      testMatch: [
        "<rootDir>/packages/strava-data/**/__tests__/*.test.js",
        "<rootDir>/packages/strava-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: stravaMockup.name,

      testMatch: [
        "<rootDir>/packages/strava-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/strava-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: twitchData.name,

      testMatch: [
        "<rootDir>/packages/twitch-data/**/__tests__/*.test.js",
        "<rootDir>/packages/twitch-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: twitchMockup.name,

      testMatch: [
        "<rootDir>/packages/twitch-mockup/**/__tests__/*.test.js",
        "<rootDir>/packages/twitch-mockup/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: uberData.name,

      testMatch: [
        "<rootDir>/packages/uber-data/**/__tests__/*.test.js",
        "<rootDir>/packages/uber-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: uberMockup.name,

      testMatch: [
        "<rootDir>/packages/uber-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/uber-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: whoopData.name,

      testMatch: [
        "<rootDir>/packages/whoop-data/**/__tests__/*.test.js",
        "<rootDir>/packages/whoop-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: whoopMockup.name,

      testMatch: [
        "<rootDir>/packages/whoop-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/whoop-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: withingsData.name,

      testMatch: [
        "<rootDir>/packages/withings-data/**/__tests__/*.test.js",
        "<rootDir>/packages/withings-data/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: withingsMockup.name,

      testMatch: [
        "<rootDir>/packages/withings-mockups/**/__tests__/*.test.js",
        "<rootDir>/packages/withings-mockups/**/__tests__/*.test.mjs",
      ],

    },{
      ...base,

      displayName: utils.name,

      testMatch: [
        "<rootDir>/packages/utils/**/__tests__/*.test.js",
        "<rootDir>/packages/utils/**/__tests__/*.test.mjs",
      ],

    }
  ]

  // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
  // transformIgnorePatterns: [
  //   "/node_modules/",
  //   "\\.pnp\\.[^\\/]+$"
  // ],

  // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
  // unmockedModulePathPatterns: undefined,

  // Indicates whether each individual test should be reported during the run
  // verbose: undefined,

  // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
  // watchPathIgnorePatterns: [],

  // Whether to use watchman for file crawling
  // watchman: true,
};
// module.exports = {
//   ...base
// }

