// Endpoint => GET => /v3/users/{user-id}/exercise-transactions/{transaction-id}/exercises/{exercise-id}/samples/{type-id}
// Parameters:
// =======================================================
// | Name           | Type | Description                 |
// =======================================================
// | type-id        | int  | Sample type id              |
// -------------------------------------------------------
// | user-id        | int  | User identifier             |
// -------------------------------------------------------
// | transaction-id | int  | Transaction identifier      |
// -------------------------------------------------------
// | exercise-id    | int  | Exercise identifier         |
// =======================================================
// Retrieve sample data of given type

export const getSamples = {
  "recording-rate": 5,
  "sample-type": "1",
  data: "0,100,102,97,97,101,103,106,96,89,88,87,98,108,113,112,114,115,118,121,121,121,121,123,117,119,122"
};