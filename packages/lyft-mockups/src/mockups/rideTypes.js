// Endpoint => GET => https://api.lyft.com/v1/ridetypes
// Parameters:
// ======================================================================
// | Name      | Type   | Description                                   |
// ======================================================================
// | lat       | number | Latitude of a location                        |
// ----------------------------------------------------------------------
// | lng       | number | Longitude of a location                       |
// ----------------------------------------------------------------------
// | ride_type | string | ID of a ride type. Returned by this endpoint. |
// ======================================================================

export const rideTypes = {
  ride_types: [
    {
      ride_type: "lyft_line",
      display_name: "Lyft Line",
      image_url: "https://cdn.lyft.com/assets/car_standard.png",
      pricing_details: {
        base_charge: 200,
        cost_per_mile: 114,
        cost_per_minute: 22,
        cost_minimum: 475,
        trust_and_service: 175,
        currency: "USD",
        cancel_penalty_amount: 500
      },
      seats: 2
    },
    {
      ride_type: "lyft",
      display_name: "Lyft",
      image_url: "https://cdn.lyft.com/assets/car_standard.png",
      pricing_details: {
        base_charge: 200,
        cost_per_mile: 114,
        cost_per_minute: 22,
        cost_minimum: 500,
        trust_and_service: 175,
        currency: "USD",
        cancel_penalty_amount: 500
      },
      seats: 4
    },
    {
      ride_type: "lyft_plus",
      display_name: "Lyft Plus",
      image_url: "https://cdn.lyft.com/assets/car_plus.png",
      pricing_details: {
        base_charge: 300,
        cost_per_mile: 200,
        cost_per_minute: 30,
        cost_minimum: 700,
        trust_and_service: 175,
        currency: "USD",
        cancel_penalty_amount: 500
      },
      seats: 6
    },
    {
      ride_type: "lyft_premier",
      display_name: "Lyft Premier",
      image_url: "https://cdn.lyft.com/assets/car_plus.png",
      pricing_details: {
        base_charge: 500,
        cost_per_mile: 275,
        cost_per_minute: 50,
        cost_minimum: 900,
        trust_and_service: 175,
        currency: "USD",
        cancel_penalty_amount: 500
      },
      seats: 4
    },
    {
      ride_type: "lyft_lux",
      display_name: "Lyft Lux",
      image_url: "https://cdn.lyft.com/assets/car_plus.png",
      pricing_details: {
        base_charge: 800,
        cost_per_mile: 375,
        cost_per_minute: 65,
        cost_minimum: 1500,
        trust_and_service: 175,
        currency: "USD",
        cancel_penalty_amount: 1000
      },
      seats: 4
    },
    {
      ride_type: "lyft_luxsuv",
      display_name: "Lyft Lux SUV",
      image_url: "https://cdn.lyft.com/assets/car_plus.png",
      pricing_details: {
        base_charge: 1500,
        cost_per_mile: 375,
        cost_per_minute: 90,
        cost_minimum: 2500,
        trust_and_service: 175,
        currency: "USD",
        cancel_penalty_amount: 1000
      },
      seats: 6
    }
  ]
};