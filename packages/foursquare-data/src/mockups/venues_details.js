// Endpoint => GET => https://api.foursquare.com/v2/venues/{venue_id}/
// Parameters:
// ===============================================================================================================================================================================================================================================================================================================================================================================
// | Name             | Type    | Description                                                                                                                                                                                                                                                                                                                                    |
// ===============================================================================================================================================================================================================================================================================================================================================================================
// | client_id        | string  | The unique ID associated with your developer project. Required if using "Userless" authentication.                                                                                                                                                                                                                                             |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | client_secret    | string  | The unique secret value associated with your developer project. Required if using "Userless" authentication.                                                                                                                                                                                                                                   |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | oauth_token      | string  | The access token generated via your web application as described here. Required if using "User" authentication.                                                                                                                                                                                                                                |
// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// | venue_id         | string  | The venue you want details for; e.g., Foursquare HQ's venue_id = 5a187743ccad6b307315e6fe                                                                                                                                                                                                                                                      |
// ===============================================================================================================================================================================================================================================================================================================================================================================


export const venues_details = {
  meta: {
    code: 200,
    requestId: "59a45921351e3d43b07028b5"
  },
  response: {
    venue: {
      id: "412d2800f964a520df0c1fe3",
      name: "Central Park",
      contact: {
        phone: "2123106600",
        formattedPhone: "(212) 310-6600",
        twitter: "centralparknyc",
        instagram: "centralparknyc",
        facebook: "37965424481",
        facebookUsername: "centralparknyc",
        facebookName: "Central Park"
      },
      location: {
        address: "59th St to 110th St",
        crossStreet: "5th Ave to Central Park West",
        lat: 40.78408342593807,
        lng: -73.96485328674316,
        postalCode: "10028",
        cc: "US",
        city: "New York",
        state: "NY",
        country: "United States",
        formattedAddress: [
          "59th St to 110th St (5th Ave to Central Park West)",
          "New York, NY 10028",
          "United States"
        ]
      },
      canonicalUrl: "https://foursquare.com/v/central-park/412d2800f964a520df0c1fe3",
      categories: [
        {
          id: "4bf58dd8d48988d163941735",
          name: "Park",
          pluralName: "Parks",
          shortName: "Park",
          icon: {
            prefix: "https://ss3.4sqi.net/img/categories_v2/parks_outdoors/park_",
            suffix: ".png"
          },
          primary: true
        }
      ],
      verified: true,
      stats: {
        checkinsCount: 364591,
        usersCount: 311634,
        tipCount: 1583,
        visitsCount: 854553
      },
      url: "http://www.centralparknyc.org",
      likes: {
        count: 17370,
        summary: "17370 Likes"
      },
      rating: 9.8,
      ratingColor: "00B551",
      ratingSignals: 18854,
      beenHere: {
        count: 0,
        unconfirmedCount: 0,
        marked: false,
        lastCheckinExpiredAt: 0
      },
      photos: {
        count: 26681,
        groups: [
          {
            type: "others",
            name: "All tips",
            count: 26681,
            items: [
              {
                id: "513bd223e4b0e8ef8292ee54",
                createdAt: 1362874915,
                source: {
                  name: "Instagram",
                  url: "http://instagram.com"
                },
                prefix: "https://igx.4sqi.net/img/general/",
                suffix: "/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg",
                width: 612,
                height: 612,
                user: {
                  firstName: "John",
                  lastName: "D",
                  countryCode: "US"
                },
                visibility: "public"
              }
            ]
          }
        ]
      },
      description: "Central Park is the 843-acre green heart of Manhattan and is maintained by the Central Park Conservancy. It was designed in the 19th century by Frederick Law Olmsted and Calvert Vaux as an urban escape for New Yorkers, and now receives over 40 million visits per year.",
      storeId: "",
      page: {
        pageInfo: {
          description: "The mission of the Central Park Conservancy, a private non-profit, is to restore, manage, and enhance Central Park, in partnership with the public.",
          banner: "https://is1.4sqi.net/userpix/HS2JAA2IAAAR2WZO.jpg",
          links: {
            count: 1,
            items: [
              {
                url: "http://www.centralparknyc.org"
              }
            ]
          }
        },
        user: {
          firstName: "John",
          lastName: "D",
          countryCode: "US"
        }
      },
      hereNow: {
        count: 16,
        summary: "16 people are here",
        groups: [
          {
            type: "others",
            name: "Other people here",
            count: 16,
            items: []
          }
        ]
      },
      createdAt: 1093478400,
      tips: {
        count: 1583,
        groups: [
          {
            type: "others",
            name: "All tips",
            count: 1583,
            items: [
              {
                id: "5150464ee4b02f70eb28eee4",
                createdAt: 1364215374,
                text: "Did you know? To create that feeling of being in the countryside, and not in the middle of a city, the four Transverse Roads were sunken down eight feet below the park’s surface.",
                type: "user",
                canonicalUrl: "https://foursquare.com/item/5150464ee4b02f70eb28eee4",
                photo: {
                  id: "5150464f52625adbe29d04c2",
                  createdAt: 1364215375,
                  source: {
                    name: "Foursquare Web",
                    url: "https://foursquare.com"
                  },
                  prefix: "https://igx.4sqi.net/img/general/",
                  suffix: "/13764780_Ao02DfJpgG1ar2PfgP51hOKWsn38iai8bsSpzKd0GcM.jpg",
                  width: 800,
                  height: 542,
                  visibility: "public"
                },
                photourl: "https://igx.4sqi.net/img/general/original/13764780_Ao02DfJpgG1ar2PfgP51hOKWsn38iai8bsSpzKd0GcM.jpg",
                lang: "en",
                likes: {
                  count: 247,
                  groups: [
                    {
                      type: "others",
                      count: 247,
                      items: []
                    }
                  ],
                  summary: "247 likes"
                },
                logView: true,
                agreeCount: 246,
                disagreeCount: 0,
                todo: {
                  count: 30
                },
                user: {
                  firstName: "John",
                  lastName: "D",
                  countryCode: "US"
                }
              },
              {
                id: "522afa5b11d2740e9aeeb336",
                createdAt: 1378548315,
                text: "Lots of squirrels in the park! パーク内にはリスがたくさんいます！しかも思ったよりデカイです。",
                type: "user",
                logView: true,
                editedAt: 1399418942,
                agreeCount: 61,
                disagreeCount: 0,
                todo: {
                  count: 1
                },
                user: {
                  firstName: "John",
                  lastName: "D",
                  countryCode: "US"
                },
                authorInteractionType: "liked"
              },
              {
                id: "4cd5bda1b6962c0fd19c2e96",
                createdAt: 1289076129,
                text: "PHOTO: 1975 was the last year the New York City marathon was raced entirely inside Central Park. In this photo, runners at the marathon starting line.",
                type: "user",
                url: "http://www.nydailynewspix.com/sales/largeview.php?name=87g0km0g.jpg&id=152059&lbx=-1&return_page=searchResults.php&page=2",
                canonicalUrl: "https://foursquare.com/item/4cd5bda1b6962c0fd19c2e96",
                lang: "en",
                likes: {
                  count: 26,
                  groups: [
                    {
                      type: "others",
                      count: 26,
                      items: []
                    }
                  ],
                  summary: "26 likes"
                },
                logView: true,
                agreeCount: 25,
                disagreeCount: 0,
                todo: {
                  count: 16
                },
                user: {
                  firstName: "John",
                  lastName: "D",
                  countryCode: "US"
                }
              }
            ]
          }
        ]
      },
      shortUrl: "http://4sq.com/2UsPUp",
      timeZone: "America/New_York",
      listed: {
        count: 5731,
        groups: [
          {
            type: "others",
            name: "Lists from other people",
            count: 5731,
            items: [
              {
                id: "4fad24a2e4b0bcc0c18be03c",
                name: "101 places to see in Manhattan before you die",
                description: "Best spots to see in Manhattan (New York City) as restaurants, monuments and public spaces. Enjoy!",
                type: "others",
                user: {
                  firstName: "John",
                  lastName: "D",
                  countryCode: "US"
                },
                editable: false,
                public: true,
                collaborative: false,
                url: "/boke/list/101-places-to-see-in-manhattan-before-you-die",
                canonicalUrl: "https://foursquare.com/boke/list/101-places-to-see-in-manhattan-before-you-die",
                createdAt: 1336747170,
                updatedAt: 1406242886,
                photo: {
                  id: "4fa97b0c121d8a3faef6f2df",
                  createdAt: 1336507148,
                  prefix: "https://igx.4sqi.net/img/general/",
                  suffix: "/IcmBihQCVr4Zt0Vxt9l237NHv--nxg1Z5_8QIMjeD8E.jpg",
                  width: 325,
                  height: 487,
                  user: {
                    firstName: "John",
                    lastName: "D",
                    countryCode: "US"
                  },
                  visibility: "public"
                },
                followers: {
                  count: 944
                },
                listItems: {
                  count: 101,
                  items: [
                    {
                      id: "t4b67904a70c603bb845291b4",
                      createdAt: 1336747293,
                      photo: {
                        id: "4faa9dd9e4b01bd5523d1de8",
                        createdAt: 1336581593,
                        prefix: "https://igx.4sqi.net/img/general/",
                        suffix: "/KaAuGPKMZev1Te0uucRYHk92RiULGj3-GYWkX_zXbjM.jpg",
                        width: 720,
                        height: 532,
                        visibility: "public"
                      }
                    }
                  ]
                }
              }
            ]
          }
        ]
      },
      phrases: [
        {
          phrase: "parque todo",
          sample: {
            entities: [
              {
                indices: [
                  22,
                  33
                ],
                type: "keyPhrase"
              }
            ],
            text: "... a ponta, curtir o parque todo, sem pressa, admirando cada lugar. Se puder..."
          },
          count: 4
        }
      ],
      hours: {
        status: "Open until 1:00 AM",
        isOpen: true,
        isLocalHoliday: false,
        timeframes: [
          {
            days: "Mon–Sun",
            includesToday: true,
            open: [
              {
                renderedTime: "6:00 AM–1:00 AM"
              }
            ],
            segments: []
          }
        ]
      },
      popular: {
        status: "Likely open",
        isOpen: true,
        isLocalHoliday: false,
        timeframes: [
          {
            days: "Tue–Thu",
            open: [
              {
                renderedTime: "Noon–8:00 PM"
              }
            ],
            segments: []
          },
          {
            days: "Fri",
            open: [
              {
                renderedTime: "11:00 AM–7:00 PM"
              }
            ],
            segments: []
          },
          {
            days: "Sat",
            open: [
              {
                renderedTime: "8:00 AM–8:00 PM"
              }
            ],
            segments: []
          },
          {
            days: "Sun",
            open: [
              {
                renderedTime: "8:00 AM–7:00 PM"
              }
            ],
            segments: []
          }
        ]
      },
      pageUpdates: {
        count: 12,
        items: []
      },
      inbox: {
        count: 0,
        items: []
      },
      venueChains: [],
      attributes: {
        groups: [
          {
            type: "payments",
            name: "Credit Cards",
            summary: "No Credit Cards",
            count: 7,
            items: [
              {
                displayName: "Credit Cards",
                displayValue: "No"
              }
            ]
          }
        ]
      },
      bestPhoto: {
        id: "513bd223e4b0e8ef8292ee54",
        createdAt: 1362874915,
        source: {
          name: "Instagram",
          url: "http://instagram.com"
        },
        prefix: "https://igx.4sqi.net/img/general/",
        suffix: "/655018_Zp3vA90Sy4IIDApvfAo5KnDItoV0uEDZeST7bWT-qzk.jpg",
        width: 612,
        height: 612,
        visibility: "public"
      }
    }
  }
};