// Endpoint => GET =>  https://api.foursquare.com/v2/photos/{photo_id}
// Parameters:
// ======================================================================================
// | Name        | Type   | Description                                                 |
// ======================================================================================
// | photo_id    | string | The ID of the photo to retrieve additional information for. |
// --------------------------------------------------------------------------------------
// | oauth_token | string | The access token generated via your web application         |
// ======================================================================================

export const photos_details = {
  meta: {
    code: 200,
    requestId: "599c8bf69fb6b72fcfa0779e"
  },
  response: {
    photo: {
      id: "51e4151c498e60b5d17bc721",
      createdAt: 1373902108,
      source: {
        name: "Instagram",
        url: "http://instagram.com"
      },
      prefix: "https://igx.4sqi.net/img/general/",
      suffix: "/1022386_wEd7VXnWzp5lajvRLtAPunoiufDSIq8PMEtEuIH2Tzg.jpg",
      width: 612,
      height: 612,
      user: {
        firstName: "John",
        lastName: "D",
        countryCode: "US"
      },
      visibility: "public",
      venue: {
        id: "427c0500f964a52097211fe3",
        name: "The Metropolitan Museum of Art (Metropolitan Museum of Art)",
        contact: {},
        location: {
          address: "1000 5th Ave",
          crossStreet: "btwn E 80th & E 84th St",
          lat: 40.779150129460504,
          lng: -73.9627398125614,
          postalCode: "10028",
          cc: "US",
          city: "New York",
          state: "NY",
          country: "United States",
          formattedAddress: [
            "1000 5th Ave (btwn E 80th & E 84th St)",
            "New York, NY 10028",
            "United States"
          ]
        },
        categories: [
          {
            id: "4bf58dd8d48988d18f941735",
            name: "Art Museum",
            pluralName: "Art Museums",
            shortName: "Art Museum",
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/museum_art_",
              suffix: ".png"
            },
            primary: true
          }
        ]
      }
    }
  }
};