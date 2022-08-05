// Endpoint => GET => https://api.foursquare.com/v2/tips/{tip_id}
// Parameters:
// ============================================================================================================================================
// | Name          | Type   | Description                                                                                                     |
// ============================================================================================================================================
// | tip_id        | string | The ID of tip to retrieve                                                                                       |
// --------------------------------------------------------------------------------------------------------------------------------------------
// | client_id     | string | The unique ID associated with your developer project. Required if using "Userless" authentication.              |
// --------------------------------------------------------------------------------------------------------------------------------------------
// | client_secret | string | The unique secret value associated with your developer project. Required if using "Userless" authentication.    |
// --------------------------------------------------------------------------------------------------------------------------------------------
// | oauth_token   | string | The access token generated via your web application as described here. Required if using "User" authentication. |
// ============================================================================================================================================

export const tips_details = {
  meta: {
    code: 200,
    requestId: "59cea5346329fb6b767fab2a4f7"
  },
  response: {
    tip: {
      id: "53bc46b7498e355aed38c696",
      createdAt: 1404847799,
      text: "Rooftop boozy brunch in Lower East Side. Can't drink all day unless you start in the morning!",
      type: "user",
      canonicalUrl: "https://foursquare.com/item/53bc46b7498e355aed38c696",
      lang: "en",
      saves: {
        count: 1,
        groups: [],
        summary: "1 Save"
      },
      venue: {
        id: "4cbcafab035d236aebebe64e",
        name: "Hotel Chantelle",
        location: {
          address: "92 Ludlow St",
          crossStreet: "btwn Delancey & Broome St",
          lat: 40.71855465714273,
          lng: -73.98899737888202
        },
        venuePage: {
          id: "72046848"
        },
        categories: [
          {
            id: "4bf58dd8d48988d116941735",
            name: "Bar",
            pluralName: "Bars",
            shortName: "Bar",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
              suffix: ".png"
            },
            primary: true
          }
        ]
      }
    }
  }
};