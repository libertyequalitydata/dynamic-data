// Endpoint => GET => /v3/users/{user-id}/activity-transactions/{transaction-id}/activities/{activity-id}
// Parameters:
// =======================================================
// | Name           | Type | Description                 |
// =======================================================
// | user-id        | int  | User identifier             |
// -------------------------------------------------------
// | transaction-id | int  | Transaction identifier      |
// -------------------------------------------------------
// | activity-id    | int  | Activity summary identifier |
// =======================================================

export const getActivitySummary = {
  id: 1234,
  "polar-user": "https://www.polaraccesslink/v3/users/1",
  "transaction-id": 179879,
  date: "2010-12-31",
  created: "2016-04-27T20:11:33.000Z",
  calories: 2329,
  "active-calories": 428,
  duration: "PT2H44M",
  "active-steps": 250
};