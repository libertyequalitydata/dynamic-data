const utils = require('@dynamic-data/utils');

const id = () => utils.getRandomString(24);
let venueList = [];
for (let i = 0; i < utils.getRandomInt(1, 10); i++) {
  const name = utils.getRandomWord(2);
  const address = utils.getRandomAddress('NY', 'New York').split(',');
  const latlang = utils.getRandomLatLng(40.730610, -73.935242, 1000);
  venueList.push({
    id: id(),
    name: utils.getRandomWord(2),
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
    categories: [
      {
        id: id(),
        name: name,
        pluralName: name,
        shortName: name,
        icon: {
          prefix: "https://ss3.4sqi.net/img/categories_v2/"+ utils.getRandomWord(1) +"/"+ name.split(" ").join("-") +"_",
          suffix: utils.pickRandomValue([".png", ".jpg", ".jpeg"])
        }
      }
    ]
  })
}

export const venues_trending = {
  meta: {
    code: 200,
    requestId: id()
  },
  response: {
    venues: venueList
  }
};