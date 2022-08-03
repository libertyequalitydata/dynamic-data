// Endpoint => GET =>  https://api.foursquare.com/v2/venues/{venue_id}/listed
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
// | group         | string | can be created, edited, followed, friends, other. If no acting user is present, only other is supported.        |
// --------------------------------------------------------------------------------------------------------------------------------------------
// | limit         | string | Number of results to return, up to 200.                                                                         |
// --------------------------------------------------------------------------------------------------------------------------------------------
// | offset        | string | Used to page through results. Must specify a group.                                                             |
// ============================================================================================================================================


export const venues_getVenueList = {
  meta: {
    code: 200,
    requestId: "59a0753edb04f50b0d02dbd7"
  },
  response: {
    lists: {
      count: 1277,
      groups: [
        {
          type: "others",
          name: "Lists from other people",
          count: 1277,
          items: [
            {
              id: "4ff21e86e4b0ac2746c17ac1",
              name: "NYC Bars w/ Free Wi-Fi",
              description: "",
              type: "others",
              user: {
                id: "2027973",
                firstName: "The Spark Group",
                photo: {
                  prefix: "https://igx.4sqi.net/img/user/",
                  suffix: "/123456.png"
                }
              },
              editable: false,
              public: true,
              collaborative: false,
              url: "/thesparkgroup/list/nyc-bars-w-free-wifi",
              canonicalUrl: "https://foursquare.com/thesparkgroup/list/nyc-bars-w-free-wifi",
              createdAt: 1341267590,
              updatedAt: 1474559629,
              photo: {
                id: "4e7e76fd46906788c6b9da00",
                createdAt: 1316910845,
                prefix: "https://igx.4sqi.net/img/general/",
                suffix: "/XZYJNQSANIQTTIDP4ZFTEUDXF50Q5234VCKEEMXII1JSV0XS.jpg",
                width: 537,
                height: 720,
                user: {
                  id: "123456",
                  firstName: "John",
                  lastName: "D",
                  photo: {
                    prefix: "https://igx.4sqi.net/img/user/",
                    suffix: "/123456.jpg"
                  }
                },
                visibility: "public"
              },
              followers: {
                count: 108
              },
              listItems: {
                count: 147,
                items: [
                  {
                    id: "v4cbcafab035d236aebebe64e",
                    createdAt: 1341320340
                  }
                ]
              }
            },
            {
              id: "51e85183498e59b10a3f7bea",
              name: "Summer Parties",
              description: "Put on your dancing shoes and head to these sizzling spots for summer’s hottest parties.",
              type: "others",
              user: {
                id: "742542",
                firstName: "Time Out New York",
                photo: {
                  prefix: "https://igx.4sqi.net/img/user/",
                  suffix: "/XXHKCBSQHBORZNSR.jpg"
                },
                type: "page"
              },
              editable: false,
              public: true,
              collaborative: false,
              url: "/timeoutnewyork/list/summer-parties",
              canonicalUrl: "https://foursquare.com/timeoutnewyork/list/summer-parties",
              createdAt: 1374179715,
              updatedAt: 1374180690,
              photo: {
                id: "51e84fbf8bbdf64c271c797b",
                createdAt: 1374179263,
                prefix: "https://igx.4sqi.net/img/general/",
                suffix: "/742542_FrC-C6NUK0-7sjuLGQcVvyDcQhAhlfjd8Ghw_FxJigE.jpg",
                width: 555,
                height: 370,
                user: {
                  id: "742542",
                  firstName: "Time Out New York",
                  photo: {
                    prefix: "https://igx.4sqi.net/img/user/",
                    suffix: "/XXHKCBSQHBORZNSR.jpg"
                  },
                  type: "page"
                },
                visibility: "public"
              },
              logView: true,
              followers: {
                count: 304
              },
              listItems: {
                count: 14,
                items: [
                  {
                    id: "t51e8543b498e7d7abd657c24",
                    createdAt: 1374180131,
                    photo: {
                      id: "51e854598bbdf64c27214c74",
                      createdAt: 1374180441,
                      prefix: "https://igx.4sqi.net/img/general/",
                      suffix: "/742542_Vj4eR1iQui22nyGV4G-xvfruWkRmr7hcOwXMaPbwVho.jpg",
                      width: 555,
                      height: 370,
                      user: {
                        id: "742542",
                        firstName: "Time Out New York",
                        photo: {
                          prefix: "https://igx.4sqi.net/img/user/",
                          suffix: "/XXHKCBSQHBORZNSR.jpg"
                        },
                        type: "page"
                      },
                      visibility: "public"
                    }
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  }
};