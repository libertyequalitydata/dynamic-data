// Endpoint => GET =>  https://api.foursquare.com/v2/venues/{venue_id}/nextvenues
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


export const venues_nextVenues = {
  meta: {
    code: 200,
    requestId: "5ac52570db04f517787f8264"
  },
  response: {
    nextVenues: {
      count: 5,
      items: [
        {
          id: "4dda977ad22d38ef4332c419",
          name: "Shake Shack",
          location: {
            address: "215 Murray St",
            crossStreet: "btwn West St & North End Ave",
            lat: 40.71525696471578,
            lng: -74.01482820510864,
            distance: 2366,
            postalCode: "10282",
            cc: "US",
            city: "New York",
            state: "NY",
            country: "United States",
            formattedAddress: [
              "215 Murray St (btwn West St & North End Ave)",
              "New York, NY 10282",
              "United States"
            ]
          },
          categories: [
            {
              id: "4bf58dd8d48988d16c941735",
              name: "Burger Joint",
              pluralName: "Burger Joints",
              shortName: "Burgers",
              icon: {
                prefix: "https://ss3.4sqi.net/img/categories_v2/food/burger_",
                suffix: ".png"
              },
              primary: true
            }
          ]
        },
        {
          id: "49bc3b0af964a52020541fe3",
          name: "Whole Foods Market",
          location: {
            address: "270 Greenwich Street",
            crossStreet: "at Warren St",
            lat: 40.71593286154695,
            lng: -74.0124281478333,
            distance: 2150,
            postalCode: "10007",
            cc: "US",
            neighborhood: "Tribeca",
            city: "New York",
            state: "NY",
            country: "United States",
            formattedAddress: [
              "270 Greenwich Street (at Warren St)",
              "New York, NY 10007",
              "United States"
            ]
          },
          categories: [
            {
              id: "4bf58dd8d48988d118951735",
              name: "Grocery Store",
              pluralName: "Grocery Stores",
              shortName: "Grocery Store",
              icon: {
                prefix: "https://ss3.4sqi.net/img/categories_v2/shops/food_grocery_",
                suffix: ".png"
              },
              primary: true
            }
          ]
        },
        {
          id: "4a6fa0abf964a520a4d61fe3",
          name: "Brookfield Place",
          location: {
            address: "230 Vesey St",
            crossStreet: "at West St",
            lat: 40.713203629795636,
            lng: -74.01561859633297,
            labeledLatLngs: [
              {
                label: "display",
                lat: 40.713203629795636,
                lng: -74.01561859633297
              }
            ],
            distance: 2507,
            postalCode: "10281",
            cc: "US",
            city: "New York",
            state: "NY",
            country: "United States",
            formattedAddress: [
              "230 Vesey St (at West St)",
              "New York, NY 10281",
              "United States"
            ]
          },
          categories: [
            {
              id: "4bf58dd8d48988d1fd941735",
              name: "Shopping Mall",
              pluralName: "Shopping Malls",
              shortName: "Mall",
              icon: {
                prefix: "https://ss3.4sqi.net/img/categories_v2/shops/mall_",
                suffix: ".png"
              },
              primary: true
            }
          ]
        },
        {
          id: "4efd1635f790570bcf88cbfd",
          name: "Blue Smoke",
          location: {
            address: "255 Vesey St",
            crossStreet: "btwn West & North End Ave",
            lat: 40.714641818092,
            lng: -74.01533201866637,
            labeledLatLngs: [
              {
                label: "display",
                lat: 40.714641818092,
                lng: -74.01533201866637
              }
            ],
            distance: 2428,
            postalCode: "10282",
            cc: "US",
            city: "New York",
            state: "NY",
            country: "United States",
            formattedAddress: [
              "255 Vesey St (btwn West & North End Ave)",
              "New York, NY 10282",
              "United States"
            ]
          },
          categories: [
            {
              id: "4bf58dd8d48988d14e941735",
              name: "American Restaurant",
              pluralName: "American Restaurants",
              shortName: "American",
              icon: {
                prefix: "https://ss3.4sqi.net/img/categories_v2/food/default_",
                suffix: ".png"
              },
              primary: true
            }
          ],
          venuePage: {
            id: "55111630"
          }
        },
        {
          id: "52e2f72a498e1de9bce745b0",
          name: "El Vez",
          location: {
            address: "259 Vesey St",
            crossStreet: "North End Avenue",
            lat: 40.7149398145672,
            lng: -74.01530027389526,
            labeledLatLngs: [
              {
                label: "display",
                lat: 40.7149398145672,
                lng: -74.01530027389526
              }
            ],
            distance: 2415,
            postalCode: "10282",
            cc: "US",
            city: "New York",
            state: "NY",
            country: "United States",
            formattedAddress: [
              "259 Vesey St (North End Avenue)",
              "New York, NY 10282",
              "United States"
            ]
          },
          categories: [
            {
              id: "4bf58dd8d48988d1c1941735",
              name: "Mexican Restaurant",
              pluralName: "Mexican Restaurants",
              shortName: "Mexican",
              icon: {
                prefix: "https://ss3.4sqi.net/img/categories_v2/food/mexican_",
                suffix: ".png"
              },
              primary: true
            }
          ]
        }
      ]
    }
  }
};