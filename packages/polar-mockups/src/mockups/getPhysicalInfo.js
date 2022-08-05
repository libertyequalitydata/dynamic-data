// Endpoint => GET => /v3/users/{user-id}/physical-information-transactions/{transaction-id}/physical-informations/{physical-info-id}
// Parameters:
// =============================================================
// | Name             | Type | Description                     |
// =============================================================
// | user-id          | int  | User identifier                 |
// -------------------------------------------------------------
// | transaction-id   | int  | Transaction identifier          |
// -------------------------------------------------------------
// | physical-info-id | int  | Physical information identifier |
// =============================================================
// Get physical info entity data

export const getPhysicalInfo = {
  id: 123,
  "transaction-id": 179879,
  created: "2016-04-27T20:11:33.000Z",
  "polar-user": "https://www.polaraccesslink/v3/users/1",
  weight: 80,
  height: 180,
  "maximum-heart-rate": 160,
  "resting-heart-rate": 60,
  "aerobic-threshold": 123,
  "anaerobic-threshold": 123,
  "vo2-max": 12,
  "weight-source": "SOURCE_MEASURED"
};