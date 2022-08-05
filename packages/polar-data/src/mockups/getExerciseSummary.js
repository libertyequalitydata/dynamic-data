// Endpoint => GET => /v3/users/{user-id}/exercise-transactions/{transaction-id}/exercises/{exercise-id}
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
// Retrieve training session summary data

export const getExerciseSummary = {
  id: 1937529874,
  "upload-time": "2008-10-13T10:40:02Z",
  "polar-user": "https://www.polaraccesslink/v3/users/1",
  "transaction-id": 179879,
  device: "Polar M400",
  "device-id": "1111AAAA",
  "start-time": "2008-10-13T10:40:02Z",
  "start-time-utc-offset": 180,
  duration: "PT2H44M",
  calories: 530,
  distance: 1600,
  "heart-rate": {
    average: 129,
    maximum: 147
  },
  "training-load": 143.22,
  sport: "OTHER",
  "has-route": true,
  "club-id": 999,
  "club-name": "Polar Club",
  "detailed-sport-info": "WATERSPORTS_WATERSKI",
  "fat-percentage": 60,
  "carbohydrate-percentage": 38,
  "protein-percentage": 2
};