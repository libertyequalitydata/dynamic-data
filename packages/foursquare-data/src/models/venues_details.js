const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);
const name = utils.getRandomWord(utils.getRandomInt(1,3));
const username = name+utils.getRandomInt(10000,99999).toString();
const phoneExt = utils.getRandomInt(100,999).toString();
const phone = utils.getRandomInt(100,999).toString()+"-"+utils.getRandomInt(1000,9999).toString();
const address = utils.getRandomAddress('NY', 'New York').split(',');
const latlang = utils.getRandomLatLng(40.730610, -73.935242, 1000);
const likes = utils.getRandomInt(100, 99999999);

var categoryList = [];
for (var i = 0; i < utils.getRandomInt(1, 5); i++) {
  const word = utils.getRandomWord(utils.getRandomInt(1, 3));
  categoryList.push({
    id: id(),
    name: word,
    pluralName: word,
    shortName: word,
    icon: {
      prefix: "https://ss3.4sqi.net/img/categories_v2/"+utils.getRandomWord(2).split(' ').join('_')+"/default_",
      suffix: utils.pickRandomValue([".png", ".jpg", ".jpeg"])
    },
    primary: true
  })
}

const photoCount = utils.getRandomInt(1000, 999999);
var photoList = [];
for (var i = 0; i < utils.getRandomInt(1, 5); i++) {
  const photoName = utils.getRandomName();
  photoList.push({
    id: id(),
    createdAt: utils.getRandomDateTime(),
    source: {
      name: "Instagram",
      url: "http://instagram.com"
    },
    prefix: "https://igx.4sqi.net/img/general/",
    suffix: `/1022386_${utils.getRandomString(43)}.jpg`,
    width: 612,
    height: 612,
    user: {
      firstName: photoName[0],
      lastName: photoName[1],
      countryCode: "US"
    },
    visibility: utils.pickRandomValue(["public", "private"])
  })
}

const tipCount = utils.getRandomInt(1, 99999);
var tipList = [];
for (var i = 0; i < utils.getRandomInt(1, 5); i++) {
  const tipId = id();
  const likeCount = utils.getRandomInt(5, 9999);
  const tipName = utils.getRandomName();
  tipList.push({
    id: tipId,
    createdAt: utils.getRandomDateTime(),
    text: utils.getRandomWord(utils.getRandomInt(5, 25)),
    type: "user",
    canonicalUrl: "https://foursquare.com/item/"+tipId,
    photo: {
      id: id(),
      createdAt: utils.getRandomDateTime(),
      source: {
        name: "Foursquare Web",
        url: "https://foursquare.com"
      },
      prefix: "https://igx.4sqi.net/img/general/",
      suffix: "/"+ utils.getRandomString(25) +".jpg",
      width: 800,
      height: 542,
      visibility: utils.pickRandomValue(["public", "private"])
    },
    photourl: "https://igx.4sqi.net/img/general/original/13764780_"+ utils.getRandomString(42) +".jpg",
    lang: "en",
    likes: {
      count: likeCount,
      groups: [
        {
          type: "others",
          count: likeCount,
          items: []
        }
      ],
      summary: likeCount.toString() + " likes"
    },
    logView: utils.getRandBool(),
    agreeCount: likeCount,
    disagreeCount: utils.getRandomInt(1,50),
    todo: {
      count: utils.getRandomInt(5, 50)
    },
    user: {
      firstName: tipName[0],
      lastName: tipName[1],
      countryCode: "US"
    }
  })
}

const listedCount = utils.getRandomInt(1, 99999);
var listedItems = [];
for (var i = 0; i < utils.getRandomInt(1, 5); i++) {
  const listedTitleName = utils.getRandomWord(utils.getRandomInt(5, 20));
  const listedName = utils.getRandomName();
  const listedNameAlt = utils.getRandomName();
  listedItems.push({
    id: id(),
    name: listedTitleName,
    description: utils.getRandomWord(utils.getRandomInt(5, 40)),
    type: "others",
    user: {
      firstName: listedName[0],
      lastName: listedName[1],
      countryCode: "US"
    },
    editable: utils.getRandBool(),
    public: utils.getRandBool(),
    collaborative: utils.getRandBool(),
    url: "/boke/list/" + listedTitleName,
    canonicalUrl: "https://foursquare.com/boke/list/" + listedTitleName,
    createdAt: utils.getRandomDateTime(),
    updatedAt: utils.getRandomDateTime(),
    photo: {
      id: id(),
      createdAt: utils.getRandomDateTime(),
      prefix: "https://igx.4sqi.net/img/general/",
      suffix: "/"+ utils.getRandomString(45) +".jpg",
      width: 325,
      height: 487,
      user: {
        firstName: listedNameAlt[0],
        lastName: listedNameAlt[1],
        countryCode: "US"
      },
      visibility: utils.pickRandomValue(["public", "private"])
    },
    followers: {
      count: utils.getRandomInt(1, 99999)
    },
    listItems: {
      count: utils.getRandomInt(1, 99999),
      items: [
        {
          id: id(),
          createdAt: utils.getRandomDateTime(),
          photo: {
            id: id(),
            createdAt: utils.getRandomDateTime(),
            prefix: "https://igx.4sqi.net/img/general/",
            suffix: "/"+ utils.getRandomString(45) +".jpg",
            width: 720,
            height: 532,
            visibility: utils.pickRandomValue(["public", "private"])
          }
        }
      ]
    }
  })
}

export const venues_details = {
  meta: {
    code: 200,
    requestId: id()
  },
  response: {
    venue: {
      id: id(),
      name: name,
      contact: {
        phone: phoneExt+phone.split('-').join(''),
        formattedPhone: "("+phoneExt+") "+phone,
        twitter: username,
        instagram: username,
        facebook: utils.getRandomInt(10000000000, 99999999999).toString(),
        facebookUsername: name+utils.getRandomInt(10000, 99999).toString(),
        facebookName: name
      },
      location: {
        address: address[0],
        crossStreet: "btwn E 80th & E 84th St",
        lat: latlang[0],
        lng: latlang[1],
        postalCode: address[2].split(' ')[2],
        cc: "US",
        city: "New York",
        state: "NY",
        country: "United States",
        formattedAddress: [
          address[0] + " (btwn E 80th & E 84th St)",
          address[1] + "," + address[2],
          "United States"
        ]
      },
      canonicalUrl: "https://foursquare.com/v/"+name.split(" ").join("-")+"/"+id(),
      categories: categoryList,
      verified: utils.getRandBool(),
      stats: {
        checkinsCount: utils.getRandomInt(100000,999999),
        usersCount: utils.getRandomInt(100000,999999),
        tipCount: utils.getRandomInt(1000,9999),
        visitsCount: utils.getRandomInt(100000,999999)
      },
      url: "http://www."+name.split(" ").join("").toLowerCase()+".org",
      likes: {
        count: likes,
        summary: likes.toString()+" Likes"
      },
      rating: utils.getRandomFloat(3,9),
      ratingColor: "00B551",
      ratingSignals: utils.getRandomInt(100000,999999),
      beenHere: {
        count: utils.getRandomInt(1,10),
        unconfirmedCount: utils.getRandomInt(1,10),
        marked: utils.getRandBool(),
        lastCheckinExpiredAt: utils.getRandomInt(1,10)
      },
      photos: {
        count: photoCount,
        groups: [
          {
            type: "venue",
            name: "Venue photos",
            count: photoCount,
            items: photoList
          }
        ]
      },
      description: utils.getRandomWord(utils.getRandomInt(5, 25)),
      storeId: "",
      page: {
        pageInfo: {
          description: utils.getRandomWord(utils.getRandomInt(5, 25)),
          banner: "https://is1.4sqi.net/userpix/"+utils.getRandomString(10)+".jpg",
          links: {
            count: utils.getRandomInt(5, 100),
            items: [
              {
                url: "http://www."+name.split(" ").join("").toLowerCase()+".org"
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
        count: utils.getRandomInt(5, 50),
        summary: utils.getRandomInt(5, 25).toString() + " people are here",
        groups: [
          {
            type: "others",
            name: "Other people here",
            count: utils.getRandomInt(3, 15),
            items: []
          }
        ]
      },
      createdAt: utils.getRandomDateTime(),
      tips: {
        count: tipCount,
        groups: [
          {
            type: "others",
            name: "All tips",
            count: tipCount,
            items: tipList
          }
        ]
      },
      shortUrl: "http://4sq.com/" + utils.getRandomString(6),
      timeZone: "America/New_York",
      listed: {
        count: listedCount,
        groups: [
          {
            type: "others",
            name: "Lists from other people",
            count: listedCount,
            items: listedItems
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
        count: utils.getRandomInt(0, 50),
        items: []
      },
      inbox: {
        count: utils.getRandomInt(0, 50),
        items: []
      },
      venueChains: [],
      attributes: {
        groups: [
          {
            type: "payments",
            name: "Credit Cards",
            summary: "No Credit Cards",
            count: utils.getRandomInt(1, 50),
            items: [
              {
                displayName: "Credit Cards",
                displayValue: "No"
              }
            ]
          }
        ]
      },
      bestPhoto: photoList[Math.floor(Math.random() * photoList.length)]
    }
  }
};