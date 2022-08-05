// Endpoint => GET => https://api.foursquare.com/v2/venues/{venue_id}/hours
// Parameters:
// ================================================================================================================================================================================================================================================================================
// | Name          | Type   | Description                                                                                                                                                                                                                                         |
// ================================================================================================================================================================================================================================================================================
// | venue_id      | string | The venue you want photos for; e.g., Foursquare HQ's venue_id = 5a187743ccad6b307315e6fe                                                                                                                                                            |
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | client_id     | string | The unique ID associated with your developer project. Required if using "Userless" authentication.                                                                                                                                                  |
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | client_secret | string | The unique secret value associated with your developer project. Required if using "Userless" authentication.                                                                                                                                        |
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | oauth_token   | string | The access token generated via your web application as described here. Required if using "User" authentication.                                                                                                                                     |
// ================================================================================================================================================================================================================================================================================


export const venues_hours = {
  meta: {
    code: 200,
    requestId: "59a04e6fdd579714214cddc0"
  },
  response: {
    hours: {
      timeframes: [
        {
          days: [
            1,
            2,
            3,
            4,
            5
          ],
          includesToday: true,
          open: [
            {
              start: "1600",
              end: "+0100"
            }
          ],
          segments: []
        },
        {
          days: [
            6,
            7
          ],
          open: [
            {
              start: "1400",
              end: "+0000"
            }
          ],
          segments: []
        }
      ]
    },
    popular: {
      timeframes: [
        {
          days: [
            5
          ],
          includesToday: true,
          open: [
            {
              start: "1700",
              end: "+0000"
            }
          ],
          segments: []
        },
        {
          days: [
            6
          ],
          open: [
            {
              start: "1600",
              end: "+0000"
            }
          ],
          segments: []
        },
        {
          days: [
            7
          ],
          open: [
            {
              start: "1500",
              end: "2300"
            }
          ],
          segments: []
        },
        {
          days: [
            1,
            2,
            3
          ],
          open: [
            {
              start: "1800",
              end: "2300"
            }
          ],
          segments: []
        },
        {
          days: [
            4
          ],
          open: [
            {
              start: "1800",
              end: "+0000"
            }
          ],
          segments: []
        }
      ]
    }
  }
};