const utils = require('@dynamic-data/utils');

const currency_code = "USD";
const distance_unit = "miles";
const generateId = () => {return `${utils.getRandomString(8)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(4)}-${utils.getRandomString(12)}`};

export const products = {
  products: [
    {
      upfront_fare_enabled: false,
      capacity: 4,
      product_id: 'a1111c8c-c720-46c3-8534-2fcdd730040d',
      price_details: {
        service_fees: [],
        cost_per_minute: 0.4,
        distance_unit: distance_unit,
        minimum: 9,
        cost_per_distance: 1.45,
        base: 2.5,
        cancellation_fee: 10,
        currency_code: currency_code
      },
      image: "http://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-uberx.png",
      cash_enabled: false,
      shared: false,
      short_description: "uberX",
      display_name: "UberX",
      product_group: "uberx",
      description: "Get an affordable ride, all to yourself."
    },
    {
      upfront_fare_enabled: true,
      capacity: 2,
      product_id:  "26546650-e557-4a7b-86e7-6a3942445247",
      price_details: {
        service_fees: [],
        cost_per_minute: 0.15,
        distance_unit: distance_unit,
        minimum: 7.45,
        cost_per_distance: 1.1,
        base: 2,
        cancellation_fee: 5,
        currency_code: currency_code
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
      upfront_fare_enabled: true,
      capacity: 4,
      product_id: "d4abaae7-f4d6-4152-91cc-77523e8165a4",
      price_details: {
        service_fees: [],
        cost_per_minute: 0.65,
        distance_unit: distance_unit,
        minimum: 15,
        cost_per_distance: 3.75,
        base: 8,
        cancellation_fee: 10,
        currency_code: currency_code
      },
      image: "http://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-black.png",
      cash_enabled: false,
      shared: false,
      short_description: "BLACK",
      display_name: "BLACK",
      product_group: "uberblack",
      description: "Premium rides in luxury cars"
    },
    {
      upfront_fare_enabled: true,
      capacity: 6,
      product_id: "821415d8-3bd5-4e27-9604-194e4359a449",
      price_details: {
        service_fees: [],
        cost_per_minute: 0.18,
        distance_unit: distance_unit,
        minimum: 8.3,
        cost_per_distance: 1.63,
        base: 1.5,
        cancellation_fee: 5,
        currency_code: "USD"
      },
      image: "http://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-uberxl2.png",
      cash_enabled: false,
      shared: false,
      short_description: "uberXL",
      display_name: "uberXL",
      product_group: "uberxl",
      description: "Affordable rides for large groups"
    },
    {
      capacity: 4,
      product_id: "3ab64887-4842-4c8e-9780-ccecd3a0391d",
      price_details: {
        service_fees: [],
        cost_per_minute: 0.15,
        distance_unit: distance_unit,
        minimum: 7,
        cost_per_distance: 0.93,
        base: 1.05,
        cancellation_fee: 5,
        currency_code: "USD"
      },
      image: "http://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-uberx.png",
      cash_enabled: false,
      shared: false,
      short_description: "Comfort",
      display_name: "Uber Comfort",
      product_group: "comfort",
      description: "Newer cars with extra legroom"
    },
    {
      capacity: 6,
      product_id: "8920cb5e-51a4-4fa4-acdf-dd86c5e18ae0",
      price_details: {
        service_fees: [],
        cost_per_minute: 0.8,
        distance_unit: distance_unit,
        minimum: 25,
        cost_per_distance: 4.56,
        base: 14,
        cancellation_fee: 10,
        currency_code: "USD"
      },
      image: "http://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-suv.png",
      cash_enabled: false,
      shared: false,
      short_description: "Black SUV",
      display_name: "Black SUV",
      product_group: "uberblacksuv",
      description: "Premium rides for 6 in luxury SUV"
    },
    {
      upfront_fare_enabled: false,
      capacity: 4,
      product_id: "2832a1f5-cfc0-48bb-ab76-7ea7a62060e7",
      price_details: {
        service_fees: [],
        cost_per_minute: 0.55,
        distance_unit: distance_unit,
        minimum: 3.5,
        cost_per_distance: 2.75,
        base: 3.5,
        cancellation_fee: 5,
        currency_code: currency_code
      },
      image: "http://d1a3f4spazzrp4.cloudfront.net/car-types/mono/mono-taxi.png",
      cash_enabled: false,
      shared: false,
      short_description: "WAV",
      display_name: "Uber WAV",
      product_group: "uberwav",
      description: "Rides in wheelchair-accessible vehicles"
    }
  ]
};