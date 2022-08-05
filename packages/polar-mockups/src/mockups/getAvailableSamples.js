// Endpoint => GET => /v3/users/{user-id}/exercise-transactions/{transaction-id}/exercises/{exercise-id}/samples
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
// Retrieve list of links to available samples in training session

export const getAvailableSamples = {
  samples: [
    "https://www.polaraccesslink.com/v3/users/12/exercise-transactions/34/exercises/56/samples/0",
    "https://www.polaraccesslink.com/v3/users/12/exercise-transactions/34/exercises/56/samples/3"
  ]
};