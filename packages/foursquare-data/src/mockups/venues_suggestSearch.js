// Endpoint => GET => https://api.foursquare.com/v2/venues/suggestcompletion
// Parameters:
// =====================================================================================================================================================================================================================================
// | Name          | Type   | Description                                                                                                                                                                                              |
// =====================================================================================================================================================================================================================================
// | venue_id      | string | The venue you want photos for; e.g., Foursquare HQ's venue_id = 5a187743ccad6b307315e6fe                                                                                                                 |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | client_id     | string | The unique ID associated with your developer project. Required if using "Userless" authentication.                                                                                                       |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | client_secret | string | The unique secret value associated with your developer project. Required if using "Userless" authentication.                                                                                             |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | oauth_token   | string | The access token generated via your web application as described here. Required if using "User" authentication.                                                                                          |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | query         | string | A search term to be applied against titles. Must be at least 3 characters long.                                                                                                                          |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | ll            | string | The latitude/longitude around which you wish to retrieve place information. Specified as latitude,longitude (e.g., ll=41.8781,-87.6298).                                                                 |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | near          | string | A string naming a place in the world. If the near string is not geocodable, returns a failed_geocode error. Otherwise, searches within the bounds of the geocode. Adds a geocode object to the response. |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | limit         | int32  | Number of results to return, up to 50.                                                                                                                                                                   |
// =====================================================================================================================================================================================================================================


export const venues_suggestSearch = {
  meta: {
    code: 200,
    requestId: "5a3adfe81ed21913b428c83a"
  },
  response: {
    minivenues: [
      {
        id: "4f045eeb00399761c77301e3",
        name: "Prince Street Pizza",
        location: {
          address: "27 Prince St",
          crossStreet: "btwn Mott & Elizabeth St",
          city: "New York",
          state: "NY",
          postalCode: "10012",
          country: "US",
          lat: 40.722905825704764,
          lng: -73.99466690110555,
          distance: 343
        },
        categories: [
          {
            id: "4bf58dd8d48988d1ca941735",
            name: "Pizza Place",
            pluralName: "Pizza Places",
            shortName: "Pizza",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/pizza_",
              suffix: ".png"
            }
          },
          {
            id: "4d4b7105d754a06374d81259",
            name: "Food",
            pluralName: "Food",
            shortName: "Food",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/default_",
              suffix: ".png"
            }
          }
        ],
        hasPerk: false
      },
      {
        id: "45ebc982f964a52091431fe3",
        name: "Joe's Pizza",
        location: {
          address: "7 Carmine St",
          crossStreet: "at 6th Ave",
          city: "New York",
          state: "NY",
          postalCode: "10014",
          country: "US",
          lat: 40.730491197306435,
          lng: -74.00188088169593,
          distance: 728
        },
        categories: [
          {
            id: "4bf58dd8d48988d1ca941735",
            name: "Pizza Place",
            pluralName: "Pizza Places",
            shortName: "Pizza",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/pizza_",
              suffix: ".png"
            }
          },
          {
            id: "4d4b7105d754a06374d81259",
            name: "Food",
            pluralName: "Food",
            shortName: "Food",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/default_",
              suffix: ".png"
            }
          }
        ],
        hasPerk: false
      },
      {
        id: "3fd66200f964a52062e61ee3",
        name: "Lombardi's Coal Oven Pizza",
        location: {
          address: "32 Spring St",
          crossStreet: "at Mott St",
          city: "New York",
          state: "NY",
          postalCode: "10012",
          country: "US",
          lat: 40.72156708733683,
          lng: -73.99559138323225,
          distance: 480
        },
        categories: [
          {
            id: "4bf58dd8d48988d1ca941735",
            name: "Pizza Place",
            pluralName: "Pizza Places",
            shortName: "Pizza",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/pizza_",
              suffix: ".png"
            }
          },
          {
            id: "4d4b7105d754a06374d81259",
            name: "Food",
            pluralName: "Food",
            shortName: "Food",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/default_",
              suffix: ".png"
            }
          }
        ],
        hasPerk: false
      },
      {
        id: "51351c3fe4b0c58b63965114",
        name: "Joe's Pizza",
        location: {
          address: "150 E 14th St",
          crossStreet: "3rd Ave.",
          city: "New York",
          state: "NY",
          postalCode: "10003",
          country: "US",
          lat: 40.733386570577345,
          lng: -73.98731060842591,
          distance: 1097
        },
        categories: [
          {
            id: "4bf58dd8d48988d1ca941735",
            name: "Pizza Place",
            pluralName: "Pizza Places",
            shortName: "Pizza",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/pizza_",
              suffix: ".png"
            }
          },
          {
            id: "4d4b7105d754a06374d81259",
            name: "Food",
            pluralName: "Food",
            shortName: "Food",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/default_",
              suffix: ".png"
            }
          }
        ],
        hasPerk: false
      },
      {
        id: "3fd66200f964a520c7f11ee3",
        name: "Otto Enoteca Pizzeria",
        location: {
          address: "1 5th Ave",
          crossStreet: "at E 8th St",
          city: "New York",
          state: "NY",
          postalCode: "10003",
          country: "US",
          lat: 40.731990997794966,
          lng: -73.99622300550848,
          distance: 681
        },
        categories: [
          {
            id: "4bf58dd8d48988d1ca941735",
            name: "Pizza Place",
            pluralName: "Pizza Places",
            shortName: "Pizza",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/pizza_",
              suffix: ".png"
            }
          },
          {
            id: "4bf58dd8d48988d123941735",
            name: "Wine Bar",
            pluralName: "Wine Bars",
            shortName: "Wine Bar",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/winery_",
              suffix: ".png"
            }
          },
          {
            id: "4bf58dd8d48988d110941735",
            name: "Italian Restaurant",
            pluralName: "Italian Restaurants",
            shortName: "Italian",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/italian_",
              suffix: ".png"
            }
          },
          {
            id: "4d4b7105d754a06374d81259",
            name: "Food",
            pluralName: "Food",
            shortName: "Food",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/default_",
              suffix: ".png"
            }
          },
          {
            id: "4d4b7105d754a06376d81259",
            name: "Nightlife Spot",
            pluralName: "Nightlife Spots",
            shortName: "Nightlife",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/nightlife/default_",
              suffix: ".png"
            }
          },
          {
            id: "4bf58dd8d48988d116941735",
            name: "Bar",
            pluralName: "Bars",
            shortName: "Bar",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/nightlife/pub_",
              suffix: ".png"
            }
          }
        ],
        hasPerk: false
      }
    ]
  }
};