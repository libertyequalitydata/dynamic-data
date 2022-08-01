//https://developer.apple.com/documentation/healthkit/hkclinicalrecord
//https://developer.apple.com/documentation/healthkit/samples/accessing_health_records
export const HKClinicalRecord  = {
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
  clinicalType: "allergyRecord",
  displayName: "",
  fhirResource: {
    identifier: "",
    fhirVersion: "",
    resourceType: "",
    sourceURL: "",
    data: {
      "asserter": {
          "display": "Juan Chavez",
          "reference": "Practitioner/20"
      },
      "category": {
          "coding": [
              {
                  "code": "diagnosis",
                  "system": "http://hl7.org/fhir/condition-category"
              }
          ]
      },
      "clinicalStatus": "active",
      "code": {
          "coding": [
              {
                  "code": "367498001",
                  "display": "Seasonal allergic rhinitis",
                  "system": "http://snomed.info/sct"
              }
          ],
          "text": "Seasonal Allergic Rhinitis"
      },
      "dateRecorded": "2012-01-02",
      "id": "2",
      "notes": "Worse when visiting family in NC during the spring",
      "onsetDateTime": "1994-05-12",
      "resourceType": "Condition",
      "verificationStatus": "confirmed"
  }
  },
 }