// Endpoint => GET => /v1.2/estimates/time
// Parameters:
// ========================================================================================================================
// | Name                  | Type   | Description                                                                         |
// ========================================================================================================================
// | start_latitude        | float  | Latitude component.                                                                 |
// ------------------------------------------------------------------------------------------------------------------------
// | start_longitude       | float  | Longitude component.                                                                |
// ------------------------------------------------------------------------------------------------------------------------
// | product_id (optional) | string | Unique identifier representing a specific product for a given latitude & longitude. |
// ========================================================================================================================

export const timeEstimates = {
  times: [
    {
      localized_display_name: "POOL",
      estimate: 60,
      display_name: "POOL",
      product_id: "26546650-e557-4a7b-86e7-6a3942445247"
    },
    {
      localized_display_name: "uberX",
      estimate: 60,
      display_name: "uberX",
      product_id: "a1111c8c-c720-46c3-8534-2fcdd730040d"
    },
    {
      localized_display_name: "uberXL",
      estimate: 240,
      display_name: "uberXL",
      product_id: "821415d8-3bd5-4e27-9604-194e4359a449"
    },
    {
      localized_display_name: "SELECT",
      estimate: 240,
      display_name: "SELECT",
      product_id: "57c0ff4e-1493-4ef9-a4df-6b961525cf92"
    },
    {
      localized_display_name: "BLACK",
      estimate: 240,
      display_name: "BLACK",
      product_id: "d4abaae7-f4d6-4152-91cc-77523e8165a4"
    },
    {
      localized_display_name: "SUV",
      estimate: 240,
      display_name: "SUV",
      product_id: "8920cb5e-51a4-4fa4-acdf-dd86c5e18ae0"
    },
    {
      localized_display_name: "ASSIST",
      estimate: 300,
      display_name: "ASSIST",
      product_id: "ff5ed8fe-6585-4803-be13-3ca541235de3"
    },
    {
      localized_display_name: "TAXI",
      estimate: 480,
      display_name: "TAXI",
      product_id: "3ab64887-4842-4c8e-9780-ccecd3a0391d"
    }
  ]
};