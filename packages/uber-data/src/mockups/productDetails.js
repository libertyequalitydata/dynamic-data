// Endpoint => GET => /v1.2/products/{product_id}
// Parameters:
// =========================================================================================================================
// | Name       | Type   | Description                                                                                     |
// =========================================================================================================================
// | product_id | string | Unique identifier representing a specific product for a given latitude & longitude.             |
// |            |        | For example, uberX in San Francisco will have a different product_id than uberX in Los Angeles. |
// =========================================================================================================================


export const productDetails = {
    upfront_fare_enabled: true,
    capacity: 4,
    product_id: "d4abaae7-f4d6-4152-91cc-77523e8165a4",
    price_details: {
      service_fees: [
        {
          fee: 2,
          name: "Booking fee"
        }
      ],
      cost_per_minute: 0.65,
      distance_unit: "mile",
      minimum: 15,
      cost_per_distance: 3.75,
      base: 8,
      cancellation_fee: 10,
      currency_code: "USD"
    },
    image: "http://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-black.png",
    cash_enabled: false,
    shared: false,
    short_description: "BLACK",
    display_name: "BLACK",
    product_group: "uberblack",
    description: "THE ORIGINAL UBER"
  }