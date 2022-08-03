// Endpoint => GET => /v3/users/{user-id}/activity-transactions/{transaction-id}
// Parameters:
// ==================================================
// | Name           | Type | Description            |
// ==================================================
// | transaction-id | int  | Transaction identifier |
// --------------------------------------------------
// | user-id        | int  | User identifier        |
// ==================================================
// List new activity data. After successfully initiating a transaction, activity summaries included within it can be retrieved with the provided transactionId.

export const listActivities = {
  "activity-log": [
    "https://www.polaraccesslink.com/v3/users/12/activity-transactions/34/activities/56",
    "https://www.polaraccesslink.com/v3/users/12/activity-transactions/34/activities/120"
  ]
};