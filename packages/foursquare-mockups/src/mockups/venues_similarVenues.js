// Endpoint => GET =>  https://api.foursquare.com/v2/venues/{venue_id}/similar
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
// ============================================================================================================================================


export const venues_similarVenues = {
  meta: {
    code: 200,
    requestId: "5854bc85f594df06d6109366"
  },
  notifications: [
    {
      item: {
        unreadCount: 0
      },
      type: "notificationTray"
    }
  ],
  response: {
    similarVenues: {
      count: 4,
      items: [
        {
          categories: [
            {
              icon: {
                prefix: "https://ss3.4sqi.net/img/categories_v2/food/german_",
                suffix: ".png"
              },
              id: "4bf58dd8d48988d10d941735",
              name: "German Restaurant",
              pluralName: "German Restaurants",
              primary: true,
              shortName: "German"
            }
          ],
          contact: {},
          id: "3fd66200f964a520fcf01ee3",
          location: {
            address: "6946 Myrtle Ave",
            cc: "US",
            city: "Glendale",
            country: "United States",
            formattedAddress: [
              "6946 Myrtle Ave",
              "Glendale, NY 11385"
            ],
            labeledLatLngs: [
              {
                label: "display",
                lat: 40.70197759550821,
                lng: -73.88107466714183
              }
            ],
            lat: 40.70197759550821,
            lng: -73.88107466714183,
            postalCode: "11385",
            state: "NY"
          },
          name: "Zum Stammtisch",
          venuePage: {
            id: "82419672"
          }
        },
        {
          categories: [
            {
              icon: {
                prefix: "https://ss3.4sqi.net/img/categories_v2/food/german_",
                suffix: ".png"
              },
              id: "4bf58dd8d48988d10d941735",
              name: "German Restaurant",
              pluralName: "German Restaurants",
              primary: true,
              shortName: "German"
            }
          ],
          contact: {},
          id: "4bdf4939e75c0f47d591ca03",
          location: {
            address: "657 Fairview Ave",
            cc: "US",
            city: "Ridgewood",
            country: "United States",
            crossStreet: "Linden Street",
            formattedAddress: [
              "657 Fairview Ave (Linden Street)",
              "Ridgewood, NY 11385"
            ],
            labeledLatLngs: [
              {
                label: "display",
                lat: 40.70666313171387,
                lng: -73.905563
              }
            ],
            lat: 40.70666313171387,
            lng: -73.905563,
            postalCode: "11385",
            state: "NY"
          },
          name: "Gottscheer Hall"
        },
        {
          categories: [
            {
              icon: {
                prefix: "https://ss3.4sqi.net/img/categories_v2/nightlife/beergarden_",
                suffix: ".png"
              },
              id: "4bf58dd8d48988d117941735",
              name: "Beer Garden",
              pluralName: "Beer Gardens",
              primary: true,
              shortName: "Beer Garden"
            }
          ],
          contact: {},
          id: "4c01d656716bc9b6a399bc55",
          location: {
            address: "64-18 Fresh Pond Rd",
            cc: "US",
            city: "Ridgewood",
            country: "United States",
            crossStreet: "Linden St",
            formattedAddress: [
              "64-18 Fresh Pond Rd (Linden St)",
              "Ridgewood, NY 11385"
            ],
            labeledLatLngs: [
              {
                label: "display",
                lat: 40.70970275864878,
                lng: -73.89901236051763
              }
            ],
            lat: 40.70970275864878,
            lng: -73.89901236051763,
            postalCode: "11385",
            state: "NY"
          },
          name: "Glenlo Tavern"
        },
        {
          categories: [
            {
              icon: {
                prefix: "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
                suffix: ".png"
              },
              id: "4bf58dd8d48988d11b941735",
              name: "Pub",
              pluralName: "Pubs",
              primary: true,
              shortName: "Pub"
            }
          ],
          contact: {},
          id: "4a3da41ff964a52091a21fe3",
          location: {
            address: "6398 Woodhaven Blvd",
            cc: "US",
            city: "Rego Park",
            country: "United States",
            crossStreet: "at Fleet Ct.",
            formattedAddress: [
              "6398 Woodhaven Blvd (at Fleet Ct.)",
              "Rego Park, NY 11374"
            ],
            labeledLatLngs: [
              {
                label: "display",
                lat: 40.72192601637251,
                lng: -73.867314
              }
            ],
            lat: 40.72192601637251,
            lng: -73.867314,
            postalCode: "11374",
            state: "NY"
          },
          name: "Woodhaven House"
        }
      ]
    }
  }
};