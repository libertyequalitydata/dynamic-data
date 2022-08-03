const utils = require('@dynamic-data/utils');

const time_estimate = utils.getRandomInt(1, 6);

export const timeEstimates = {
  times: [
    {
      localized_display_name: "POOL",
      estimate: time_estimate*60,
      display_name: "POOL",
      product_id: "26546650-e557-4a7b-86e7-6a3942445247"
    },
    {
      localized_display_name: "uberX",
      estimate: time_estimate*60,
      display_name: "uberX",
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d"
    },
    {
      localized_display_name: "uberXL",
      estimate: time_estimate*60*1.5,
      display_name: "uberXL",
      product_id: "821415d8-3bd5-4e27-9604-194e4359a449"
    },
    {
      localized_display_name: "BLACK",
      estimate: time_estimate*60*1.5,
      display_name: "BLACK",
      product_id: "d4abaae7-f4d6-4152-91cc-77523e8165a4"
    },
    {
      localized_display_name: "Black SUV",
      estimate: time_estimate*60*1.5,
      display_name: "Black SUV",
      product_id: "8920cb5e-51a4-4fa4-acdf-dd86c5e18ae0"
    },
    {
      localized_display_name: "Uber Comfort",
      estimate: time_estimate*60*2,
      display_name: "Uber Comfort",
      product_id: "3ab64887-4842-4c8e-9780-ccecd3a0391d"
    },
    {
      localized_display_name: "Uber WAV",
      estimate: time_estimate*60*2.5,
      display_name: "Uber WAV",
      product_id: "2832a1f5-cfc0-48bb-ab76-7ea7a62060e7"
    }
  ]
};