// Endpoint => GET => /v3/users/{user-id}/exercise-transactions/{transaction-id}
// Parameters:
// =======================================================
// | Name           | Type | Description                 |
// =======================================================
// | user-id        | int  | User identifier             |
// -------------------------------------------------------
// | transaction-id | int  | Transaction identifier      |
// =======================================================
// After successfully initiating a transaction, training sessions included within it can be retrieved with the provided transactionId.

export const listTrainingExercises = {
  exercises: [
    "https://www.polaraccesslink.com/v3/users/12/exercise-transactions/34/exercises/56",
    "https://www.polaraccesslink.com/v3/users/12/exercise-transactions/34/exercises/120"
  ]
};