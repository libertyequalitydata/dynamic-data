// Endpoint => GET => https://api.lyft.com/v1/eta
// Parameters:
// ============================================================================
// | Name            | Type   | Description                                   |
// ============================================================================
// | lat             | number | Latitude of a location                        |
// ----------------------------------------------------------------------------
// | lng             | number | Longitude of a location                       |
// ----------------------------------------------------------------------------
// | destination_lat | number | Latitude of the destination location.         |
// ----------------------------------------------------------------------------
// | destination_lng | number | Longitude of the destination location.        |
// ----------------------------------------------------------------------------
// | ride_type       | string | ID of a ride type. Returned by this endpoint. |
// ============================================================================

export const driverETA = {
  eta_estimates: [
    {
      display_name: "Lyft Line",
      ride_type: "lyft_line",
      eta_seconds: 120,
      is_valid_estimate: true
    },
    {
      display_name: "Lyft",
      ride_type: "lyft",
      eta_seconds: 120,
      is_valid_estimate: true
    },
    {
      display_name: "Lyft Plus",
      ride_type: "lyft_plus",
      eta_seconds: 660,
      is_valid_estimate: true
    }
  ]
};