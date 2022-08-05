// Endpoint => GET => /v3/users/{user-id}/activity-transactions/{transaction-id}/activities/{activity-id}/zone-samples
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
// Get activity zone samples. Example data can be seen from appendix.

export const getZoneSample = {
  interval: 0,
  samples: [
    {
      "activity-zones": [
        {
          index: 1,
          inzone: "PT51M5S"
        }
      ],
      time: "string"
    }
  ]
};