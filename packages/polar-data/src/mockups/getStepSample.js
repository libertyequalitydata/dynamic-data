// Endpoint => GET => /v3/users/{user-id}/activity-transactions/{transaction-id}/activities/{activity-id}/step-samples
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
// Get activity step samples. Example data can be seen from appendix.

export const getStepSample = {
  interval: 0,
  samples: [
    {
      steps: 0,
      time: "12:37:33.000"
    }
  ]
};