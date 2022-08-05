// Endpoint => GET =>  https://api.foursquare.com/v2/venues/categories
// Parameters:
// =====================================================================================================================================================================================================================================
// | Name          | Type   | Description                                                                                                                                                                                              |
// =====================================================================================================================================================================================================================================
// | client_id     | string | The unique ID associated with your developer project. Required if using "Userless" authentication.                                                                                                       |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | client_secret | string | The unique secret value associated with your developer project. Required if using "Userless" authentication.                                                                                             |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | oauth_token   | string | The access token generated via your web application as described here. Required if using "User" authentication.                                                                                          |
// =====================================================================================================================================================================================================================================


export const venues_categories = {
  meta: {
    code: 200,
    requestId: "5854a3664434b94a0959cfb7"
  },
  notifications: [
    {
      item: {
        unreadCount: 13
      },
      type: "notificationTray"
    }
  ],
  response: {
    categories: [
      {
        categories: [
          {
            categories: [],
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/default_",
              suffix: ".png"
            },
            id: "56aa371be4b08b9a8d5734db",
            name: "Amphitheater",
            pluralName: "Amphitheaters",
            shortName: "Amphitheater"
          },
          {
            categories: [],
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/aquarium_",
              suffix: ".png"
            },
            id: "4fceea171983d5d06c3e9823",
            name: "Aquarium",
            pluralName: "Aquariums",
            shortName: "Aquarium"
          },
          {
            categories: [],
            icon: {
              prefix: "https://ss3.4sqi.net/img/categories_v2/arts_entertainment/arcade_",
              suffix: ".png"
            },
            id: "4bf58dd8d48988d1e1931735",
            name: "Arcade",
            pluralName: "Arcades",
            shortName: "Arcade"
          }
        ]
      }
    ]
  }
};