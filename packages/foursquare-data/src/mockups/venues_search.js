// Endpoint => GET => https://api.foursquare.com/v2/venues/search
// Parameters:
// =========================================================================================================================================================================================================================================================================
// | Name          | Type   | Description                                                                                                                                                                                                                                  |
// =========================================================================================================================================================================================================================================================================
// | client_id     | string | The unique ID associated with your developer project. Required if using "Userless" authentication.                                                                                                                                           |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | client_secret | string | The unique secret value associated with your developer project. Required if using "Userless" authentication.                                                                                                                                 |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | oauth_token   | string | The access token generated via your web application as described here. Required if using "User" authentication.                                                                                                                              |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | query         | string | A string to be searched against a venue's tips, category, etc.                                                                                                                                                                               |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | ll            | string | The latitude/longitude around which to retrieve place information. This must be specified as latitude,longitude (e.g., ll=41.8781,-87.6298). Required if near is not specified.                                                              |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | near          | string | A string naming a place in the world. If the near string is not geocodable, returns a failed_geocode error. Otherwise, searches within the bounds of the geocode and adds a geocode object to the response. Required if ll is not specified. |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | radius        | int32  | Limit results to venues within this many meters of the specified location. Defaults to a city-wide area. Only valid for requests that use categoryId or query. The maximum supported radius is currently 100,000 meters.                     |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | categoryId    | string | A comma separated list of categories to limit results to. If you specify categoryId. Specifying a radius may improve results. If specifying a top-level category, all sub-categories will also match the query.                              |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | limit         | int32  | Number of results to return; up to 50.                                                                                                                                                                                                       |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | url           | string | A third-party URL which we will attempt to match against our map of venues to URLs.                                                                                                                                                          |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | providerId    | string | Identifier for a known third party that is part of our map of venues to URLs, used in conjunction with linkedId.                                                                                                                             |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | linkedID      | string | Identifier used by third party specified in providerId, which we will attempt to match against our map of venues to URLs.                                                                                                                    |
// =========================================================================================================================================================================================================================================================================

export const venues_search = {
  meta: {
    code: 200,
    requestId: "5ac51d7e6a607143d811cecb"
  },
  response: {
    venues: [
      {
        id: "5642aef9498e51025cf4a7a5",
        name: "Mr. Purple",
        location: {
          address: "180 Orchard St",
          crossStreet: "btwn Houston & Stanton St",
          lat: 40.72173744277209,
          lng: -73.98800687282996,
          labeledLatLngs: [
            {
              label: "display",
              lat: 40.72173744277209,
              lng: -73.98800687282996
            }
          ],
          distance: 8,
          postalCode: "10002",
          cc: "US",
          city: "New York",
          state: "NY",
          country: "United States",
          formattedAddress: [
            "180 Orchard St (btwn Houston & Stanton St)",
            "New York, NY 10002",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d1d5941735",
            name: "Hotel Bar",
            pluralName: "Hotel Bars",
            shortName: "Hotel Bar",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/travel/hotel_bar_",
              suffix: ".png"
            },
            primary: true
          }
        ],
        venuePage: {
          id: "150747252"
        }
      }
    ]
  }
};