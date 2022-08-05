//https://developer.apple.com/documentation/healthkit/hkelectrocardiogram
export const HKElectrocardiogram  = {
  // https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/classification
  classification: "sinusRhythm",
  averageHeartRate: {
    units: "bpm",
    doubleValue: 0.0
  },
  // https://developer.apple.com/documentation/healthkit/hkelectrocardiogram/symptomsstatus
  symptomsStatus: "none",
  numberOfVoltageMeasurements: 0,
  samplingFrequncy: {
    units: "hz",
    doubleValue: 0.0
  }
 }