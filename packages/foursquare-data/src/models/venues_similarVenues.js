const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);
const count = utils.getRandomInt(5, 15);
let venueList = [];
for (let i = 0; i < count; i++) {
  const address = utils.getRandomAddress('NY', 'New York').split(',');
  const latlang = utils.getRandomLatLng(40.730610, -73.935242, 1000);
  const catName = utils.getRandomWord(2)
  venueList.push({
    categories: [
      {
        id: id(),
        name: catName,
        pluralName: catName,
        shortName: catName,
        icon: {
          prefix: "https://ss3.4sqi.net/img/categories_v2/food/"+ catName.split(" ").join("-") +"_",
          suffix: utils.pickRandomValue([".png", ".jpg", ".jpeg"])
        },
        primary: utils.getRandBool()
      }
    ],
    contact: {},
    id: id(),
    location: {
      address: address[0],
      crossStreet: "btwn Houston & Stanton St",
      lat: latlang[0],
      lng: latlang[1],
      labeledLatLngs: [
        {
          label: "display",
          lat: latlang[0],
          lng: latlang[1]
        }
      ],
      distance: utils.getRandomInt(5, 50),
      postalCode: address[2].split(' ')[2],
      cc: "US",
      city: "New York",
      state: "NY",
      country: "United States",
      formattedAddress: [
        address[0] + " (btwn Houston & Stanton St)",
        address[1] + "," + address[2],
        "United States"
      ]
    },
    name: utils.getRandomName().join(" "),
    venuePage: {
      id: utils.getRandomInt(100000, 999999).toString()
    }
  })
}

export const venues_similarVenues = {
  meta: {
    code: 200,
    requestId: id()
  },
  notifications: [
    {
      item: {
        unreadCount: utils.getRandomInt(0, 25)
      },
      type: "notificationTray"
    }
  ],
  response: {
    similarVenues: {
      count: count,
      items: venueList
    }
  }
};