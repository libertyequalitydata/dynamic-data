// Endpoint => GET => /v3/users/sleep/{date}
// ================================================================================
// | Name | Type   | Description                                                  |
// ================================================================================
// | Date | string | Date of sleep as ISO-8601 date string, example: "2020-01-01" |
// ================================================================================
// Get Users sleep data for given date.

export const getSleep = {
  "polar_user": "https://www.polaraccesslink/v3/users/1",
  date: "2020-01-01",
  "sleep_start_time": "2020-01-01T00:39:07+03:00",
  "sleep_end_time": "2020-01-01T09:19:37+03:00",
  "device_id": "1111AAAA",
  continuity: 2.1,
  "continuity_class": 2,
  "light_sleep": 1000,
  "deep_sleep": 1000,
  "rem_sleep": 1000,
  "unrecognized_sleep_stage": 1000,
  "sleep_score": 80,
  "total_interruption_duration": 1000,
  "sleep_charge": 3,
  "sleep_goal": 28800,
  "sleep_rating": 3,
  "short_interruption_duration": 500,
  "long_interruption_duration": 300,
  "sleep_cycles": 6,
  "group_duration_score": 100,
  "group_solidity_score": 75,
  "group_regeneration_score": 54.2,
  hypnogram: {
    "00:39": 2,
    "00:50": 3,
    "01:23": 6
  },
  "heart_rate_samples": {
    "00:41": 76,
    "00:46": 77,
    "00:51": 76
  }
};