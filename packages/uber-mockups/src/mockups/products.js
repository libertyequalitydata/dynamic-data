// Endpoint => GET => /v1.2/products
// Parameters:
// =======================================================
// | Name      | Type  | Description                     |
// =======================================================
// | latitude  | float | Latitude component of location  |
// -------------------------------------------------------
// | longitude | float | Longitude component of location |
// =======================================================

export const products = {
  products: [
    {
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
    },
    {
      upfront_fare_enabled: true,
      capacity: 2,
      product_id: "26546650-e557-4a7b-86e7-6a3942445247",
      price_details: {
        service_fees: [
          {
            fee: 2,
            name: "Booking fee"
          }
        ],
        cost_per_minute: 0.15,
        distance_unit: "mile",
        minimum: 7.45,
        cost_per_distance: 1.1,
        base: 2,
        cancellation_fee: 5,
        currency_code: "USD"
      },
      image: "http://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-uberx.png",
      cash_enabled: false,
      shared: true,
      short_description: "POOL",
      display_name: "POOL",
      product_group: "rideshare",
      description: "Share the ride, split the cost."
    },
    {
      upfront_fare_enabled: false,
      capacity: 4,
      product_id: "2d1d002b-d4d0-4411-98e1-673b244878b2",
      price_details: {
        service_fees: [
          {
            fee: 0.55,
            name: "Booking fee"
          }
        ],
        cost_per_minute: 0.4,
        distance_unit: "km",
        minimum: 9,
        cost_per_distance: 1.45,
        base: 2.5,
        cancellation_fee: 10,
        currency_code: "AUD"
      },
      image: "http://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-uberx.png",
      cash_enabled: false,
      shared: false,
      short_description: "uberX",
      display_name: "uberX",
      product_group: "uberx",
      description: "Everyday rides that are always smarter than a taxi"
    },
    {
      upfront_fare_enabled: false,
      capacity: 4,
      product_id: "3ab64887-4842-4c8e-9780-ccecd3a0391d",
      price_details: {
        service_fees: [
          {
            fee: 0.55,
            name: "Booking fee"
          }
        ],
        cost_per_minute: 0.55,
        distance_unit: "mile",
        minimum: 3.5,
        cost_per_distance: 2.75,
        base: 3.5,
        cancellation_fee: 5,
        currency_code: "USD"
      },
      image: "http://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-taxi.png",
      cash_enabled: false,
      shared: false,
      short_description: "TAXI",
      display_name: "TAXI",
      product_group: "taxi",
      description: "TAXI WITHOUT THE HASSLE"
    }
  ]
};