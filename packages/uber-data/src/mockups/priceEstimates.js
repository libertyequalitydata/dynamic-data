// Endpoint => GET => /v1.2/estimates/price
// Parameters:
// =============================================================================================================
// | Name                 | Type  | Description                                                                |
// =============================================================================================================
// | start_latitude       | float | Latitude component of start location.                                      |
// -------------------------------------------------------------------------------------------------------------
// | start_longitude      | float | Longitude component of start location.                                     |
// -------------------------------------------------------------------------------------------------------------
// | end_latitude         | float | Latitude component of end location.                                        |
// -------------------------------------------------------------------------------------------------------------
// | end_longitude        | float | Longitude component of end location.                                       |
// -------------------------------------------------------------------------------------------------------------
// | seat_count(optional) | int   | The number of seats required for uberPOOL. Default and maximum value is 2. |
// =============================================================================================================
// The Price Estimates endpoint returns an estimated price range for each product offered at a given location. The price estimate is provided as a formatted string with the full price range and the localized currency symbol.

export const priceEstimates = {
  prices: [
    {
      localized_display_name: "POOL",
      distance: 6.17,
      display_name: "POOL",
      product_id: "26546650-e557-4a7b-86e7-6a3942445247",
      high_estimate: 15,
      low_estimate: 13,
      duration: 1080,
      estimate: "$13-14",
      currency_code: "USD"
    }
  ]
};