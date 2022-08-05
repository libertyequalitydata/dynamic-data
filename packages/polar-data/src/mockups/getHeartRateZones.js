// Endpoint => GET => /v3/users/{user-id}/exercise-transactions/{transaction-id}/exercises/{exercise-id}/heart-rate-zones
// Parameters:
// =======================================================
// | Name           | Type | Description                 |
// =======================================================
// | user-id        | int  | User identifier             |
// -------------------------------------------------------
// | transaction-id | int  | Transaction identifier      |
// -------------------------------------------------------
// | exercise-id    | int  | Exercise identifier         |
// =======================================================
// Retrieve heart rate zones in training session

export const getHeartRateZones = {
  zone: [
    {
      index: 1,
      "lower-limit": 110,
      "upper-limit": 130,
      "in-zone": "PT4S"
    }
  ]
};