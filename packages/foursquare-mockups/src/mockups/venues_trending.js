// Endpoint => GET =>  https://api.foursquare.com/v2/venues/trending
// Parameters:
// =====================================================================================================================================================================================================================================================
// | Name          | Type   | Description                                                                                                                                                                                                              |
// =====================================================================================================================================================================================================================================================
// | client_id     | string | The unique ID associated with your developer project. Required if using "Userless" authentication.                                                                                                                       |
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | client_secret | string | The unique secret value associated with your developer project. Required if using "Userless" authentication.                                                                                                             |
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | oauth_token   | string | The access token generated via your web application as described here. Required if using "User" authentication.                                                                                                          |
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | ll            | string | The latitude/longitude around which you wish to retrieve place information. Specified as latitude,longitude (e.g., ll=41.8781,-87.6298).                                                                                 |
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | near          | string | A string naming a place in the world. If the near string is not geocodable, returns a failed_geocode error. Otherwise, searches within the bounds of the geocode. Adds a geocode object to the response.                 |
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | radius        | int32  | Limit results to venues within this many meters of the specified location. Defaults to a city-wide area. Only valid for requests that use categoryId or query. The maximum supported radius is currently 100,000 meters. |
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | limit         | int32  | Number of results to return, up to 50.                                                                                                                                                                                   |
// =====================================================================================================================================================================================================================================================


export const venues_trending = {
  meta: {
    code: 200,
    requestId: "5ac51dde351e3d4df64064f8"
  },
  response: {
    venues: [
      {
        id: "5735dc3f498e1ac6a088f324",
        name: "Union Fare",
        location: {
          address: "5 E 17th St",
          crossStreet: "btwn 5th Ave & Union Sq W",
          lat: 40.737697,
          lng: -73.991402,
          labeledLatLngs: [
            {
              label: "display",
              lat: 40.737697,
              lng: -73.991402
            }
          ],
          distance: 1802,
          postalCode: "10003",
          cc: "US",
          city: "New York",
          state: "NY",
          country: "United States",
          formattedAddress: [
            "5 E 17th St (btwn 5th Ave & Union Sq W)",
            "New York, NY 10003",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d157941735",
            name: "New American Restaurant",
            pluralName: "New American Restaurants",
            shortName: "New American",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/food/newamerican_",
              suffix: ".png"
            },
            primary: true
          }
        ]
      }
    ]
  }
};