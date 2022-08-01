// Endpoint => GET => /v3/exercises/{exerciseId}
// ====================================================
// | Name           | Type   | Description            |
// ====================================================
// | exerciseId     | string | Hashed exercise id.    |
// ====================================================
// Get users exercise using hashed id. Only Exercises uploaded to Flow in the last 30 days are available. Only exercises that have been uploaded to Flow after the user is registered with your client will be available.

export const getExercise = {
  id: "2AC312F",
  "upload_time": "2008-10-13T10:40:02Z",
  "polar_user": "https://www.polaraccesslink/v3/users/1",
  device: "Polar M400",
  "device_id": "1111AAAA",
  "start_time": "2008-10-13T10:40:02",
  "start_time_utc_offset": 180,
  duration: "PT2H44M",
  calories: 530,
  distance: 1600,
  "heart_rate": {
    average: 129,
    maximum: 147
  },
  "training_load": 143.22,
  sport: "OTHER",
  "has_route": true,
  "club_id": 999,
  "club_name": "Polar Club",
  "detailed_sport_info": "WATERSPORTS_WATERSKI",
  "fat_percentage": 60,
  "carbohydrate_percentage": 38,
  "protein_percentage": 2
};