// Endpoint => GET =>  /v3/users/nightly-recharge
// List Nightly Recharge data of user for the last 28 days.

export const listNightlyRecharge = {
  recharges: [
    {
      "polar_user": "https://www.polaraccesslink/v3/users/1",
      date: "2020-01-01",
      "heart_rate_avg": 70,
      "beat_to_beat_avg": 816,
      "heart_rate_variability_avg": 28,
      "breathing_rate_avg": 14.1,
      "nightly_recharge_status": 3,
      "ans_charge": 0,
      "ans_charge_status": 3,
      "hrv_samples": {
        "00:41": 14,
        "00:46": 14,
        "00:51": 15
      },
      "breathing_samples": {
        "00:39": 13.4,
        "00:44": 13.5,
        "00:49": 13.5
      }
    }
  ]
};