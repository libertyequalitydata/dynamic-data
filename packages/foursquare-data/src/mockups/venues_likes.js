// Endpoint => GET =>  https://api.foursquare.com/v2/venues/{venue_id}/likes
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


export const venues_likes = {
  meta: {
    code: 200,
    requestId: "5854c1f8351e3d5887252266"
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
    like: false,
    likes: {
      count: 28,
      groups: [
        {
          count: 28,
          items: [],
          type: "others"
        }
      ],
      summary: "28 Likes"
    }
  }
};