// Endpoint => GET => https://api.lyft.com/v1/cost
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

export const rideEstimates = {
  cost_estimates: [
    {
      display_name: "Lyft Line",
      ride_type: "lyft_line",
      estimated_cost_cents_max: 120,
      estimated_cost_cents_min: 120,
      estimated_distance_miles: 2112,
      estimated_duration_seconds: 212,
      cost_token: "26546650-e557-4a7b-86e7-6a3942445247",
      is_valid_estimate: true
    },
    {
      display_name: "Lyft",
      ride_type: "lyft",
      estimated_cost_cents_max: 120,
      estimated_cost_cents_min: 120,
      estimated_distance_miles: 2112,
      estimated_duration_seconds: 212,
      cost_token: "26546650-e557-4a7b-86e7-6a3942445247",
      is_valid_estimate: true
    },
    {
      display_name: "Lyft Plus",
      ride_type: "lyft_plus",
      estimated_cost_cents_max: 120,
      estimated_cost_cents_min: 120,
      estimated_distance_miles: 2112,
      estimated_duration_seconds: 212,
      cost_token: "26546650-e557-4a7b-86e7-6a3942445247",
      is_valid_estimate: true
    }
  ]
};