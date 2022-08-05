// Endpoint => GET => https://api.foursquare.com/v2/venues/{venue_id}/tips
// Parameters:
// ============================================================================================================================================
// | Name          | Type   | Description                                                                                                     |
// ============================================================================================================================================
// | venue_id      | string | The venue you want photos for; e.g., Foursquare HQ's venue_id = 5a187743ccad6b307315e6fe                        |
// --------------------------------------------------------------------------------------------------------------------------------------------
// | client_id     | string | The unique ID associated with your developer project. Required if using "Userless" authentication.              |
// --------------------------------------------------------------------------------------------------------------------------------------------
// | client_secret | string | The unique secret value associated with your developer project. Required if using "Userless" authentication.    |
// --------------------------------------------------------------------------------------------------------------------------------------------
// | oauth_token   | string | The access token generated via your web application as described here. Required if using "User" authentication. |
// --------------------------------------------------------------------------------------------------------------------------------------------
// | sort          | string | One of friends, recent, or popular.                                                                             |
// --------------------------------------------------------------------------------------------------------------------------------------------
// | limit         | int32  | Number of results to return; up to 50.                                                                          |
// --------------------------------------------------------------------------------------------------------------------------------------------
// | offset        | int32  | Used to page through results, up to 50.                                                                         |
// ============================================================================================================================================


export const venues_tips = {
  meta: {
    code: 200,
    requestId: "59a06444dd579714234d8031"
  },
  response: {
    tips: {
      count: 231,
      items: [
        {
          id: "53bc46b7498e355aed38c696",
          createdAt: 1404847799,
          text: "A true lower east side spectacle with a retractable rooftop and dance floor in the basement. Come here for the nights you won't remember with the friends you won't forget!",
          type: "user",
          canonicalUrl: "https://foursquare.com/item/XYZ",
          photo: {
            id: "53bc51e611d24ae8f0b898b4",
            createdAt: 1404850662,
            source: {
              name: "Foursquare Web",
              url: "https://foursquare.com"
            },
            prefix: "https://igx.4sqi.net/img/general/",
            suffix: "/38616203_Diq-n4zrFv7CfIf1SxavodvzN9nk-dnIeZYZeym0aJg.jpg",
            width: 168,
            height: 168,
            user: {
              firstName: "John",
              lastName: "D",
              countryCode: "US"
            },
            visibility: "public"
          },
          photourl: "https://igx.4sqi.net/img/general/original/38616203_Diq-n4zrFv7CfIf1SxavodvzN9nk-dnIeZYZeym0aJg.jpg",
          lang: "en",
          likes: {
            count: 0,
            groups: []
          },
          logView: true,
          agreeCount: 0,
          disagreeCount: 0,
          todo: {
            count: 0
          }
        }
      ]
    }
  }
};